<?php

namespace Drupal\medife\Controller;

use Auth0\SDK\API\Authentication;
use Auth0\SDK\Auth0;
use Auth0\SDK\JWTVerifier;
use Drupal\Auth0\Auth0Helper;
use Drupal\Core\Config\ConfigFactoryInterface;
use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Logger\LoggerChannelFactoryInterface;
use Drupal\Core\Logger\LoggerChannelInterface;
use Drupal\Core\PageCache\ResponsePolicyInterface;
use Drupal\Core\Routing\TrustedRedirectResponse;
use Firebase\JWT\JWT;
use GuzzleHttp\Client;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Zend\Diactoros\Response\JsonResponse;
use const AUTH0_JWT_LEEWAY_DEFAULT;
use function apache_request_headers;

/**
 * Controller routines for auth0 authentication.
 */
class MedifeController extends ControllerBase {

    const AUTH0_DOMAIN = 'auth0_domain';
    const AUTH0_CLIENT_ID = 'auth0_client_id';
    const AUTH0_CLIENT_SECRET = 'auth0_client_secret';
    const AUTH0_JWT_SIGNING_ALGORITHM = 'auth0_jwt_signature_alg';
    const AUTH0_SECRET_ENCODED = 'auth0_secret_base64_encoded';

    /**
     * Defines the default JWT leeway.
     */
    const AUTH0_JWT_LEEWAY_DEFAULT = 180;

    /**
     * The event dispatcher.
     *
     * @var EventDispatcherInterface
     */
    protected $eventDispatcher;

    /**
     * The config factory.
     *
     * @var ConfigFactoryInterface
     */
    protected $config;

    /**
     * Logs messages and errors.
     *
     * @var LoggerChannelInterface
     */
    protected $logger;

    /**
     * The auth0 instance.
     *
     * @var \Auth0\SDK\Auth0
     */
    protected $auth0 = FALSE;

    /**
     * The auth0 helper.
     *
     * @var Auth0Helper
     */
    protected $helper;

    /**
     * The http client.
     *
     * @var \Drupal\auth0\Controller\ClientFactory
     */
    protected $httpClient;

    /**
     * If to redirect for SSO.
     *
     * @var bool
     */
    protected $redirectForSso;

    /**
     * Authentication Client.
     *
     * @var \Auth0\SDK\API\Authentication
     */
    protected $authentication;

    /**
     * AuthController constructor.
     *
     * @param ResponsePolicyInterface $page_kill_switch
     *   Determine's if page should be stored in cache.
     * @param ConfigFactoryInterface $config
     *   The config factory.
     * @param LoggerChannelFactoryInterface $logger
     *   The logger to log messages and errors.
     * @param EventDispatcherInterface $event_dispatcher
     *   Dispatches events.
     * @param Client $http_client
     *   The http client to make external requests.
     * @param Auth0Helper $helper
     *   The auth0 helper.
     */
    public function __construct(
    ResponsePolicyInterface $page_kill_switch, ConfigFactoryInterface $config, LoggerChannelFactoryInterface $logger, EventDispatcherInterface $event_dispatcher, Client $http_client, Auth0Helper $helper
    ) {
        // Ensure the pages this controller servers never gets cached.
        $page_kill_switch->trigger();

        $this->eventDispatcher = $event_dispatcher;
//
//    $this->logger = $logger->get('auth0');
        $this->config = $config->get('medife.settings');
//    $this->httpClient = $http_client;
        $this->helper = $helper;
//    $this->redirectForSso = (bool) $this->config->get('auth0_redirect_for_sso');
    }

    /**
     * {@inheritdoc}
     */
    public static function create(ContainerInterface $container) {
        return new static(
                $container->get('page_cache_kill_switch'), $container->get('config.factory'), $container->get('logger.factory'), $container->get('event_dispatcher'), $container->get('http_client'), $container->get('auth0.helper')
        );
    }

    /**
     * Login method.
     *
     * @return array|\Drupal\Core\Routing\TrustedRedirectResponse
     *   The redirect response.
     */
    public function login() {
        global $base_root;

        $response = new Response();

        // The following headers force validation of cache.
        $response->headers->set('Expires', 'Sun, 19 Nov 1978 05:00:00 GMT');
        $response->headers->set('Cache-Control', 'must-revalidate');
        $response->headers->set('Content-Type', 'text/html; charset=utf-8');

        $file_name = __DIR__ . '/../../../../../spa/index.html';
        $handle = fopen($file_name, 'r');
        $salida = fread($handle, filesize($file_name));
        fclose($handle);
        $response->setContent($salida);

        return $response;
    }

    /**
     * Handles the callback for the oauth transaction.
     *
     * @param Request $request
     *   The request.
     *
     * @return \Symfony\Component\HttpFoundation\RedirectResponse
     *   The redirect response.
     */
    public function ping_seguro(Request $request) {
        global $base_root;


        $requestHeaders = apache_request_headers();

        if (!isset($requestHeaders['authorization']) && !isset($requestHeaders['Authorization'])) {
//    header('HTTP/1.0 401 Unauthorized');
//    header('Content-Type: application/json; charset=utf-8');
//    echo json_encode(array("message" => "No token provided."));
            throw new \Exception("No token provided.");
        }

        $authorizationHeader = isset($requestHeaders['authorization']) ? $requestHeaders['authorization'] : $requestHeaders['Authorization'];

        if ($authorizationHeader == null) {
//    header('HTTP/1.0 401 Unauthorized');
//    header('Content-Type: application/json; charset=utf-8');
//    echo json_encode(array("message" => "No authorization header sent."));
            throw new \Exception("No authorization header sent.");
        }

        $authorizationHeader = str_replace('bearer ', '', $authorizationHeader);
        $token = str_replace('Bearer ', '', $authorizationHeader);




        // Validate the ID Token.
        $auth0_domain = 'https://' . $this->config->get(Auth0Helper::AUTH0_DOMAIN) . '/';
        $auth0_settings = [];
        $auth0_settings['authorized_iss'] = [$auth0_domain];
        $auth0_settings['supported_algs'] = [$this->config->get(self::AUTH0_JWT_SIGNING_ALGORITHM)];
        $auth0_settings['valid_audiences'] = ['https://pruebas2.medife.com.ar'];
        $auth0_settings['client_secret'] = $this->config->get(self::AUTH0_CLIENT_SECRET);
        $auth0_settings['secret_base64_encoded'] = $this->config->get(self::AUTH0_SECRET_ENCODED);
        $jwt_verifier = new JWTVerifier($auth0_settings);
        try {
            JWT::$leeway = $this->config->get('auth0_jwt_leeway') ?: self::AUTH0_JWT_LEEWAY_DEFAULT;
            $user = $jwt_verifier->verifyAndDecode($token);
        } catch (\Exception $e) {
            return $this->failLogin(t('There was a problem logging you in, sorry for the inconvenience.'), 'Failed to verify and decode the JWT: ' . $e->getMessage());
        }




        // ejemplo de como obtener la info del perfil
        // Set store to null so that the store is set to SessionStore.
        $authArray = [
            'domain' => $this->config->get(self::AUTH0_DOMAIN),
            'client_id' => $this->config->get(self::AUTH0_CLIENT_ID),
            'client_secret' => $this->config->get(self::AUTH0_CLIENT_SECRET),
            'redirect_uri' => "$base_root/auth0/callback",
            'store' => NULL,
            'persist_id_token' => FALSE,
            'persist_user' => FALSE,
            'persist_access_token' => FALSE,
            'persist_refresh_token' => FALSE,
        ];
        $this->auth0 = new Auth0($authArray);
        $this->crearAutenticador($authArray);
        $userInfo = $this->authentication->userinfo($token);




        return new JsonResponse(array('message' => 'okgus'));
    }

    

    public function crearAutenticador(array $config) {

        $this->authentication = new Authentication($config['domain'], $config['client_id'], $config['client_secret'], $config['audience'], $config['scope'], $config['guzzle_options']);
    }

}

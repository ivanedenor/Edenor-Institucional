<?php

namespace Drupal\progressive_cms\Controller;

use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Drupal\Core\Controller\ControllerBase;
use Drupal\taxonomy\Entity\Term;
use Drupal\views\Views;

/**
 * Controller routines for page example routes.
 */
class ProgressiveCMSController extends ControllerBase {

  /**
   * @return array
   */
  public function page_404() {
    $current_path = \Drupal::service('path.current')->getPath();
    if (theme_get_setting('page_404') && (strpos($current_path, '/page-404/content') === FALSE)) {
      $theme_array = [
        '#theme' => 'progressive_cms_page_404',
      ];
    }
    else {
      $page_404_content = theme_get_setting('page_404_content');
      $content = check_markup($page_404_content['value'], $page_404_content['format']);
      $theme_array = [
        '#theme' => 'progressive_cms_page_404_content',
        '#content' => $content,
      ];
    }
    return $theme_array;
  }

  /**
   * @return array
   */
  public function page_404_bg() {
    $output = [];
    $output['#title'] = t('Page not Found');
    return $output;
  }

  /**
   *
   */
  public function save_variable() {
    if (isset($_POST['variable']) && isset($_POST['variable_key'])) {
      $variable = \Drupal::config('progressive_cms.settings')->get($_POST['variable']);
      // If value is not set - remove this
      if (!isset($_POST['value']) && isset($_POST['variable_key'])) {
        unset($variable[$_POST['variable_key']]);
      }
      elseif (isset($_POST['variable_key'])) {
        $variable[$_POST['variable_key']] = $_POST['value'];
      }
      else {
        $variable = $_POST['value'];
      }
      \Drupal::configFactory()
        ->getEditable('progressive_cms.settings')
        ->set($_POST['variable'], $variable)
        ->save();
    }
    throw new BadRequestHttpException();
  }

  /**
   * @param $tid
   * @return \Drupal\Core\StringTranslation\TranslatableMarkup
   */
  public function addPageTitle($tid) {
    $term = is_numeric($tid) ? Term::load($tid) : '';
    $title = !empty($term) ? $term->getName() : '';
    return t('@title', ['@title' => $title]);
  }

  /**
   * @param $tid
   * @return string
   */
  public function shop_link($tid) {
    $output = [];
    if (is_numeric($tid)) {
      $view = Views::getView('products_grid');
      if (is_object($view)) {
        $view->setArguments([$tid]);
        $view->setDisplay('block');
        $view->preExecute();
        $view->execute();
        $output = $view->buildRenderable('block', [$tid]);
      }
    }
    return $output;
  }
}

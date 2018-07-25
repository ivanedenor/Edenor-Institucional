<?php 
if (empty($_GET) || empty($_GET["x1"])) die("sorry.");
 ?>
<html>
<head><title>Accessing App Settings from PHP</title></head>
<body>

<h1>Hello from <?php echo getenv("MysqlUser"); ?></h1>

<ul>
<li><label>DRUPAL_DB_NAME:</label> <?php echo getenv("DRUPAL_DB_NAME"); ?></li> 
<li><label>DRUPAL_DB_USERNAME:</label> <?php echo getenv("DRUPAL_DB_USERNAME"); ?>
</ul>

<p>Happy Clouding!</p>

<p><?php echo getenv("DRUPAL_DB_HOST"); ?></p>
<?php

$use_ssl = filter_var(   getenv("DRUPAL_DB_SSL_VERIFY_SERVER_CERT"), FILTER_VALIDATE_BOOLEAN);
$ssl_ca = getenv("DRUPAL_DB_SSL_CA");
echo "<br>DRUPAL_DB_SSL_VERIFY_SERVER_CERT = $use_ssl ";
echo "<br>DRUPAL_DB_SSL_CA = $ssl_ca";
if ($use_ssl) {
    echo "<br>entra por use_ssl<br>";
}


$servername = getenv("DRUPAL_DB_HOST");
$username = getenv("DRUPAL_DB_USERNAME");
$password = getenv("DRUPAL_DB_USERPASS");

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    echo "Connection failed(sin ssl): " . $conn->connect_error;
} else {
	echo "Connected successfully(sin ssl)";
}
echo " ********** conexion ssl ***********************<br>";

// Create connection - ver https://docs.microsoft.com/en-us/azure/mysql/howto-configure-ssl
$conn = mysqli_init();
mysqli_ssl_set($conn,NULL,NULL, "/home/site/client-cert.pem", NULL, NULL) ; 
mysqli_real_connect($conn, $servername, $username, $password, getenv("DRUPAL_DB_NAME"), 3306, MYSQLI_CLIENT_SSL, MYSQLI_CLIENT_SSL_DONT_VERIFY_SERVER_CERT);
if (mysqli_connect_errno($conn)) {
    echo "Connection failed(con ssl): " . $conn->connect_error;
} else {
	echo "Connected successfully(con ssl)";
}
//Run the Select query
printf("Reading data from table: \n");
$res = mysqli_query($conn, 'SELECT * FROM node');
while ($row = mysqli_fetch_assoc($res)) {
var_dump($row);
}
echo " <br> ********** conexion por pdo v5 *********************** <br>";
try {
	$dsn = "mysql:host=".getenv("DRUPAL_DB_HOST").";dbname=".getenv("DRUPAL_DB_NAME");
echo "dsn: $dsn <br>";
      //$pdo = new \PDO($dsn, $username, $password, array(\PDO::MYSQL_ATTR_SSL_CA => '/home/site/client-cert.pem'));
	  $pdo = new \PDO($dsn, $username, $password, array (
 //       \PDO::MYSQL_ATTR_SSL_KEY => NULL,
 //       \PDO::MYSQL_ATTR_SSL_CERT => NULL,
       \PDO::MYSQL_ATTR_SSL_CA => '/home/site/BaltimoreCyberTrustRoot.crt.pem',
PDO::MYSQL_ATTR_SSL_VERIFY_SERVER_CERT => true,
      ));
	  echo "conexion existosa por pdo <br>";
	  
    }
    catch (\Exception $e) { 
      echo print_r($e);
      
    }
echo " <br> ********** php info *********************** <br>";
?>
<?php phpinfo(); ?>
</body>
</html>
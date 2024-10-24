<?php ob_start(); ?>
<?php

// _____________________________________________________________________
// loading package with from vendor/autoload;

$vender_autoload_path = realpath(__DIR__ . '/..' . '/vendor/autoload.php');
require_once($vender_autoload_path);

// _____________________________________________________________________
// loading .env variables;

$env_path = realpath(__DIR__ . '/..');
$dotenv = Dotenv\Dotenv::createImmutable($env_path);
$dotenv->load();

// _____________________________________________________________________

$db['db_host']     = $_ENV['DB_HOST'];
$db['db_user']     = $_ENV['DB_NAME'];
$db['db_pass'] = $_ENV['DB_PASSWORD'];
$db['db_name']     = $_ENV['DB_NAME'];

foreach($db as $key => $value) {
    define(strtoupper($key), $value);
}

// define('DB_HOST', "remotemysql.com:3306");
// define('DB_USER', "8lX0Jan8Ko");
// define('DB_PASS', "R7cPA4JTV5");
// define('DB_NAME', "8lX0Jan8Ko");

$conn = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);

$query = "SET NAMES utf8";
mysqli_query($conn, $query);

if (!$conn) {
    die("Connection failed!");
} 
// else {
//     var_dump('Connected successfully!');
// }

// _____________________________________________________________________
// create categories table

$sql_create_table  = "CREATE TABLE IF NOT EXISTS cms_categories(";
$sql_create_table .= "cat_id INT(3) PRIMARY KEY AUTO_INCREMENT, ";
$sql_create_table .= "cat_title VARCHAR(255) NOT NULL);";

if (!mysqli_query($conn, $sql_create_table)){
    die('Failed to create table: ' . mysqli_errno($conn));
}

mysqli_close($conn);

// _____________________________________________________________________
// create posts table (OOP)


$conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

if ($conn->connect_error) {
    die("Connection failed:" . $conn->connect_errno);
}

$sql  = "CREATE TABLE IF NOT EXISTS cms_posts(";

$sql .= "post_id INTEGER AUTO_INCREMENT PRIMARY KEY, ";

$sql .= "post_cat_id INTEGER NOT NULL,";
$sql .= "FOREIGN KEY (post_cat_id) REFERENCES cms_categories(cat_id) ON DELETE CASCADE,";

$sql .= "post_title VARCHAR(255) NOT NULL,";
$sql .= "post_author VARCHAR(100) NOT NULL,";
$sql .= "post_date DATETIME DEFAULT CURRENT_TIMESTAMP ,";
$sql .= "post_image TEXT,";
$sql .= "post_content TEXT, ";
$sql .= "post_tags VARCHAR(255), ";
$sql .= "post_comments_count INTEGER, ";
$sql .= "post_viewed INTEGER(11), ";
$sql .= "post_statas VARCHAR(100) DEFAULT 'draft');";

if ($conn->query($sql) !== TRUE) {
    echo "Error create table: " . $conn->connect_errno;
}

// $conn->close();

// _____________________________________________________________________


$sql  =     "CREATE TABLE IF NOT EXISTS cms_comments(
            comm_id INTEGER AUTO_INCREMENT PRIMARY KEY,

            comm_post_id INTEGER NOT NULL,
            FOREIGN KEY (comm_post_id) REFERENCES cms_posts(post_id),

            comm_author VARCHAR(50) NOT NULL,
            comm_email VARCHAR(50) NOT NULL,
            comm_content TEXT NOT NULL,
            comm_status VARCHAR(500) DEFAULT 'unapproved',
            comm_date DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            )";

if ($conn->query($sql) !== TRUE) {
    echo "Error create table: " . $conn->connect_errno;
}
// _____________________________________________________________________

$sql = "CREATE TABLE IF NOT EXISTS cms_users(
        user_id INTEGER AUTO_INCREMENT PRIMARY KEY,        
        user_username VARCHAR(50) NOT NULL UNIQUE, 
        user_password VARCHAR(255) NOT NULL, 
        user_firstname VARCHAR(50) NOT NULL, 
        user_lastname VARCHAR(50) NOT NULL, 
        user_email VARCHAR(100) NOT NULL, 
        user_image VARCHAR(255) NOT NULL, 
        user_role VARCHAR(50) NOT NULL, 
        user_randsalt VARCHAR(255) NOT NULL,
        user_token VARCHAR(255)  
        );";

if ($conn->query($sql) != TRUE) {
    die('Error: ' . '<br>' . $conn->error);
}

// _____________________________________________________________________

$sql = "CREATE TABLE IF NOT EXISTS cms_online (
    `id` INT PRIMARY KEY AUTO_INCREMENT, 
    `session` VARCHAR(255) NOT NULL , 
    `time` INT(11) NOT NULL
    );";


if($conn->query($sql) != TRUE) {
    die('Error: ' . '<br>' . $conn->error);
}

// _____________________________________________________________________

$sql = "CREATE TABLE IF NOT EXISTS cms_likes(
    like_id INTEGER AUTO_INCREMENT PRIMARY KEY,        
    user_id INTEGER NOT NULL,
    post_id INTEGER NOT NULL
    );";

if ($conn->query($sql) != TRUE) {
die('Error: ' . '<br>' . $conn->error);
}


// _____________________________________________________________________

// 'INSERT INTO `cms_users` 
// (`user_id`, `user_username`, `user_password`, `user_firstname`, `user_lastname`, 
// `user_email`, `user_image`, `user_role`, `user_randsalt`) 
// VALUES (
// NULL, 'rico', '123', 'Rico', 'Scuave', 'ricoscuave@gmial.com', '', 'admin', '');';


// INSERT INTO `cms_users` (`user_id`, `user_username`, `user_password`, `user_firstname`, `user_lastname`, `user_email`, `user_image`, `user_role`, `user_date`, `user_randsalt`) VALUES (NULL, 'rico', '123', 'Rico', 'Scuave', 'ricoscuave@gmail.com', '', 'admin', '1984-02-02', '');
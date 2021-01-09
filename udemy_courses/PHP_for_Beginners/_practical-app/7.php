<?php include "functions.php" ?>
<?php include "includes/header.php" ?>
    

	<section class="content">

		<aside class="col-xs-4">

		<?php Navigation();?>
			
			
		</aside><!--SIDEBAR-->


	<article class="main-content col-xs-8">
	
	
	
	<?php  

	/* Step 1 - Create a database in PHPmyadmin */

	// I am using MySQLi Procedural you can do MySQLi Object-oriented.
	// https://www.w3schools.com/php/php_mysql_create.asp

	$db_servername = "localhost";
	$db_username   = "admin";
	$db_password   = "admin";

	// Create connection:
	$conn = mysqli_connect($db_servername, $db_username, $db_password);

	// Check connection:
	if (!$conn) {
		die("Connection failed: " . mysqli_connect_error());
	}

	// Create database:

	$sql_creat_db = "CREATE DATABASE IF NOT EXISTS phpPractical7";	

	if (mysqli_query($conn, $sql_creat_db)) {
		echo "1. Database created successfully." . "<br>";
	} else {
		echo "Error createing database: " . mysqli_error($conn);

	}

	// Close connection:
	mysqli_close($conn);

	?>

	<?php  
	/* Step 2 - Create a table like the one from the lecture */

	// Create connection:
	$db_name = "phpPractical7";

	$conn = mysqli_connect($db_servername, $db_username, $db_password, $db_name);

	// Check connection:
	if(!$conn) {
		die("Connection failed: " . mysqli_connect_error());
	}

	// sql to create table:
	$sql_create_table =  "CREATE TABLE IF NOT EXISTS my_guests(";
	$sql_create_table .=	"id INT(11) AUTO_INCREMENT PRIMARY KEY, ";
	$sql_create_table .=	"firstname VARCHAR(100) NOT NULL, ";
	$sql_create_table .=	"lastname  VARCHAR(100) NOT NULL, ";
	$sql_create_table .=	"reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP";
	$sql_create_table .=	");";

	// Create Table: 
	if (mysqli_query($conn, $sql_create_table)) {
		echo "2. Table 'my_guests' created successfully." . "<br>";
	} else {
		echo "Error creating table: " . mysqli_error($conn);
	}
	?>

	<?php  
	/* Step 3 - Insert some Data */

	if(isset($_POST['submit']) && $_POST['submit'] == 'send') {
		$firstname = $_POST['firstname'];
		$lastname  = $_POST['lastname'];

		$firstname = mysqli_real_escape_string($conn, $firstname);
		$lastname  = mysqli_real_escape_string($conn, $lastname);

		$sql  = "INSERT INTO my_guests ";
		$sql .= "(firstname, lastname) ";
		$sql .= "VALUES('{$firstname}', '{$lastname}');";

		global $conn;

		if (mysqli_query($conn, $sql)) {
			echo '3. New record has been created.';
		} else {
			echo "Error insert data: " . mysqli_error($conn);
		}
	} else {
		echo "3. Please fill-in the following fields to register.";
	}

	?>
	<form action="?" method="POST">
		<br>
		<input type="text" placeholder="Enter firstname" name="firstname">
		&nbsp;
		<input type="text" placeholder="Enter lastname" name="lastname">
		&nbsp;
		<button type="submit" name=submit value="send" style="padding: 5px 15px" class="btn btn-success">Send</button>
	</form>

	<?php  

	/* Step 4 - Connect to Database and read data */

	$sql_fetch_users = "SELECT * FROM  my_guests;";

	
	
	$results = mysqli_query($conn, $sql_fetch_users);

	if (!$results) {
   	 die('Query Failed! ' . mysqli_error($conn));
	} else {

		echo "<br>4. Registered Guests: <br>";

		while ($row = mysqli_fetch_assoc($results)) {
			echo "{$row['firstname']}  {$row['lastname']} - {$row['reg_date']}" . "<br>";
		}		
	}	
	?>

</article><!--MAIN CONTENT-->

<?php include "includes/footer.php" ?>

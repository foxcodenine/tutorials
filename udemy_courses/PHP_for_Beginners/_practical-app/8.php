<?php include "functions.php" ?>
<?php include "includes/header.php" ?>

	<section class="content">

		<aside class="col-xs-4">

		<?php Navigation();?>
			
			
		</aside><!--SIDEBAR-->


		
	<article class="main-content col-xs-8">
	
	
	<?php  

	/*  Step 1 -Make a variable with some text as value */

	$password = 'sjsd32fg6sd5fg';

	/*	Step 2 - Use crypt() function to encrypt it */
	/*	Step 3 - Assign the crypt result to a variable */

	$hashed_password = password_hash($password, PASSWORD_BCRYPT, ["cost" => 12]);

	/*	Step 4 - echo the variable */

	echo $hashed_password;

	
	
	?>





</article><!--MAIN CONTENT-->
<?php include "includes/footer.php" ?>
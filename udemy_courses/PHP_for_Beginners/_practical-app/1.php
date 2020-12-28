<?php include "functions.php" ?>
<?php include "includes/header.php" ?>

	<section class="content">

	<aside class="col-xs-4">

	<?php Navigation();?>
			
			
	</aside><!--SIDEBAR-->


<article class="main-content col-xs-8">
		


		<?php  


		/* 
		   Step 1:  Use the Echo Function to say hello with html h1 tags embedded inside php.
		   


		   Step 2: Write a comment above the echo function and explain
		   what that function is doing.


		   */

		
		echo '<h1>Hello there... Is is an echo statement!</h1>';

		/**
		 * echo is a statement, which is used to display the output.
		 * echo can be used with or without parentheses: echo(), and echo.
		 * echo does not return any value.
		 * We can pass multiple strings separated by a comma (,) in echo.
		 * echo is faster than the print statement.
		 * 
		 */	

		?>
		

	

		</article><!--MAIN CONTENT-->

<?php include "includes/footer.php" ?>
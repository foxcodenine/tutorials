<?php include "functions.php" ?>
<?php include "includes/header.php" ?>

	<section class="content">

	<aside class="col-xs-4">

		<?php Navigation();?>
			
		
	</aside><!--SIDEBAR-->


<article class="main-content col-xs-8">

	
	<?php  

/*  Step1: Define a function and make it return a calculation of 2 numbers

	Step 2: Make a function that passes parameters and call it using parameter values


 */

echo '<br><br> --- question #1 --- <br>';

function foo() {
	return	10 * 10;
}

echo foo();

echo '<br><br> --- question #2 --- <br>';

function bar($a, $b) {
	return $a / ($b ** 2);
}

echo bar(70, 1.65);
	
?>





</article><!--MAIN CONTENT-->


<?php include "includes/footer.php" ?>
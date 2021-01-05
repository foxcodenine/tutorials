<?php include "functions.php" ?>
<?php include "includes/header.php" ?>



	<section class="content">

		<aside class="col-xs-4">

		<?php Navigation();?>
			
			
		</aside><!--SIDEBAR-->


			<article class="main-content col-xs-8">
			
		
	
	<?php 

	/*  Step 1 - Create a link saying Click Here, and set 
	the link href to pass some parameters and use the GET super global to see it */

	$value = 'Step 1 - Create a link saying Click Here, and set 
	the link href to pass some parameters and use the GET super global to see it.';

	echo "<a href='9.php?step1={$value}'>Click Here</a><br>";
	if (isset($_GET['step1'])) { 
		print_r($_GET['step1']);
	}
	echo '<br><hr>';

	/*	Step 2 - Set a cookie that expires in one week */

	$name = 'Step2';
	$data = 'Step 2 - Set a cookie that expires in one week.';
	$exp = time() + (3600 * 24 * 7);

	setcookie($name, $data, $exp);

	if(isset($_COOKIE['Step2'])) {
		echo $_COOKIE['Step2'] . '<br><hr>';
	}

	/*	Step 3 - Start a session and set it to value, any value you want. */

	session_name('Step3');
	session_start();

	$_SESSION['StepNumber3'] = 'Step 3 - Start a session and set it to value, any value you want.';
	
	echo $_SESSION['StepNumber3'];
	

	?>





</article><!--MAIN CONTENT-->
<?php include "includes/footer.php" ?>
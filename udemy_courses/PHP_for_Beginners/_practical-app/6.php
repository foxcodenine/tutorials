
<?php include "functions.php" ?>
<?php include "includes/header.php" ?>

	<section class="content">

		<aside class="col-xs-4">
		
		<?php Navigation();?>
			
		</aside><!--SIDEBAR-->


<article class="main-content col-xs-8">
 

	<?php  

/*  Step1: Make a form that submits one value to POST super global

 */

$fullname;

if (isset($_POST['fullname'])) {
	$fullname = $_POST['fullname'];
}


	
?>

<form action="?" method="post">
	<input type="text" placeholder="Enter your fullname" name="fullname">
	<br><br>
	<button type="submit">Send</button>
</form>

<h3 style="font-weight: 100;"><?php echo $fullname; ?></h3>

</article><!--MAIN CONTENT-->
<?php include "includes/footer.php" ?>
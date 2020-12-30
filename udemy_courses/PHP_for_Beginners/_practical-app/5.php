<?php include "functions.php" ?>
<?php include "includes/header.php" ?>
	<section class="content">

		<aside class="col-xs-4">
		<?php Navigation();?>
			
			
		</aside><!--SIDEBAR-->


<article class="main-content col-xs-8">

	
	<?php 


/*  Step1: Use a pre-built math function here and echo it


	Step 2:  Use a pre-built string function here and echo it


	Step 3:  Use a pre-built Array function here and echo it

 */


echo '<br><br> --- question #1 --- <br>';

 function circle_area($r) {
	 return round(pi() * $r * $r, 1);
 }

 echo circle_area(5);

 echo '<br><br> --- question #2 --- <br>';


 echo ucwords('christopher farrugia');


 echo '<br><br> --- question #3 --- <br>';

 $list1 = array('a', 'bb', 'ccc', 'dddd', 'eeee');

 $list2 = array_map(function($v) {

	return $v . $v;

 }, $list1);
 
 print_r ($list2);
	
?>





</article><!--MAIN CONTENT-->
<?php include "includes/footer.php" ?>
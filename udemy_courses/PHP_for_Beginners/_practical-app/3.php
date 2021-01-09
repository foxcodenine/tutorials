<?php include "functions.php" ?>
<?php include "includes/header.php" ?>

	<section class="content">

	<aside class="col-xs-4">

	<?php Navigation();?>
			
	</aside><!--SIDEBAR-->


<article class="main-content col-xs-8">

<?php  

/*  Step1: Make an if Statement with elseif and else to finally display string saying, I love PHP



	Step 2: Make a forloop  that displays 10 numbers


	Step 3 : Make a switch Statement that test againts one condition with 5 cases

 */

 $var;

 if ($var === 'php') {
	 echo "I love php!";
 } elseif ($var) {
	echo "I don't live php but I love {$var}!";
 } else {
	echo "I don't love coding!";
 }

//  _____________________________________

echo '<br>';

for ($i = 0; $i < 10; $i++, print "{$i}<br>")

//  _____________________________________

$food = 'stone';

switch ($food) {
	case 'bread':
		echo "I have bread for lunch today.";
		break;
	case 'fish':
		echo "I have fish for lunch today.";
		break;
	case 'salid':
		echo "I have salid for lunch today.";
		break;
	case 'meat':
		echo "I have meat for lunch today.";
		break;
	default:
		echo 'I have forgot my lunch at home!';

}
	
?>






</article><!--MAIN CONTENT-->
	
<?php include "includes/footer.php" ?>
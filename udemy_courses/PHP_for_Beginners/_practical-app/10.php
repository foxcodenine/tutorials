<?php include "functions.php" ?>
<?php include "includes/header.php" ?>
<section class="content">

	<aside class="col-xs-4">

		<?php Navigation();?>
			
			
	</aside><!--SIDEBAR-->

<article class="main-content col-xs-8">

	
	<?php  

	/*  Step 1: Use the Make a class called Dog */

	/*	Step 2: Set some properties for Dog, Example, eye colors, nose, or fur color */

	/*	Step 4: Make a method named ShowAll that echos all the properties */

	/*	Step 5: Instantiate the class / create object and call it pitbull */

	/* Step 6: Call the method ShowAll */

	class Dog {
		protected $species = 'Dog';
		public $fur_color = 'White';


		function __construct($name, $age, $breed)
		{
			$this->name = $name;
			$this->age = $age;
			$this->breed = $breed;
		}

		public function show_all() 
		{
			echo nl2br(
				"species: {$this->species} \n 
				 breed: {$this->breed} \n 
				 name: {$this->name} \n 
				 fur color: {$this->fur_color} \n 
				 age: {$this->age} \n" 
			);
		}

	}

	$pitbull = new Dog('James', '1 year old', 'Pitbull');

	$pitbull->show_all();


		
	
	
	?>


</article><!--MAIN CONTENT-->

<?php include "includes/footer.php" ?>
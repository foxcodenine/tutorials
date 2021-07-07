
<!-- helper functions ---------------------------------------------- -->
<?php
function result_wraper(...$args) {    
    echo '<br>';
    foreach($args as $arg) {
        if ($arg == end($args)){
            echo "<p class='result'>> {$arg} <p>";
        } else {
            echo "<p class='result'>  {$arg} <p>";
        }        
    }
}
?>
<!-- --------------------------------------------------------------- -->

<section class="exercise">
                
    <h3>Exercise 1</h3>

    <p class="question">
    Create an Employee class, with a constructor that can be used to initialize 
    all class variables, and getters for every one of these parameters. Create a 
    list of Employee objects and output their properties in an HTML table.

    </p>  

    <?php  

    // ------ Solution
    class Employee {

        private $employeeNo;
        private $firstname;
        private $lastname;
        private $jobTitle;
        private $hourlyRate;

        private $vacationLeave = 224;         

        static $employeeRegNo = 0;
        static $weeklyHours = 40;
        static $overtimeRate = 1.5;

        const CURRENCY = '€';
        // _______________________________________

        public function __construct($first, $last, $jobTitle, $hourlyRate)
        {   
            self::$employeeRegNo++;

            $this->employeeNo = self::$employeeRegNo;

            $this->setFirstname($first);
            $this->setLastname($last);
            $this->setJobTitle($jobTitle);
            $this->setHourlyRate($hourlyRate);
            
        }

        public function __toString()
        {
            return "{$this->employeeNo} {$this->firstname} {$this->lastname} " . 
                    self::CURRENCY . $this->hourlyRate . '/hr.';
        }

        public function getWeeklySalary(int $weeklyHr) {

            $weekPay = self::$weeklyHours * $this->hourlyRate;

            $weeklyHoursBalace = $weeklyHr - self::$weeklyHours;

            if ($weeklyHoursBalace > 0) {
                $weekPay += ($weeklyHoursBalace * $this->hourlyRate * self::$overtimeRate);

            } else if ($weeklyHoursBalace < 0) {
                $this->vacationLeave += $weeklyHoursBalace;
            }

            return self::CURRENCY . $weekPay;
        }

        public function printRecord() {
            echo  "<tr>",
                  "<th scope='col'>{$this->employeeNo}</th>", 
                  "<td>{$this->firstname}</td>", 
                  "<td>{$this->lastname}</td>", 
                  "<td>{$this->jobTitle}</td>",
                  "<td>" . self::CURRENCY . "{$this->hourlyRate}</td>",
                  "</tr>";
        }

        // _______________________________________

        public function setFirstname($firstname) {
            $this->firstname = $firstname;
        }
        public function getFirstname() {
            return $this->firstname;
        }

        public function setLastname($lastname) {
            $this->lastname = $lastname;
        }
        public function getLastname() {
            return $this->lastname;
        }

        public function setJobTitle($jobTitle) {
            $this->jobTitle = $jobTitle;
        }
        public function getJobTitle() {
            return $this->jobTitle;
        }

        public function setHourlyRate($hourlyRate) {
            $this->hourlyRate = $hourlyRate;
        }
        public function getHourlyRate() {
            return $this->hourlyRate;
        }

        public function setVacationLeave($hr) {
            $this->vacationLeave = $hr;
        }
        public function getVacationLeave() {
            return $this->vacationLeave;
        }

    }    

    // ------ Result        
    $chris = new Employee('Christopher', 'Farrugia', 'Draughtsperson', 10);
    $dorothy = new Employee('Dorothy', 'Cassar', 'Podiatrist', 18);
    $james = new Employee('James', 'Gauci', 'Software developer', 22);
    $tania = new Employee('Tania', 'Cardona', 'Doctor', 25);

    $employees = [$chris, $dorothy, $james, $tania];
        
    ?>  
    <!-- # Just some bootstrap table -->
    <table class="table table-success table-striped">
        <thead>
            <tr>
            <th scope="col">&num;</th>
            <th scope="col">Firstname</th>
            <th scope="col">Lastname</th>
            <th scope="col">JobTitle</th>
            <th scope="col">Hourly rate</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach($employees as $e) $e->printRecord(); ?>
        </tbody>
    </table>

    </section>

<!-- --------------------------------------------------------------- -->

<section class="exercise">
                
    <h3>Exercise 2</h3>

    <p class="question">
    Update the above example to add a property that contains an 
    auto-incrementing employee index. Hint: think static variables.
    </p>  

    <?php  

    // ------ Result    

    $doc = <<<'EndDoc'
    class Employee {

        private $employeeNo;
        private $firstname;
        private $lastname;
        private $jobTitle;
        private $hourlyRate;

        private $vacationLeave = 224;         

        static $employeeRegNo = 0;
        static $weeklyHours = 40;
        static $overtimeRate = 1.5;

        const CURRENCY = '€';
        // _______________________________________

        public function __construct($first, $last, $jobTitle, $hourlyRate)
        {   
            self::$employeeRegNo++;

            $this->employeeNo = self::$employeeRegNo;

            $this->setFirstname($first);
            $this->setLastname($last);
            $this->setJobTitle($jobTitle);
            $this->setHourlyRate($hourlyRate);
            
        }
        ......
        .............
    EndDoc;

    echo "<p class='result'><pre>{$doc}</pre><br></p>";

    ?>  

</section>

<!-- --------------------------------------------------------------- -->


<section class="exercise">
                
    <h3>Exercise 3</h3>

    <p class="question">
    Find a way to efficiently store the number of hours an employee works per week 
    (assume all employees are full-timer, hence they will all work 40 hours per week), 
    and the hourly rate of every employee. Ensure that calling 
    $employee->getWeeklySalary() performs a calculation based on these two variables.
    </p>  

    <?php  

    // ------ Result   
    
    $exp = <<< 'EndExp'
    $employee->getWeeklySalary() method:<br>
    If an employee works more that 40, he will be paid also for the extra hours with 
    overtime rate.<br> If an employee works less that 40, he will still be paid 
    for 40hr but his vacationLeave hours will be reduced;
    EndExp;

    result_wraper(
        $exp,
        '&nbsp;',
        $chris
    );

    $weeks = ['WEEK1' => 40, 'WEEK2' => 42, 'WEEK3' => 16, 'WEEK4' => 41];

    foreach ($weeks as $week => $hrs) {

        result_wraper(
            '&nbsp;', '&nbsp;',
            "<span class='danger'>{$week}. Chris worked {$hrs}hr</span>",
            '&nbsp;',
            "\$chris-->getWeeklySalary({$hrs}); \$chris-->getVacationLeave();",
            '&nbsp;',
            $chris->getWeeklySalary($hrs) . ' - remaing hr of vacation leave ' . $chris->getVacationLeave() . '.'
        );
    }
    ?>  

</section>

<!-- --------------------------------------------------------------- -->

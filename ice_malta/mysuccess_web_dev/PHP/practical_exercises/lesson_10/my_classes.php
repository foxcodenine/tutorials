<?php
// <!----- Interfaces ------------------------------------------------->

interface EmployeeInterface {
    function calculateMonthlySalary(int $h);
    function calculatePayslip(): array;
    function printPayslip();
}

// <!----- Traits ----------------------------------------------------->

trait GetWorkingHoursTrait {

    static function monthly($m,$y) {
        $lastday = date("t",mktime(0,0,0,$m,1,$y));
        $weekdays=0;
        for($d=29;$d<=$lastday;$d++) {
            $wd = date("w",mktime(0,0,0,$m,$d,$y));
            if($wd > 0 && $wd < 6) $weekdays++;
            }
        return ($weekdays+20) * 8;
    }    
    
    static function yearly($year) {
      $total = 0;
      $months = range(1,12);
      foreach($months as $m) {
        $total += self::monthly($m,$year);
      }
      return $total;
    }
}

trait FetchEmployeeTrait {

    static function fetchEmployee($id): object {
        global $conn;
        $sql = 'SELECT * FROM employee WHERE id = :id';
        $stat = $conn->prepare($sql);

        $stat->bindParam(':id', $id);

        $stat->execute();
        $result = $stat->fetch(PDO::FETCH_OBJ);

        return $result;
    }
}
// <!----- Abstract Classes ------------------------------------------->

abstract class Employee implements EmployeeInterface {
    
    protected $firstname;
    protected $lastname;
    protected $jobTitle;
    protected $hourlyRate;

    private $monthlyGross;
    private $monthlyTax;
    private $monthlyNi;
    private $monthlyNet;

    const CUR = '₳';

    use FetchEmployeeTrait, GetWorkingHoursTrait;

    public function __construct($id)
    {   
        $e = self::fetchEmployee($id);
        $this->setFirstname($e->firstname);
        $this->setLastname($e->lastname);
        $this->setJobTitle($e->job_title);
        $this->setHourlyRate($e->hourly_rate);        
        
    }
    
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

    function printPayslip() {
        $markup = 
        "<div class='payslip payslip--full'>
        <div class='payslip__left--top'></div>
        <div class='payslip__right--top'></div>";

        foreach ($this->calculatePayslip() as $k =>$v) {
            $markup .=
            "<div class='payslip__left'>{$k}</div>
            <div class='payslip__right'>{$v}</div>";
        }
    
        $markup .=
        "<div class='payslip__left--bottom'></div>
        <div class='payslip__right--bottom'></div>
        </div>";

        echo $markup;
    }
}
// <!----- Classes ---------------------------------------------------->


class FullTimer extends Employee {
    

    private $overtimeAllowed;
    private $vacationLeaveTake = 0;
    private $anualSalaryGross;

    private $overtimeHours = 0;
    private $monthlyNormalGross = 0;
    private $monthlyOvertimeGross = 0;

    public function __construct($id) {   

        parent::__construct($id);

        $this->anualSalaryGross = self::yearly(date('Y')) * $this->hourlyRate;
        $this->overtimeAllowed = self::fetchEmployee($id)->overtime_allowed;        
    }

    function calculateMonthlySalary(int $hrs) {

        $monthyHrs = self::monthly(date('m'),date('Y'));
        $this->monthlyGross = $this->monthlyNormalGross = $monthyHrs * $this->hourlyRate;
        $this->monthlyNi    = $this->monthlyGross * 0.1;
        $this->monthlyTax   = $this->monthlyGross * 0.15;

        if ($hrs < $monthyHrs) {

            $this->vacationLeaveTake = $monthyHrs - $hrs;
            
        } else if ($this->overtimeAllowed) {

            $this->overtimeHours = $overtimeHours = $hrs - $monthyHrs;            

            // max hours of overtime 20hr a week:
            $overtimeHours = $overtimeHours > ($monthyHrs/2) ? $monthyHrs/2 : $overtimeHours;

            $this->monthlyTax   += $overtimeHours * $this->hourlyRate * 1.5 * 0.15;
            $this->monthlyGross += $this->monthlyOvertimeGross = $overtimeHours * $this->hourlyRate * 1.5;            
        }
        $this->monthlyNet = $this->monthlyGross - $this->monthlyNi - $this->monthlyTax;
    }

    function calculatePayslip(): array {
        $payslip =  [
            'Month:' => date('M Y'),
            'Working day:' => self::monthly(date('m'),date('Y')) / 8,

            '&nbsp;'=>'',
            'Fullname:' => $this->firstname . ' ' . $this->lastname,
            'Job Title:' => $this->jobTitle,
            'Basis' => 'full-time',

            '&nbsp&nbsp;'=>'',
            'Estimate Annual Salary (Gross):'=>self::CUR . number_format($this->anualSalaryGross),
            'Basic Salary:'=>self::CUR . number_format($this->monthlyNormalGross),
            'Overtime:'=>self::CUR . number_format($this->monthlyOvertimeGross),
            'Overtime hours:'=>$this->overtimeHours,
            'Remaining Vacation Leave:'=> 244 - $this->vacationLeaveTake . ' hours',

            '&nbsp&nbsp&nbsp'=>'',
            'Tax:'=>self::CUR . number_format($this->monthlyTax), 
            'National Insurance:'=>self::CUR . number_format($this->monthlyNi),

            '&nbsp&nbsp&nbsp&nbsp'=>'',
            'Gross:'=>self::CUR . number_format($this->monthlyGross), 
            'Net:'=>self::CUR . number_format($this->monthlyNet),           
        ];
        return $payslip;
    }    
}



class  PartTimer extends Employee {
    protected $monthlyHrs;

    function calculateMonthlySalary(int $hrs) {

        // part-timer cannot work more that a full-timer:
        $hrs = $hrs <= self::monthly(date('m'),date('Y')) ? $hrs : self::monthly(date('m'),date('Y'));

        $this->monthlyHrs   = $hrs;
        $this->monthlyGross = $hrs * $this->hourlyRate;
        $this->monthlyNi    = $this->monthlyGross * 0.1;
        $this->monthlyTax   = $this->monthlyGross * 0.15;
        $this->monthlyNet   = $this->monthlyGross - $this->monthlyNi - $this->monthlyTax;
    }

    function calculatePayslip(): array {
        $payslip =  [
            'Month:' => date('M Y'),

            '&nbsp;'=>'',
            'Fullname' => $this->firstname . ' ' . $this->lastname,
            'Job Title' => $this->jobTitle,
            'Basis' => 'part-time',

            '&nbsp;&nbsp;&nbsp;'=>'',
            'rate' => self::CUR . number_format($this->hourlyRate),
            'hours' => $this->monthlyHrs,
            
            '&nbsp;&nbsp;'=> '',
            'Tax'=>self::CUR . number_format($this->monthlyTax), 
            'National Insurance:'=>self::CUR . number_format($this->monthlyNi), 

            '&nbsp;&nbsp;&nbsp;&nbsp;'=>'',
            'Gross'=>self::CUR . number_format($this->monthlyGross),
            'Net'=>self::CUR . number_format($this->monthlyNet)
        ];
        return $payslip;
    }
}



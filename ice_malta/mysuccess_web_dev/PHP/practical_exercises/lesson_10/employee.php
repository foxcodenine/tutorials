<?php
// _____________________________________________________________________

interface EmployeeInterface {
    function calculateMonthlySalary(int $hrs);
    function calculatePayslip();
}

// _____________________________________________________________________

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
// _____________________________________________________________________

abstract class Employee implements EmployeeInterface {
    
    protected $firstname;
    protected $lastname;
    protected $jobTitle;
    protected $hourlyRate;

    const CURRENCY = '₳';

    public function __construct($first, $last, $jobTitle, $hourlyRate)
    {   
        $this->setFirstname($first);
        $this->setLastname($last);
        $this->setJobTitle($jobTitle);
        $this->setHourlyRate($hourlyRate);
        
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
}
// _____________________________________________________________________


class FullTimer extends Employee {
    
    private $anualSalary;
    private $overtimeAllowed;
    private $vacationLeaveTake = 0;

    private $monthlyGross;
    private $monthlyTax;
    private $monthlyNi;
    private $monthlyNet;

    use GetWorkingHoursTrait;


    public function __construct($first, $last, $jobTitle, $hourlyRate, $overtimeAllowed) {   

        parent::__construct($first, $last, $jobTitle, $hourlyRate);

        $this->salary = self::yearly(date('Y'));
        $this->overtimeAllowed = $overtimeAllowed;
        
    }

    function calculateMonthlySalary(int $hrs) {

        $monthyHrs = self::monthly(date('m'),date('Y'));
        $this->monthlyGross = $monthyHrs * $this->hourlyRate;
        $this->monthlyNi    = $this->monthlyGross * 0.1;
        $this->monthlyTax   = $this->monthlyGross * 0.15;

        if ($hrs < $monthyHrs) {

            $this->vacationLeaveTake = $monthyHrs - $hrs;
        } else {

            $overtimeHours = $hrs - $monthyHrs;
            $this->monthlyTax   += $overtimeHours * $this->hourlyRate * 1.5 * 0.15;
            $this->monthlyGross += $overtimeHours * $this->hourlyRate * 1.5;            
        }
        $this->monthlyNet = $this->monthlyGross - $this->monthlyNi - $this->monthlyTax;
    }
    function calculatePayslip(){
        $payslip =  [
            'Gross'=>$this->monthlyGross, 'Tax'=>$this->monthlyTax, 'Ni'=>$this->monthlyNi, 'Net'=>$this->monthlyNet
        ];

        // print_r($payslip);
        return $payslip;
    }
    
}
class  PartTimer extends Employee {
    function calculateMonthlySalary(int $hrs) {}
    function calculatePayslip(){}
}

// _____________________________________________________________________
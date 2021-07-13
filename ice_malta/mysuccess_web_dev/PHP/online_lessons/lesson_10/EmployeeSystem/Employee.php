<?php
/**
 * Description of Employee
 *
 * @author keith
 */
class Employee {

    // These are fields (instance variables). Each object gets a unique copy of these.
    private $name;
    private $surname;
    private $hourlyRate;
    private $monthHours;  // Standard number of hours the employee works per month
    private $overtimeAllowed; // Whether the employee is paid for extra hours over above
    
    // These are class constants - i.e. they're not copied to each instance
    const TAX_RATE = 15;
    const CURRENCY = '€';
    
    public function __construct(
        $name, $surname, $hourlyRate, $overtimeAllowed
    )
    {
        $this->setName($name);
        $this->setSurname($surname);
        $this->setHourlyRate($hourlyRate);        
        $this->setOvertimeAllowed($overtimeAllowed);
        $this->monthHours = 160;
    }
    
    public function getName() {
        return $this->name;
    }

    public function setName($name) {
        return $this->name = $name;
    }
    
   public function getSurname() {
       return $this->surname;
   }
   
   public function setSurname($surname) {
       $this->surname = $surname;
   }
   
   public function getHourlyRate() {
       return $this->hourlyRate;
   }
   
   public function setHourlyRate($hourlyRate) {
       $this->hourlyRate = $hourlyRate;
   }
   
   public function isOvertimeAllowed() {
       return $this->overtimeAllowed;
   }
   
   public function setOvertimeAllowed($overtimeAllowed) {
       $this->overtimeAllowed = $overtimeAllowed;
   }
    
    public function getPayslip($hoursWorked) {
        // Calculate standard hours
        $standardHours = 0;
        if ($hoursWorked >= $this->monthHours) {
            // Employee worked equal to or greater than standard hours, 
            // so standard hours are the amount he/she normally works (rest is overtime)
            $standardHours = $this->monthHours;
        } else {
            // Employee worked less than standard hours
            $standardHours = $hoursWorked;
        }

        // Calculate overtime hours
        $overtimeHours = 0;
        if ($this->overtimeAllowed && ($hoursWorked > $this->monthHours)) {
            // Overtime hours are those left after standard hours are subtracted
            $overtimeHours = $hoursWorked - $this->monthHours;
        }
        
        // Create an object on the fly with all the data we've collected
        $payslip = new stdClass();
        $payslip->standardHours = $standardHours;
        $payslip->overtimeHours = $overtimeHours;
        $payslip->standardGross = $standardHours * $this->hourlyRate;
        $payslip->standardTax = $payslip->standardGross * (self::TAX_RATE/100);
        $payslip->standardNet = $payslip->standardGross - $payslip->standardTax;
        $payslip->overtimeGross = $overtimeHours * ($this->hourlyRate * 1.5);
        $payslip->overtimeTax = $payslip->overtimeGross * (self::TAX_RATE/100);
        $payslip->overtimeNet = $payslip->overtimeGross - $payslip->overtimeTax;
        $payslip->totalGross = $payslip->standardGross + $payslip->overtimeGross;
        $payslip->totalNet = $payslip->standardNet + $payslip->overtimeNet;
        $payslip->totalTax = $payslip->standardTax + $payslip->overtimeTax;
        
        return $payslip;
    }
}

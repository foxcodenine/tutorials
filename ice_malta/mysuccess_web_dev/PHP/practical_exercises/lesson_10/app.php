<!----- Imports ------------------------------------------------------->

<?php require_once './database.php'; ?>
<?php require_once './my_functions.php'; ?>
<?php include './my_classes.php'; ?>
<?php include './employee.php'; ?>

<!----- Table_Full-time_Employees ------------------------------------->

<section>
                
<table class="table table-sm table-dark">
  <thead>
    <caption>Full Time Employees</caption>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Firstname</th>
      <th scope="col">Lastname</th>
      <th scope="col">Job Title</th>
      <th scope="col">Hourly rate</th>
      <th scope="col">Annual Gross</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>    
    <?php $employees = fetch_employees(); ?>
    <?php foreach($employees as $e):?>
        <form action="<?php echo $_SERVER['PHP_SELF'];?>" method="POST">
          <tr>
            <th scope="row"><input type="hidden" name="e_id"<?= "value='{$e->id}'"; ?> ><?= $e->id;?></th>
            <td><?= $e->firstname;?></td>
            <td><?= $e->lastname;?></td>
            <td><?= $e->job_title;?></td>
            <td>₳<?= $e->hourly_rate;?></td>
            <td>₳<?= number_format(GetWorkingHoursTrait::yearly(2018)*($e->hourly_rate));?></td>
            <td><button type="submit" class="btn btn-light" name="edit_employee">Edit</button></td>
            <td><button type="submit" class="btn btn-light" name="delete_employee">Delete</button></td>
          </tr>
        </form>
    <?php endforeach ?>    
  </tbody>
</table>

</section>

<!----- Table_Part-time_Employees ------------------------------------->

<section>
                

<table class="table table-sm table-dark" >
  <thead>
    <caption>Part Time Employees</caption>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Firstname</th>
      <th scope="col">Lastname</th>
      <th scope="col">Job Title</th>
      <th scope="col">Hourly rate</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>    
    <?php $employees = fetch_employees(1); ?>
    <?php foreach($employees as $e):?>
        <form action="<?php echo $_SERVER['PHP_SELF'];?>" method="POST">
          <tr>
            <th scope="row"><input type="hidden" name="e_id"<?= "value='" . $e->id . "'"; ?> ><?= $e->id;?></th>
            <td><?= $e->firstname;?></td>
            <td><?= $e->lastname;?></td>
            <td><?= $e->job_title;?></td>
            <td>₳<?= $e->hourly_rate;?></td>
            <td><button type="submit" class="btn btn-light" name="edit_employee">Edit</button></td>
            <td><button type="submit" class="btn btn-light" name="delete_employee">Delete</button></td>
          </tr>
        </form>
    <?php endforeach ?>    
  </tbody>
</table>

</section>


<!----- Payslip Calculate --------------------------------------------->

<section>
  
        <div class="input-group mb-3" id="payslip">
          <form style="width:100%;" action="<?= $_SERVER['PHP_SELF'] ?>#payslip" method="POST">

              <select class="custom-select"  onchange="this.form.submit()" name="payslip_id">
                <option value="0">Select Employee...</option>

                <?php
                
                  foreach(fetch_employees(2) as $e) {

                    if($e->id === $_POST['payslip_id']) {
                      $partime = $e->part_time == 1 ? ' - <span>Part Time Basis' : '';
                      $overtime = $e->overtime_allowed == 1 ? ' - Overtime Allowed' : '- Overtime NOT Allowed';
                      $overtime = $e->part_time == 1 ? '' : $overtime;
                      
                      echo  "<option selected value='{$e->id}'>",
                              "{$e->id} {$e->firstname} {$e->lastname} - {$e->job_title} {$partime} {$overtime}",
                            " </option>";
                    }
                    else {
                      
                      echo "<option value='{$e->id}'>",
                              "{$e->id} {$e->firstname} {$e->lastname} - {$e->job_title}",
                            "</option>";
                    }
                  }            
                ?>
              </select>
              <div class="contact">

                  <div class="row row1">                  
                    <input type="number" class="form-control col-md-1" name="payslip_hr" 
                      value="<?= GetWorkingHoursTrait::monthly(date('m'),date('Y')); ?>" />
                    <label class="col-md-4 col-form-label"  for="name">Working Hours for <?php echo date("F Y ")?></label>
                  </div>
                  
              </div>
              <button type="submit" class="btn btn-secondary" name="cal_payslip" value="cal_payslip">Calculate Payslip</button>
          </form>
        </div>
        
</section>

<!----- Payslip Display ----------------------------------------------->

<section>

<?php

if (isset($_POST['cal_payslip']) && $_POST['cal_payslip'] === 'cal_payslip' && isset($_POST['payslip_id'])) {


  $id = $_POST['payslip_id'];

  $current_employee = is_partimer($id) ? new PartTimer($id) : new FullTimer($id);
  
  $current_employee->calculateMonthlySalary($_POST['payslip_hr']);
  

  echo $current_employee->printPayslip();

  unset($_POST['payslip_id']);
  unset($_POST['cal_payslip']);

}
?>
</section>

<!--------------------------------------------------------------------->
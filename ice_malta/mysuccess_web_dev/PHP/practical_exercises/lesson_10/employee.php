<?php require_once './database.php'; 

// <!------- Main ----------------------------------------------------->

if (isset($_POST['add_employee']) || isset($_POST['update_employee'])) {    

    $fildsEmpty = empty(trim($_POST['firstname'])) && 
                  empty(trim($_POST['lastname']))  && 
                  empty(trim($_POST['job_title'])) && 
                  empty(trim($_POST['hourly_rate']));


    if(!$fildsEmpty) {

        $firstname   = $_POST['firstname'];
        $lastname    = $_POST['lastname'];
        $job_title   = $_POST['job_title'];
        $hourly_rate = $_POST['hourly_rate'];
        $part_time   = (bool) isset($_POST['part_time']) ? '1' : '0';
        $overtime_allowed = (bool) isset($_POST['overtime_allowed']) && (bool) !$part_time ? '1' : '0';


$sql = 'INSERT INTO employee(
                firstname, lastname, job_title, hourly_rate, part_time, overtime_allowed
            )VALUES(
                :firstname, :lastname, :job_title, :hourly_rate, :part_time, :overtime_allowed
            );';

        if (isset($_POST['update_employee'])) {
            
            $e_id = $_POST['e_id'];
            $sql = 'UPDATE employee set
                        firstname=:firstname,
                        lastname=:lastname,
                        job_title=:job_title,
                        hourly_rate=:hourly_rate,
                        part_time=:part_time,
                        overtime_allowed=:overtime_allowed
                    WHERE id = :id';
        }

        $stat = $conn->prepare($sql);
        if (isset($e_id)) { $stat->bindParam(':id', $e_id);}
        $stat->bindParam(':firstname', $firstname);
        $stat->bindParam(':lastname', $lastname);
        $stat->bindParam(':job_title', $job_title);
        $stat->bindParam(':hourly_rate', $hourly_rate);
        $stat->bindParam(':part_time', $part_time);
        $stat->bindParam(':overtime_allowed', $overtime_allowed);
        $stat->execute();

        unset($_POST['firstname']);
        unset($_POST['add_employee']);
        header("location: {$_SERVER['PHP_SELF']}");

    }
} 
?>

<?php 

// <!------- Delete_Employee ------------------------------------------>

if(isset($_POST['delete_employee'])) {
    echo 'delete employee' . ' id: ' . $_POST['e_id'];

    delete_employee($_POST['e_id']);
    unset($_POST['e_id']);
    header("location: {$_SERVER['PHP_SELF']}");
}

// <!------- Set_Edit_Employee ---------------------------------------->

// ----- Edit
$edit =  isset($_POST['edit_employee']) ? true : false;

if ($edit) {
    $emp = FetchEmployeeTrait::fetchEmployee($_POST['e_id']);
} 

// <!------- Cancel_Edit_Employee ------------------------------------->


if (isset($_POST['cancel_employee'])) {
    unset($_POST['edit_employee']);
}

?>

<!---------- Employee_Fields_Markup ----------------------------------->

<section>
    <div class="container containerAA ">
        <div class="contact">
            <form action="<?php echo $_SERVER['PHP_SELF'];?>" method="POST">

            <?php if($edit): ?> <!------ Edit Employee Fields --------->

                    <div class="row">
                        <input type="hidden" class="form-control" name="e_id"   value="<?= $emp->id;?>"/>
                        <div class="col-md-3"> <input type="text" class="form-control" name="firstname"   value="<?= $emp->firstname;?>" /> </div>
                        <div class="col-md-3"> <input type="text" class="form-control" name="lastname"    value="<?= $emp->lastname;?>"  /> </div>
                        <div class="col-md-3"> <input type="text" class="form-control" name="job_title"   value="<?= $emp->job_title;?>" /> </div>
                        <div class="col-md-3"> <input type="text" class="form-control" name="hourly_rate" value="<?= $emp->hourly_rate;?>" /> </div>
                    </div>
            
                    <div class="form-check">

                        <input class="form-check-input" type="checkbox" 
                            name="part_time" id="defaultCheck1" <?php  if($emp->part_time) echo'checked'; ?> >
                        <label class="form-check-label" for="defaultCheck1" >part-time basis</label>

                        <input class="form-check-input" type="checkbox" 
                            name="overtime_allowed"  id="defaultCheck2"<?php  if($emp->overtime_allowed) echo'checked'; ?> >
                        <label class="form-check-label" for="defaultCheck1">overtime allowed (only full timers)</label>

                    </div>
                     <button class="btn btn-success btn-success-1 mt-2 px-5 " type="submit" name="update_employee">Update</button> 
                     <button class="btn btn-info btn-info-1 mt-2 px-5 " type="submit" name="cancel_employee">Cancel</button> 

            <?php else: ?> <!----------- Add Employee Fields ---------->

                    <div class="row">
                        <div class="col-md-3"> <input type="text" class="form-control" name="firstname"  placeholder="firstname" /> </div>
                        <div class="col-md-3"> <input type="text" class="form-control" name="lastname"   placeholder="lastname" /> </div>
                        <div class="col-md-3"> <input type="text" class="form-control" name="job_title"   placeholder="job title" /> </div>
                        <div class="col-md-3"> <input type="text" class="form-control" name="hourly_rate" placeholder="hourly rate (₳) " /> </div>
                    </div>
            
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="part_time" id="defaultCheck1">
                        <label class="form-check-label" for="defaultCheck1" >part-time basis</label>
                        <input class="form-check-input" type="checkbox" name="overtime_allowed"  id="defaultCheck2">
                        <label class="form-check-label" for="defaultCheck1">overtime allowed (only full timers)</label>
                    </div>
                    <button class="btn btn-success btn-success-1 mt-2 px-5 " type="submit" name="add_employee">Add Employee</button>

            <?php endif ?> <!----------- End_If ----------------------->

            
            </form>
        </div>    
    </div>
    <table class="table table-sm table-dark"><thead><caption>Add / Update Employee</caption></thead></table>
</section>

<!-- --------------------------------------------------------------- -->

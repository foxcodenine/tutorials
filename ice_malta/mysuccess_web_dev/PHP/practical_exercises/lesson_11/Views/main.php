<?php

use src\Model\State;
use src\Controller\Controller;
use src\Model\Database;

?>

<!-- helper functions ---------------------------------------------- -->
<section class="main">      
   <div class="left">
    <div class="left__title">discover the icelandic turf house</div>   

    <form action="index.php" class="left__form" method="POST">
        
        <label for="firstname" class="left__label">firstname<span class="invaled"><?= State::$validateFirstname;?></span></label>
        
        <input type="text" class="left__input" name="firstname" value="<?= State::$firstname; ?>" >

        <label for="lastname" class="left__label">lastname<span class="invaled"><?= State::$validateLastname;?></span></label>
        <input type="text" class="left__input" name="lastname" value="<?= State::$lastname; ?>" >

        <label for="email" class="left__label">email<span class="invaled"><?= State::$validateEmail;?></span></label>
        <input type="text" class="left__input" name="email"  value="<?= State::$email; ?>" >

        <label for="checkIn" class="left__label">check in<span class="invaled"><?= State::$validateCheckIn;?></span></label>
        <input type="text" class="left__input dateFormat" name="checkIn"  value="<?= State::$checkIn; ?>">

        <label for="checkOut"  class="left__label">check out<span class="invaled"><?= State::$validateCheckOut;?></span></label>
        <input type="text" class="left__input dateFormat" name="checkOut" value="<?= State::$checkOut; ?>">

        <div class="left__room">
        
        <select name="adults"class="left__input left__input--adults">
        <?php 
            $adults = range(1, 10);

            foreach ($adults as $a) {
                if ($a == 1) {
                    echo "<option value='$a'>$a adult</option>";
                } elseif ($a == State::$adults) {
                    echo "<option value='$a' selected>{$a} adults</option>";
                } else {
                    echo "<option value='$a'>{$a} adults</option>";
                }
            }
        
        ?>
        </select>

        <select name="children"class="left__input left__input--children">
        <?php            
            $children = range(0, 10);

            foreach($children as $c) {
                if ($c == 0)  {
                    echo "<option value='0'>No children</option>";
                } else if ($c == State::$children && $c == 1) {
                    echo "<option value='{$c}' selected >{$c} child</option>";                    
                } else if ($c == 1) {
                    echo "<option value='{$c}'>{$c} child</option>";                    
                } else if ($c == State::$children) {
                    echo "<option value='{$c}' selected >{$c} children</option>";                    
                } else {
                    echo "<option value='{$c}'>{$c} children</option>";
                }
            }               
        ?>
        </select>
        
        <select name="rooms"class="left__input left__input--room">
        <?php 
            echo "<option value='1'>1 room</option>";
            $rooms = range(2, 10);
            
            foreach($rooms as $r) {
                if ($r == 1)  {
                    echo "<option value='{$r}'>{$r} rooms</option>";
                } else if ($r == State::$rooms) {
                    echo "<option value='{$r}' selected >{$r} rooms</option>";
                } else {
                    echo "<option value='{$r}'>{$r} rooms</option>";
                }
            }
        ?>
        </select>

            
        </div>

        <label for="check_out" class="left__label">select color</label>               
        <select name="bgColor" class="left__input" >
            <?php
                foreach (State::COLORS as $k => $v) {
                    if (State::$backgroundColor == $v) {
                        echo "<option style='background-color: {$v};' value='{$v}' selected>{$k}</option>";
                    } else {
                        echo "<option style='background-color: {$v};' value='{$v}'>{$k}</option>";
                    }
                }
            ?>
        </select>

        <button class="left__btn" type="submit" id="submitBtn" name="submitBtn"  value="submitted">Check</button>
    </form>
   </div>

   <?php if(isset($_GET['complete'])): ?>
   <div class="right">
    

   <?php 
        if($_GET['complete'] == Controller::retriveCode() && Controller::retriveCode()) {
            $b = Database::fetchRecord(Controller::retriveCode()); //<- and udjust dates

            $adults = $b->adults == 1 ? 'adult' : 'adults';
            $children = $b->children == 1 ? 'child' : 'children';
            $room = $b->rooms == 1 ? 'room' : 'rooms';

            $markup = <<<END
            Fullname: $b->firstname $b->lastname,  &nbsp; Email: $b->email <br><br>
            Dates from: $b->checkIn &nbsp; to: $b->checkOut <br><br>
            Booking: &nbsp;&nbsp;
            $b->adults $adults &nbsp;|&nbsp; $b->children $children &nbsp;|&nbsp; $b->rooms $room
            <br>
            END;

            echo $markup;

            echo $_ENV['MESSAGE1'];
        } else {
            echo $_ENV['MESSAGE2'];
        }
   
   
   ?>
   </div>


   <?php endif; ?>

</section>

<!-- --------------------------------------------------------------- -->

<?php

// <!------------------------------------------------------------------>

function delete_employee($id) {
    global $conn;
    $sql = 'DELETE FROM employee WHERE id = :id';
    $stat = $conn->prepare($sql);
    $stat->bindParam(':id', $id);
    $stat->execute();
  }

// <!------------------------------------------------------------------>

function fetch_employees($select=0): array {
  global $conn;

  if ($select === 0 || $select === 1 ) {
    $select = (bool) $select ? '1' : '0';
    $sql = 'SELECT * FROM employee WHERE part_time =' . $select;

  } else {
    $sql = 'SELECT * FROM employee';
  }

  $stat = $conn->prepare($sql);
  $stat->execute();
  $full_timers = $stat->fetchAll(PDO::FETCH_OBJ);

   return $full_timers;
}


// <!------------------------------------------------------------------>


function is_partimer($id) {
  global $conn;

  $sql = 'SELECT * FROM employee WHERE id =' . $id;

  $stat = $conn->prepare($sql);
  $stat->execute();
  $employee = $stat->fetch(PDO::FETCH_OBJ);

    return $employee->part_time;
}

// <!------------------------------------------------------------------>

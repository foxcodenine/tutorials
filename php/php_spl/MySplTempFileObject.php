<?php
// Fake dataset - imagine this was bigger
$data = [
    ['id','Name',   'Type'],
    ['1', 'Orange', 'Fruit'],
    ['2', 'Cheese', 'Dairy comestible'],
];

// Build CSV
$file = new SPLTempFileObject();
foreach ($data as $row) {
    $file->fputcsv($row);
}

// Download file as csv
header("Content-Description: File Transfer");
header('Content-type: text/csv; charset=utf-8');
header("Content-Disposition: attachment; filename=data.csv");

$file->rewind();
$file->fpassthru();
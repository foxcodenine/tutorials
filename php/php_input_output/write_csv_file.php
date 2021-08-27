<?php 

$file = './test_csv_file.csv';

$fileHandle = fopen($file, 'w+');

$content = [
    'ADA'=>'Cardano', 'BTC'=>'Bitcoin', 
    'ETH'=>'Etherum', 'VET'=>'Vechain', 
    'BNB'=>'BinanceCoin'
];

fputcsv($fileHandle, $content);
fclose($fileHandle);
?>
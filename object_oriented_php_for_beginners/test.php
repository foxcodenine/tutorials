<?php
// console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number));
function format_item($value)
{
       $format = new \NumberFormatter('en_US', \NumberFormatter::CURRENCY);
       return $format->formatCurrency($value, 'AUD');
}

format_item(25);
echo phpinfo();
?>
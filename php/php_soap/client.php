<?php

$wsdl = NULL;
$options = array(
    'location' => 'http://localhost/php/php_soap/server.php',
    'uri' => 'urn://localhost/php/php_soap/server.php',
    'trace' => 1
);

try {
    $client = new SoapClient($wsdl, $options);

    echo  $client->getbooksIds('bk104');
    echo '<br>';
    echo $client->__soapCall('getBook', ['bk103']);


} catch (Exception $e) {
    echo 'error';
    echo  $client->__getLastResponse();
    echo  $client->__getLastRequest();
}
?>







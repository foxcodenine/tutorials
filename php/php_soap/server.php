<?php

$wsdl = NULL;

class MySoapServer {

    public function getBook($id) {
        $catalog = new SimpleXMLElement('catalog.xml', 0, 1);
        $result = $catalog->xpath('//book[@id="'. $id .'"]/title');
        $i = ''; foreach($result as $r) $i.= $r;

        return $i;
        
    }

    public function getbooksIds () {
        $catalog = new SimpleXMLElement('catalog.xml', 0, 1);
        $i = ''; foreach($catalog as $r) $i.= $r['id'] . ',  &nbsp; ';

        return $i;
    }
}

$options = array('uri'=>'localhost/php/php_soap/server.php');

$server = new SoapServer(NULL, $options); 

$server->setClass('MySoapServer');

$server->handle();

?>
<!-- https://www.php.net/manual/en/language.variables.superglobals.php -->
<?php

    function ppp($a){
        echo "<br><br>($a)____________________________________<br><br>";
    }


    // ppp(1); // _________________________________________________________
    
    # S_SERVER SUPERGLOBAL

    // Create a Server Array 
    $server = [
        'Host Server Name' => $_SERVER['SERVER_NAME'],
        'Host Header' => $_SERVER['HTTP_HOST'],
        'Host IP address' => $_SERVER['SERVER_ADDR'],
        'Host CGI ' => $_SERVER['GATEWAY_INTERFACE'],
        'Server Software' => $_SERVER['SERVER_SOFTWARE'], 
        'Document Root' => $_SERVER['DOCUMENT_ROOT'],
        'Current Page' => $_SERVER['PHP_SELF'],
        'Script Name' => $_SERVER['SCRIPT_NAME'],
        'Absolute Path' => $_SERVER['SCRIPT_FILENAME'],
    ];

    // echo $server['Host Server Name'];

    // ppp(2); // _________________________________________________________

    // echo $server['Host Header'];

    // ppp(3); // _________________________________________________________

    // echo $server['Host IP address'];

    // ppp(4); // _________________________________________________________

    // echo $server['Host CGI '];

    // ppp(5); // _________________________________________________________

    // echo $server['Server Software'];

    // ppp(6); // _________________________________________________________

    // echo $server['Document Root'];

    // ppp(7); // _________________________________________________________

    // echo $server['Current Page'];
    
    // ppp(8); // _________________________________________________________

    // echo $server['Script Name'];
    
    // ppp(9); // _________________________________________________________

    // echo $server['Absolute Path'];

    // ppp(10); // _________________________________________________________
    // Create a Client Array

    $client = [
        'Client System info' => $_SERVER['HTTP_USER_AGENT'],
        'Client IP' => $_SERVER['REMOTE_ADDR'],
        'Remote Port' => $_SERVER['REMOTE_PORT']
    ];

    // print_r($_client);

     


?>
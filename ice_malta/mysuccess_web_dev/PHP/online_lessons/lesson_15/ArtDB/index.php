<?php 
require_once './ArtWork.php';

function handleRequest($method, $args='') {
    switch($method) {
        case 'GET':
            if ($args == '') {
                echo json_encode(ArtWork::getAll());

            } else {
                $art = ArtWork::get($args[0]);

                if ($art !=null) {
                    echo json_encode($art);
                } else {
                    var_dump(http_response_code(404));
                }
            }
            break;

        case 'POST':
            $title = $_POST['title'];
            $year = $_POST['year'];
            $artist = $_POST['artist'];
            $medium = $_POST['medium'];
            
            new ArtWork($title, $year, $artist,$medium);
            var_dump(http_response_code(201));
            break;

        case 'DELETE':
            ArtWork::delete(($args[0]));
            break;

        default:
            header('HTTP/1.1 405 Method Not Allowed');
            header('Allowed: GET, POST, DELETE');
            break;
    }
}



// _____________________________________________________________________

$method = $_SERVER['REQUEST_METHOD'];
$uri = $_SERVER['REQUEST_URI']; // ex: localhost/ArtDB/artwork/4

$pathList = explode('/', $uri);

$resource = $pathList[2];// artwork

if ($resource == 'artwork' && !isset($pathList[3])) {
    // Possible:

    handleRequest($method);
    
    // GET all:

    // Add:

} elseif ($resource == 'artwork' && isset($pathList[3])) {

    handleRequest($method, array($pathList[3]));

    // GET by id:

    // Delete by id:
}
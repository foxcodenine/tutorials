<?php
$maxSize = ini_get('upload_max_filesize');

if (isset($_FILES['fileToProcess']) && is_uploaded_file($_FILES['fileToProcess']['tmp_name'])) {
    $uploadedFile = $_FILES['fileToProcess']['tmp_name'];
    $nameFile = $_FILES['fileToProcess']['name'];
    // $typeFile = $_FILES['fileToProcess']['type'];

    // Validate file type:
    $fileInfo = finfo_open(FILEINFO_MIME_TYPE);
    $fileType = finfo_file($fileInfo, $uploadedFile);
    $allowedTypes = ['image/gif','image/png','image/jpeg'];

    if (!in_array($fileType, $allowedTypes)){
        die('Invalid file format!');
    }

    // Generate a unique name for the file 
    $ext = pathinfo($_FILES['fileToProcess']['name'])['extension'];
    $uniqueName = time().uniqid(rand());

    $path = 'uploads/';

    $destFile = $path . $uniqueName . '.' . $ext;

    move_uploaded_file($uploadedFile, $destFile);
    printf("File has been successfully uploaded.");
} 


?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>File Upload</title>
</head>
<body>

    <?php
    if(isset($destFile)) {
        echo "<img src={$destFile}>";
    }
    
    ?>
    <h1>Upload Image</h1>
    <form action="" enctype="multipart/form-data" method="POST">

        <p>Upload a GIF, JPEF or PNG file.</p>
        <label>File (max: <?= $maxSize ?>):
            <input name="fileToProcess" type="file">
        </label><br>
        <input type="submit" value="Upload">   
    
    
    </form>
</body>
</html>
<?php
/** php.ini
 * upload_max_filesize
 * upload_tmp_dir
 */


/** $_FILES
 * name
* type
* size
* tmp_name
*/
?>


<form action="<?php echo $_SERVER['PHP_SELF']?>" method="POST"
      enctype="multipart/form-data">

    <input type="hidden" name="MAX_FILE_SIZE" value="2000000">

    <label>File name:
        <input name="fileToProcess" type="file">
    </label><br>    
    
    <input type="submit" value="Upload">
    
</form>

<?php

if (isset($_FILES['fileToProcess']) && is_uploaded_file($_FILES['fileToProcess']['tmp_name'])) {
        $tmpFile = $_FILES['fileToProcess']['tmp_name'];
        $nameFile = $_FILES['fileToProcess']['name'];
        $typeFile = $_FILES['fileToProcess']['type'];
        move_uploaded_file($tmpFile, dirname(__FILE__) . '\\file_upload_tmp\\' . $nameFile);
        printf("File has been successfully uploaded.");
} 

?>

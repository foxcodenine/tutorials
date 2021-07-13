
<form action="<?php echo $_SERVER['PHP_SELF']?>" method="POST">
    Enter a word:
    <input type="text" name="input_word">
    <br>
    How long should each chunk be?
    <input type="text" name="length_of_chunk">
    <input type="submit" value="run">

</form>


<?php

    if(isset($_POST['input_word'])) {

        $inputWord = $_POST['input_word'];
        $lengthOfEachChunk = $_POST['length_of_chunk'];

        $numberOfChunks = ceil(strlen($inputWord) / $lengthOfEachChunk);
        printf("Chunks: <br>" );

        for ($i = 0; $i < $numberOfChunks; $i++) {
            $chunk = substr($inputWord, ($i * $lengthOfEachChunk), $lengthOfEachChunk);
            printf("%s<br>", $chunk);
        }
    }
?>



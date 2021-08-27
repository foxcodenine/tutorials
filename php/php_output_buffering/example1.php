<?php 

function escapeOutput(string $buffer): string {

    return (htmlentities($buffer));
}

ob_start("escapeOutput");

$output = "<script>alert('xss')</script>";
echo ($output);

ob_flush();
ob_end_clean();

?>



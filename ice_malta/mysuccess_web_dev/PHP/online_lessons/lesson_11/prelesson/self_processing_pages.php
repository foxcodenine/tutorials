<?php if($_SERVER['REQUEST_METHOD'] == 'GET'): ?>

    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
        Fahrenheit Temperature:
        <input type="text" name="fahrenheit">
        <br>
        <input type="submit" name="run">
    </form>

<?php elseif ($_SERVER['REQUEST_METHOD'] == 'POST'): ?>

    <?php
        
        $fahrenheit = $_POST['fahrenheit'];
        $celsius = ($fahrenheit - 32) * (5/9);
        printf("%.2fF is %.2fC", $fahrenheit, $celsius);       
        
    ?>

<?php else: ?>

    (EE) Use only GET or POST.
    
<?php endif ?>
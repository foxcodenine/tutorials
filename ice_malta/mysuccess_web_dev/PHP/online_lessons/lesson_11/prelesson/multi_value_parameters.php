<form action="" method="GET">

    Select a provider:
    <br>
    Virtual Box <input type="checkbox" name="attributes[]" value="vbox"><br>
    Vmware <input type="checkbox" name="attributes[]" value="vmware"><br>
    HyperV <input type="checkbox" name="attributes[]" value="hyperv"><br>
    Docker <input type="checkbox" name="attributes[]" value="docker"><br>
    <br>
    <input type="submit" name="pro" value="Run">
</form>

<?php 

    if (array_key_exists('pro', $_GET) && isset($_GET['attributes'])) {
        $result = join(', ', $_GET['attributes']);
        echo "You have selected the <b> {$result} </b> provider(s).";
    }
?>
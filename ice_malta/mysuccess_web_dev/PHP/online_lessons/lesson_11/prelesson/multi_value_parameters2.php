<form action="" method="GET">

    Select a provider:<br>
    <select name="provider[]" multiple>
        <option name="vbox" >Virtual Box</option>
        <option name="hyperv">HyperV</option>
        <option name="vmware">Vmware</option>
        <option name="docker">Docker</option>
    </select>
    <br>
    <input type="submit" name="pro" value="Run">
</form>

<?php 

    if (array_key_exists('pro', $_GET) && isset($_GET['provider'])) {
        $result = join(', ', $_GET['provider']);
        echo "You have selected the {$result} provider(s).";
    }
?>
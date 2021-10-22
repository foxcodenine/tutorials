<?php
header('Content-Type: application/json');
?>
<?php
class A {
    public $identifier;
    public function __construct($i) {
        $this->identifier = $i;
    }
}
class B extends A {}

$a1 = new A(1);     $a2 = new A(2);     $b1 = new B(1);

$container = new SplObjectStorage();
$container->attach($a1);
$container->attach($a2);
$container->attach($b1);

echo $container->count(), PHP_EOL;


foreach ($container as $obj) {
    var_export($obj); echo PHP_EOL, PHP_EOL;
}
?>

<?php
$container->attach($b1);
$container->attach($b1);

echo $container->count(), PHP_EOL;

foreach ($container as $obj) {
    var_export($obj); echo PHP_EOL, PHP_EOL;
}
?>

<?php
$container->detach($a1);
$container->detach($a2);
echo $container->count(), PHP_EOL;
var_export($container->contains($a1));
var_export($container->contains($b1));
?>

<?php
$container->attach($a1);
$container->attach($a2);
echo PHP_EOL, PHP_EOL, PHP_EOL;
var_export(iterator_to_array($container));
?>

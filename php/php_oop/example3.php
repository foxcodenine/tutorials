<?php 

header('Content-Type: application/json');

class Airplane {
    public static $color = 'White';
    public static $airline = 'RyanAir';

    public static function getColor() {
        return self::$color;
    }

    public static function getAirline() {
        return static::$airline;
    }

    public static function updateColor($a) {
        static::$color = $a;
    }
    public static function updateColor2($a) {
        self::$color = $a;
    }

}

class MaltaAir extends Airplane {
    public static $color = 'Red';
    public static $airline = 'Airmalta';

    public static function manufactureData() {
        return "Color: " . parent::$color . " Model: " . parent::$airline;
    }
}

echo MaltaAir::getAirline(), PHP_EOL;

echo MaltaAir::getColor(),   PHP_EOL;
echo MaltaAir::$color,       PHP_EOL;

MaltaAir::updateColor('Blue');

echo MaltaAir::getColor(),   PHP_EOL;
echo MaltaAir::$color,       PHP_EOL;

echo MaltaAir::manufactureData(),       PHP_EOL;
MaltaAir::updateColor2('Green');
echo MaltaAir::manufactureData();
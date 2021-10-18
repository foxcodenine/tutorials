<?php
class Wolf {

    private function howling($arg='owooooo owooooo') {
        return $arg;
    }

    public function __call($name, $arguments) {
        if ($name === 'howling') {
            
            return $this->howling(...$arguments);
            
        } else {
            return 'Class <b>' . __CLASS__ . '</b> doesn\'t has method <b>' . $name . '</b>.';
        }
    }
}

$ben = new Wolf;
echo $ben->howling('...snif, snif');
echo '<br>';
echo $ben->call();



class Lynx {

    private static function wailing ($arg='mmmmmuu mmmmmmuuu') {
        return $arg;
    }

    public static function __callStatic($name, $arguments) {
        if ($name === 'wailing') {
            
            return static::wailing(...$arguments);
            
        } else {
            return 'Class <b>' . __CLASS__ . '</b> doesn\'t has method <b>' . $name . '</b>.';
        }
    }
}

echo '<br>';
echo Lynx::wailing('MMMU mmu');
echo '<br>';
echo Lynx::call();
<?php
ini_set('default_charset', 'UTF-16');
// echo mb_detect_encoding('$', ['UTF-8']);
class MyException extends Exception {};

try {
    try {
        throw new MyException;
      } catch (Exception $e) {
        echo "1:";
        throw $e;
      } catch (MyException $e) {
        echo "2:";
        throw $e;
      } catch (Exception $e) {
        echo get_class($e);
      }
} catch (Exception $e) {
    echo get_class($e);
}

echo '<br><br><br>';

try {
    throw new MyException;
    } catch (Exception $e) {
    echo "1:";

    try {
        throw $e;

    } catch (Exception $e) {
        echo get_class($e);
    } 
    
    } catch (MyException $e) {
    echo "2:";
    throw $e;
    } catch (Exception $e) {
    echo get_class($e);
}




class C {
    public $ello = 'ello';
    public $c;
    public $m;
  
    function __construct($y) {
      $this->c = static function($f) { 
        return $f() .'ello';
      };
      $this->m = function() {
        return "h";
      };
    }
  }
  $g = function (){ return 'h';};
  $x = new C("h");
  $f = $x->c;
  echo $f($g);

  $data = '$1a2';
  $data = '$';
  $count = strlen($data);
echo $count;




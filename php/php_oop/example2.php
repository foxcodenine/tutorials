<?php

abstract class AbsClassA {
}
abstract class AbsClassB {
}
abstract class AbsClassC extends AbsClassA {
}

interface IntAA {    
}
interface IntBB {
}
interface IntCC extends IntAA, IntBB {
}

abstract class AbsClassD implements IntAA, IntBB {
}

trait tAA {
    
}
trait tBB {

}
trait tCC {
    use tAA, tBB;
}

interface IntDD extends IntAA, IntBB {
}



class Cat {
    public const FAMILY = 'Felidae';
}

$joe = new Cat();
echo Cat::FAMILY;
echo $joe::FAMILY;
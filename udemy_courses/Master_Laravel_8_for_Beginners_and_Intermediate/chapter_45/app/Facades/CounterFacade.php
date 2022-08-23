<?php 

namespace App\Facades;

use App\Contracts\CounterCountract;
use Illuminate\Support\Facades\Facade;

/**
 * A custom facade to contract CounterCountract
 * 
 * @method is static int increment (string $key, array $tags = null)
 */

class CounterFacade extends Facade
{
    protected static function getFacadeAccessor()
    {
        return CounterCountract::class;
    }
}
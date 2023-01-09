<?php

namespace App\Contracts;

interface CounterCountract
{
    public function increment(string $key, array $tags = null): int;
}

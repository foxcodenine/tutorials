<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class HomeTest extends TestCase
{

    public function testHomePageIsWorking() {
        $response = $this->get('/');

        // $response->assertStatus(200);
        $response->assertSeeText('Welcome to Laravel!');
    }

    public function testContactsPageIsWorking() {

        $response = $this->get('/contacts');
        $response->assertSeeText('Contacts');
    }
}

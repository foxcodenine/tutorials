<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class HomeTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */

    public function test_home_is_working_correctly()
    {
        $response = $this->get('/');

        $response->assertStatus(200);

        $response->assertSeeText('Welcome to Laravel');

        $response->assertSeeText('Hi, this is my first Laravel project, I glad you found the time to visit this page!');
    }

    public function test_contact_is_working_correctly()
    {
        $response = $this->get('/contact');

        $response->assertSeeText('Contact Us');
        $response->assertSeeText('61 Street Name, City Name Here, Malta');

    }
}

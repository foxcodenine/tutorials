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

        $response->assertSeeText('Welcome  this is the content of the home page.');
    }

    public function test_contact_is_working_correctly()
    {
        $response = $this->get('/contact');

        $response->assertSeeText('Contact Page');
        $response->assertSeeText('Hello this is contact');

    }
}

<?php

namespace Tests;

use App\Models\BlogPost;
use App\Models\User;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;

    protected function createTestUser() {
        return User::factory()->create();
    }

    protected function createBlogPost() {
        $user = $this->createTestUser();        
        $blogPost =  BlogPost::factory(['user_id' => $user->id])->create();

        return $blogPost;
    }
}

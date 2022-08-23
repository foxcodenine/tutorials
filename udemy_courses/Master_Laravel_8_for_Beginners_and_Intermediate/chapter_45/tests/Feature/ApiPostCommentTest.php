<?php

namespace Tests\Feature;

use App\Models\BlogPost;
use App\Models\Comment;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Http;
use Tests\TestCase;

class ApiPostCommentTest extends TestCase
{
    use RefreshDatabase;

    public function test_blog_post_does_not_have_comments() 
    {
        // Creating a user and act as this is loged user.
        $this->actingAs($this->createTestUser());

        // Creating a post
        BlogPost::factory(['user_id' => auth()->id()])->create();

        $response = $this->json('GET', 'api/v1/posts/1/comments');

        $response->assertStatus(200)
                 ->assertJsonStructure(['data', 'links', 'meta'])
                 ->assertJsonCount(0, 'data');
    }

    public function test_blog_post_has_10_comments() 
    {
        // Creating a user and act as this is loged user.
        $this->actingAs($this->createTestUser());

        // Creating a post
        $blogPost = BlogPost::factory(['user_id' => auth()->id()])->create();

        // Make 10 comments
        $comments =  Comment::factory()->count(10)->make(['user_id' => auth()->id()]);

        // Save the comments
        $blogPost->comments()->saveMany($comments);

        // --- Start asserting
        $this->assertDatabaseCount('comments', 10);

        $response = $this->json('GET', 'api/v1/posts/2/comments');

        $response
                ->assertStatus(200)
                ->assertJsonStructure([
                    'data' => [
                        '*' => [
                            'id',
                            'content',
                            'create_at',
                            'user' => [
                                'id', 'name'
                            ]
                        ]
                    ], 
                    'links', 
                    'meta'
                ])
                ->assertJsonCount(10, 'data')
                ;
    }

    public function test_adding_comments_when_not_authenticated() {
        $blogPost = $this->createBlogPost();        
        

        $response = $this->json('POST', 'api/v1/posts/3/comments', [
            'content' => 'I like Laravel'
        ]);

        $response->assertExactJson([["message" => "Unauthenticated.","exception_name" => "AuthenticationException"]]);
        $this->assertDatabaseCount('comments', 0);
    }





    public function test_adding_comments_when_authenticated() {
        $blogPost = $this->createBlogPost();        
        

        $response = $this->actingAs($this->createTestUser(), 'api')
                         ->json(
                            'POST', 
                            'api/v1/posts/4/comments', 
                            ['content' => 'I like Laravel']
                         );

        $response->assertStatus(201);
        $this->assertDatabaseCount('comments', 1);
    }

    public function test_adding_comments_when_invalid_data() {
        $blogPost = $this->createBlogPost();        
        

        $response = $this->actingAs($this->createTestUser(), 'api')
                         ->json(
                            'POST', 
                            'api/v1/posts/5/comments', 
                            []
                         );

        $response->assertJson([["message" => "The given data was invalid.","exception_name" => "ValidationException"]]);
        $this->assertDatabaseCount('comments', 0);
    }

    
}

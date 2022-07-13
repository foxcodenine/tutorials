<?php

namespace Tests\Feature;

use App\Models\BlogPost;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class BlogPostTest extends TestCase
{
    // --- This trail lets you recreate the db structure,
    // --- by running all the migration on each test run

    use RefreshDatabase;

    /**
     * A basic feature test example.
     *
     * @return void
     */
    
    public function test_no_blog_posts()
    {
        $response = $this->get('/posts');

        $response->assertSeeText('No blog post yet!');
    }

    public function test_one_blog_post()
    {      
        // Arrange 
        BlogPost::create([
            'title' => 'Some title',
            'content' => 'Some content',
            'image_url' => 'http://some_image'
        ]);

        // Act
        $response = $this->get('/posts');

        // Assert
        $response->assertSeeText('Some title');
        $response->assertSeeText('Some content');

        $response->assertSeeText('No comments yet!');

        $this->assertDatabaseCount('blog_posts', 1);
        $this->assertDatabaseHas('blog_posts', ['title' => 'Some title']);

    }
    

    public function test_store_valid()
    {      
       
        $params = [
            'title' => 'Valid title name',
            'content' => 'At least 10 characters',
            'image_url' => 'http://some_random_image'
        ];

        $this->post('/posts', $params)
            ->assertStatus(302)
            ->assertSessionHas('status');
        
            $this->assertEquals(session('status'), 'The blog post was created');
         
            // var_dump(session('status'));
    }


    public function test_store_fail() 
    {
        $params = [
            'title' => 'a',
            'content' => 'abc',
            'image_url' => ''
        ];

        $this->post('/posts', $params)
            ->assertStatus(302)
            ->assertSessionHas('errors')
            ->assertSessionHasErrors();

        // dd(session('errors')->getMessages()['title'][0]);

        $messages = session('errors')->getMessages();

        $this->assertEquals($messages['title'][0], 'The title must be at least 5 characters.');
        $this->assertEquals($messages['content'][0], 'The content must be at least 10 characters.');
        $this->assertEquals($messages['image_url'][0], 'The image url format is invalid.');
    }

    public function test_update_valid() {

        $post = BlogPost::create([
            'title' => 'Valid title name',
            'content' => 'At least 10 characters',
            'image_url' => 'http://some_random_image'
        ]);
       
        $array = $post->toArray();

        unset($array['updated_at']);
        unset($array['created_at']);

        $this->assertDatabaseHas('blog_posts', $array);

        // --- Updating

        $editedParams = [
            'title'     => 'Edit title',
            'content'   => 'Edit content',
            'image_url' => 'http://edit_image'
        ];

        // $post->fill($editedParams); $post->save();
        $response = $this->put("/posts/{$post->id}", $editedParams);


        // --- Check Status code, session, and flash message
        $response->assertStatus(302)
            ->assertSessionHas('status');

        $this->assertEquals(session('status'), 'Post has been updated');
        

        // --- Checking database
        $this->assertDatabaseHas('blog_posts', ['image_url' => 'http://edit_image']);
        $this->assertDatabaseMissing('blog_posts', ['image_url' => 'http://some_random_image']);


        // --- Checking the edit news page
        $this->get("/posts/{$post->id}")
            ->assertSeeText('Edit title')
            ->assertSeeText('Edit content');
            

    }

    public function test_delete() {

        // ----- 1st we create the  news post and check db
        $post = $this->createDummyBlogPost();
        $this->assertDatabaseCount('blog_posts', 1);

        // ----- 2nd we delete the blog post
        $response = $this->delete("/posts/{$post->id}");

        // --- Checking the database
        $this->assertDatabaseCount('blog_posts', 0);

        // --- Check status code and session
        $response->assertStatus(302)
            ->assertSessionHas('status');

        // --- Check flush message
        $this->assertEquals(session('status'), 'Blog post was delete');
        
        // --- Check the blog post page
        $this->get('/posts')->assertSeeText('No blog post yet!');
        
    }

    private function createDummyBlogPost() {

        return BlogPost::create([
            'title' => 'Valid title name',
            'content' => 'At least 10 characters',
            'image_url' => 'http://some_random_image'
        ]);
    }

}


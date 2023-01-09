<?php

namespace Tests\Feature;

use App\Models\BlogPost;
use App\Models\Comment;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Auth;
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

    // _________________________________________________________________

    public function test_no_blog_posts()
    {
        $response = $this->get('/posts');

        $response->assertSeeText('No blog post yet!');
    }

    // _________________________________________________________________

    public function test_one_blog_post_with_no_comments()
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
    
    // _________________________________________________________________
    
    public function test_blog_post_with_comments() {

        $post = $this->actingAs($this->createTestUser())->createDummyBlogPost();

        $comment1 = $this->createDummyComment('1st comment', $post);

        $this->get('/posts')->assertSeeText('1 comment');

        $comment2 = $this->createDummyComment('2nd comment', $post);

        $this->get('/posts')->assertSeeText('2 comments');
        $this->assertDatabaseCount('comments', 2);


        // ~~~ Using Factory:
        $myNewPost = BlogPost::factory()->stateTitle('My New Title')->create();
        Comment::factory()->count(2)->create(['blog_post_id' => $myNewPost->id]);

        $this->assertDatabaseCount('comments', 4);
        $this->get('/posts')->assertSeeText('My New Title');
    }

    // _________________________________________________________________

    public function test_store_valid()
    {      
        $testUser = $this->createTestUser();

        // Method 1        
        // $this->actingAs($testUser);
       
        $params = [
            'title' => 'Valid title name',
            'content' => 'At least 10 characters',
            'image_url' => 'http://some_random_image'
        ];

        // Method 2 (actingAs)
        $this->actingAs($testUser)
            ->post('/posts', $params)
            ->assertStatus(302)
            ->assertSessionHas('status')
            ;
        
            $this->assertEquals(session('status'), 'The blog post was created');
         
            // var_dump(session('status'));
    }

    // _________________________________________________________________

    public function test_store_fail() 
    {
        
        $this->actingAs($this->createTestUser());
        
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

    // _________________________________________________________________

    public function test_update_valid() {

        $this->actingAs($this->createTestUser());

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

    // _________________________________________________________________

    public function test_delete() {

        $this->actingAs($this->createTestUser());

        

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

    // _________________________________________________________________

    private function createDummyBlogPost() {

        
        return BlogPost::create([
            'title' => 'Valid title name',
            'content' => 'At least 10 characters',
            'image_url' => 'http://some_random_image',
            'user_id' => Auth::user()->id
        ]);
    }

    private function createDummyComment($content, $blogPost) {

        return Comment::create(['content' => $content, 'blog_post_id' => $blogPost->id]);
        
    }

}


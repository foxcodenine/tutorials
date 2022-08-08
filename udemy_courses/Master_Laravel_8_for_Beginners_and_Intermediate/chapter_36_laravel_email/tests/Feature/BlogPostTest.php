<?php

namespace Tests\Feature;

use App\Models\BlogPost;
use App\Models\Comment;
use App\Models\Image;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
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
        $user = User::create([
            'name' => 'James', 'email' => 'james@gmail.com', 'password' => 'password'
        ]);

        $this->actingAs($user);

        BlogPost::create([
            'title' => 'Some title',
            'content' => 'Some content',
            'user_id' => Auth::user()->id
            // 'image_url' => 'http://some_image'
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
        $myNewPost = BlogPost::factory(['user_id' => auth()->id()])->stateTitle('My New Title')->create();
        Comment::factory()->count(2)->create([
            'commentable_id' => $myNewPost->id,
            'commentable_type' => BlogPost::class,
            'user_id' => $myNewPost->user_id
        ]);

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
            // 'image_url' => ''
        ];

        $this->post('/posts', $params)
            ->assertStatus(302)
            ->assertSessionHas('errors')
            ->assertSessionHasErrors();

        // dd(session('errors')->getMessages()['title'][0]);

        $messages = session('errors')->getMessages();

        $this->assertEquals($messages['title'][0], 'The title must be at least 5 characters.');
        $this->assertEquals($messages['content'][0], 'The content must be at least 10 characters.');
        // $this->assertEquals($messages['image_url'][0], 'The image url format is invalid.');
    }

    // _________________________________________________________________

    public function test_update_valid_with_image() {

        // --- Create a test user and using it
        $testUser =$this->createTestUser();
        $this->actingAs($testUser);
        
        
        //  --- Starting  a BlogPost
        $post = BlogPost::create([
            'title' => 'Valid title name',
            'content' => 'At least 10 characters',
            // 'image_url' => 'http://some_random_image',            
            'user_id' =>  $testUser->id            
        ]);

        $image = Image::factory()->make();
        $post->image()->save($image);

       
        // --- Checking BlogPost and its image in database 
        $array = $post->toArray();

        unset($array['updated_at']);
        unset($array['created_at']);

        $this->assertDatabaseHas('blog_posts', $array);
        $this->assertDatabaseHas('images', [
            'imageable_id' => $post->id, 'imageable_type' => get_class($post),
        ]);


        // --- Updating BlogPost

        $editedParams = [
            'title'     => 'Edit title!!!',
            'content'   => 'Edit content!!!',
        ];

        // $post->fill($editedParams); $post->save();
        $response = $this->put("/posts/{$post->id}", $editedParams);


        // --- Check Status code, session, and flash message

        $response->assertStatus(302)
            ->assertSessionHas('status');

        $this->assertEquals(session('status'), 'Post has been updated');

        // --- Updating Image

        $current_image_path = $image->path;

        $post->image->path = 'http://edit_image';
        $post->image->save();

        

        // --- Checking database

        $this->assertDatabaseHas('images', ['path' => 'http://edit_image']);
        $this->assertDatabaseMissing('images', ['path' => $current_image_path]);

        $this->assertDatabaseHas('blog_posts', ['content' => 'Edit content!!!']);
        $this->assertDatabaseMissing('blog_posts', ['content' => 'At least 10 characters']);

        // --- Checking the edit news page
 

        Cache::tags(['blog-post'])->forget("blog-post-{$post->id}");

        $post = BlogPost::find($post->id);
   
        $this->get("/posts")
            ->assertSeeText('Edit title!!!')
            ->assertSeeText('Edit content!!!')
            ;
            
    }


    // _________________________________________________________________

    public function test_delete() {

    
        $this->actingAs($this->createTestUser());        
            

        // --- 1st we create the  news post and check db

        $post = $this->createDummyBlogPost();
        $this->assertDatabaseCount('blog_posts', 1);

        // --- 2nd we delete the blog post

        $response = $this->delete("/posts/{$post->id}");

  
        // --- Checking the database (updated since using soft delete)
        
        unset($post['updated_at']);
        unset($post['created_at']);

        // $this->assertDatabaseCount('blog_posts', 0);
        // $this->assertDatabaseMissing('blog_posts', $post->toArray());

        
        $this->assertSoftDeleted('blog_posts', $post->toArray()); 


        // --- Check status code and session
        $response->assertStatus(302)
            ->assertSessionHas('status'); 

        // --- Check flush message
        $this->assertEquals(session('status'), 'Blog post was delete');
       
        // --- Check if there is Restore button
        $this->get('/posts')->assertSeeText('Restore');

        // --- Check the blog post page
        $this->post('/logout');
        $this->get('/posts')->assertSeeText('No blog post yet!');
      
    }

    // _________________________________________________________________
  
    private function createDummyBlogPost() {
    
        $new_blog_post =  BlogPost::create([
            'title' => 'Valid title name',
            'content' => 'At least 10 characters',
            // 'image_url' => 'http://some_random_image',  
            'user_id' => Auth::user()->id         
        ]);    

        return $new_blog_post;
    }

    private function createDummyComment($content, $blogPost) {

        return Comment::create([
            'content' => $content, 
            'commentable_id' => $blogPost->id,
            'commentable_type' => BlogPost::class,
            'user_id' => Auth::user()->id 
        ]);
        
    }

}


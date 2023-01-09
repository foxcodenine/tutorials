<?php

namespace Tests\Feature;

use App\Models\Comment;
use App\Models\NewsPost;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

use function PHPUnit\Framework\assertSame;

class NewsTest extends TestCase
{
    use RefreshDatabase;

    // _________________________________________________________________
    
    public function test_no_news_when_nothing_in_db()  {

        $response = $this->get('/news');
        $response->assertSeeText(('No news yet!'));
    }

    // _________________________________________________________________

    public function test_see_1_news_post_when_there_is_1() {

        // --- Arrange
        $news = new NewsPost();
        $news->title = 'New title';
        $news->author = 'New author';
        $news->publishedAt = 'New publishedAt';
        $news->urlToImage = 'New urlToImage';
        $news->content = 'New content';
        $news->save();

        // Act
        $response = $this->get('/news');

        // Assert
        $response->assertSeeText('New title');


        $this->assertDatabaseHas('news_posts', ['title' => 'New title']);
    }

    // _________________________________________________________________

    public function test_news_comments() {

        // ---test for no comments ---------------

        $dummyNews = $this->createDummyNewsPost();

        $response = $this->get('/news');

        $response->assertSeeText('No comment');

        // ---test for 1 comment -----------------


        Comment::factory()->create(['news_post_id' => $dummyNews->id]);

        $response = $this->get('/news');

        $response->assertSeeText('1 comment');

        // ---test for 4 comments ----------------

        Comment::factory()->count(3)->create(['news_post_id' => $dummyNews->id]);

        $response = $this->get('/news');

        $response->assertSeeText('4 comment');

        // ______________________________________
    }

    // _________________________________________________________________


    public function test_store_valid_news() {

        // (Method 1 - using actingAS  - Method 2 in test_store_fail_news )

        $testUser = $this->createUser();
        $this->actingAs($testUser);

        $params = [
            'title'         => 'title min five chr',
            'author'        => 'author min five chr and max 100',
            'publishedAt'   => 'required only',
            'urlToImage'    => 'min 10 characters',
            'content'       => 'min 10 characters',
        ];

        $response = $this->post('/news', $params);
        $response->assertStatus(302)
                 ->assertSessionHas('status');

        $this->assertEquals(session('status'), 'The News post was created!');
    }

    // _________________________________________________________________

    public function test_store_fail_news() {

        // https://laravel.com/api/9.x/Illuminate/Support/ViewErrorBag.html
        // https://laravel.com/api/9.x/Illuminate/Support/MessageBag.html

        $params = [
            'title'         => 'x',
            'author'        => 'x',
            'publishedAt'   => '',
            'urlToImage'    => 'x',
            'content'       => '',
        ];

        
        // --- UPDATED:  
        // $response = $this->post('/news', $params);

        // --- TO: (Method 2 - using actingAS directly)
        $response = $this->actingAS($this->createUser())
                         ->post('/news', $params);


        $response->assertStatus(302)
                 ->assertSessionHas('errors');


        $messages = session('errors');
        
        
        $this->assertEquals($messages->get('title')[0], 'The title must be at least 5 characters.');
        $this->assertEquals($messages->get('urlToImage')[0], 'The url to image must be at least 10 characters.');
        $this->assertEquals($messages->get('content')[0], 'The content field is required.');
        
        // --- ALSO: (reading the docs you can also do the following)

        $messages = session('errors')->getMessages();

        $this->assertEquals($messages['author'][0], 'The author must be at least 5 characters.');
        $this->assertEquals($messages['publishedAt'][0], 'The published at field is required.');

        // dd($messages);
        // dd($messages->getMessages()['title']);
        
    }

    // _________________________________________________________________

    public function test_update_valid_news() {

        // ----- 0 create a test user to test this route

        $testUser = $this->createUser();
        $this->actingAs($testUser);

        // ----- 1st we create the  news post

        $newsPost = $this->createDummyNewsPost();  

        // -- checking the created news page
        $response = $this->get("/news/{$newsPost->id}");
        $response->assertSeeText('New title');

        // -- checkinh the create news is in db;
        $array = $newsPost->toArray();
        unset($array['updated_at']);
        unset($array['created_at']);

        $this->assertDatabaseHas('news_posts', $array);



        // ----- 2nd we edite the news post

        // $newsPost->title = 'Edit title';  
        // $newsPost->save();  

        $editedParams = [
            'title'         => 'Edit title',
            'author'        => 'Edit author',
            'publishedAt'   => 'Edit publishedAt',
            'urlToImage'    => 'Edit urlToImage',
            'content'       => 'Edit content',
        ];

        $response = $this->put("/news/{$newsPost->id}", $editedParams);

        // --- Check Status code, session, and flash message
        $response->assertStatus(302)
                 ->assertSessionHas('status');

        $this->assertEquals(session('status'), 'News was updated!');

        // --- Check the edit news page
        $this->get("/news/{$newsPost->id}")->assertSeeText('Edit publishedAt');

        // --- Check_db_for_edit_params
        $this->assertDatabaseHas('news_posts', $editedParams);
        $this->assertDatabaseMissing('news_posts', ['title' => 'New title']);
    }

    // _________________________________________________________________

    public function test_delete_news_post() {

        // ----- 0 create a test user to test this route

        $testUser = $this->createUser();
        $this->actingAs($testUser);

        // ----- 1st we create the  news post
        $newsPost = $this->createDummyNewsPost(); 

        // ----- 2nd we delete the bews post
        $response = $this->delete("/news/{$newsPost->id}");

        // ----- Finally we do the assertions

        // --- Check status code and session
        $response->assertStatus(302)->assertSessionHas('status');

        // --- Check flush message
        $this->assertEquals(session('status'), 'News was deleted!!');

        // --- Check db
        // $this->assertDatabaseMissing('news_posts', ['title' => 'New title', 'author' => 'New author']);
        $this->assertSoftDeleted('news_posts', ['title' => 'New title', 'author' => 'New author']);

        // --- Check news page
        $this->get('/news')->assertSeeText('No news yet!');

    }

    // _________________________________________________________________

    private function createDummyNewsPost(): NewsPost {

        $newsPost = NewsPost::make([
            'title'         => 'New title',
            'author'        => 'New author',
            'publishedAt'   => 'New publishedAt',
            'urlToImage'    => 'New urlToImage',
            'content'       => 'New content',
        ]);

        $newsPost->save();  
        return $newsPost;
    }
    
}




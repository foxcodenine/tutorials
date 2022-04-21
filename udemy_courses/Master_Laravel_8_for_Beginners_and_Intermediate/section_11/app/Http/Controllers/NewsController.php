<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NewsController extends Controller {

    private $news = [
        1 => [
            "author" => "Andrew Raine, CNN",
            "title"  => "Russia invades Ukraine: Live updates",
            "urlToImage" => "https://cdn.cnn.com/cnnnext/dam/assets/220420195929-mariupol-azovstal-plant-0420-super-tease.jpg",
            "publishedAt" => "2022-04-21T06:20:00Z",
            "content" => 'Maksym Zhorin, co-commander of Ukraine\'s Azov regiment, said in televised remarks that Russian forces "have not stopped shelling areas of Mariupol" amid negotiations on so-called "green corridors" for evacuation from the city, limiting the number of people who can be evacuated. '
        ],
        2 => [
            "author" => "Kelly Gilmore",
            "title"  => "Scott Disick Seemingly Reacts to Ex Sofia Richie's Engagement",
            "urlToImage" => "https://akns-images.eonline.com/eol_images/Entire_Site/20201111/rs_1200x1200-201211103540-1200-Scott_Disick_and_Sofia_Richie-gj.jpg?fit=around%7C1080:566&output-quality=90&crop=1080:566;center,top",
            "publishedAt" => "2022-04-21T06:05:43Z",
            "content" => 'Scott shared a photo of himself on a boat with the caption, "In the 305 just call me good luck chuck." The cheeky message seems to make reference at the movie Good Luck Chuck, a film in which all the women who get romantically involved with the character Charlie Kagan (played by Dane Cook) end up marrying the first person they date after Charlie.'

        ],
        3 => [
            "author" => "Jen Christensen",
            "title"  => "Bulls vs. Bucks - Game Recap",
            "urlToImage" => "https://s.espncdn.com/stitcher/sports/basketball/nba/events/401430246.png?templateId=espn.com.share.1",
            "publishedAt" => "2022-04-21T04:44:35Z",
            "content" => '“No matter what you did in the regular season, this is a brand new start and new mindset," DeRozan said. "You could see it in all the guys. It doesn\'t matter if we\'d lost 20 times to those guys. This is an opportunity for us to compete. We\'ve got to take advantage of it.”'

        ],
    ];


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() {
        return view('news.index', ['news' => $this->news]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id) {
        
        abort_if(!isset($this->news[$id]), 404);

        return view('news.show', ['news' => $this->news[$id]]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}

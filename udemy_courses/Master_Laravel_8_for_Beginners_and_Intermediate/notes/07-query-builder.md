### Methods


    $user = DB::table('users')->where('name', 'John')->first();
    
    return $user->email;




###  Inserting to DB

    use Illuminate\Support\Facades\DB;

    DB::table('blog_posts')->insert([
        'title' => 'Christian Eriksen: Manchester United sign former Tottenham midfielder on three-year deal',
        'content' => $this->faker->sentence(50),
        'image_url' => 'https://e0.365dm.com/22/07/2048x1152/skysports-christian-eriksen_5835358.jpg?20220715144705',
        'user_id' => User::where('email', 'chris12aug@yahoo.com')->first()->id,
        'created_at' => now()
    ]);



    
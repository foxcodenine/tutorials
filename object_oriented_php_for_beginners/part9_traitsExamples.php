<?php
include './my_print_functions.php';

ppp('A'); // ___________________________________________________________

trait SharableTrade {
    public function share() {
        return self::class . ' share id:' . $this->id;
        
    }
    public function __construct() {
        echo '<br> Create instance of ' . self::class . '!<br>'; 
    }
}


// _____________________________________________________________________

class Post {
    public $id = 11;

    use SharableTrade;
}

class Image {
    public $id = 111;

    use SharableTrade;
}

class Comment {
    public $id = 1111;

    use SharableTrade;
}
// _____________________________________________________________________

class User {

    public $id = 1;
    public $post;
    public $image;
    public $comment;
    
    use SharableTrade {
        SharableTrade::__construct as sharable_trade_constractor;
    }

    public function __construct($post, $image, $comment)
    {
        $this->sharable_trade_constractor();
        $this->post = $post;
        $this->image = $image;
        $this->comment = $comment;
    }
}

$chris_post    = new Post();
$chris_image   = new Image();
$chris_comment = new comment();

$chris = new User($chris_post, $chris_image, $chris_comment);

                                                                  

ppp('B'); // ___________________________________________________________


echo $chris->share();                                                   qqq();
echo $chris->post->share();                                             qqq();
echo $chris->image->share();                                            qqq();
echo $chris->comment->share();                                          qqq();

echo get_class($chris);                                                 qqq();
echo $chris::class;


ppp('C'); // ___________________________________________________________
?>
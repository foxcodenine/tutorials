<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        
        <link rel="stylesheet" href="css/style.css">
        <link rel="shortcut icon" type="image/png" href="img/favicon.png">
        
        <title>nexter &mdash; your home, your freedom</title>
    </head>
    <body class="container">

        <!-- ------------------------------------------------------- -->

        <div class="sidebar">
            Sidebar
        </div>

        <!-- ------------------------------------------------------- -->

        <Header class="header">
            Header
        </Header>

        <!-- ------------------------------------------------------- -->

        <div class="realtors">
            Top 3 realtors
        </div>

        <!-- ------------------------------------------------------- -->

        <div class="features">
            <div class="feature">
                <svg class="feature__icon">
                    <use xlink:href="./img/sprite.svg#icon-global"></use>
                </svg>
                <h4 class="heading-4 heading-4--dark">World's best luxury homes</h4>
                <p class="feature__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur distinctio necessitatibus pariatur voluptatibus.</p>
            </div>
            <div class="feature">
                <svg class="feature__icon">
                    <use xlink:href="./img/sprite.svg#icon-trophy"></use>
                </svg>
                <h4 class="heading-4 heading-4--dark">Only the best properties</h4>
                <p class="feature__text">Voluptatum mollitia quae. Vero ipsum sapiente molestias
                accusamus rerum sed a eligendi aut quia.</p>
            </div>
            <div class="feature">
                <svg class="feature__icon">
                    <use xlink:href="./img/sprite.svg#icon-map-pin"></use>
                </svg>
                <h4 class="heading-4 heading-4--dark">All homes in top locations</h4>
                <p class="feature__text">Tenetur distinctio necessitatibus pariatur voluptatibus
                quidem consequatur harum.</p>
            </div>
            <div class="feature">
                <svg class="feature__icon">
                    <use xlink:href="./img/sprite.svg#icon-key"></use>
                </svg>
                <h4 class="heading-4 heading-4--dark">New home in one week</h4>
                <p class="feature__text">Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum
                dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="feature">
                <svg class="feature__icon">
                    <use xlink:href="./img/sprite.svg#icon-presentation"></use>
                </svg>
                <h4 class="heading-4 heading-4--dark">Top 1% realtors </h4>
                <p class="feature__text">Quidem consequatur harum, voluptatum mollitia quae. Tenetur
                distinctio necessitatibus pariatur voluptatibus.</p>
            </div>
            <div class="feature">
                <svg class="feature__icon">
                    <use xlink:href="./img/sprite.svg#icon-lock"></use>
                </svg>
                <h4 class="heading-4 heading-4--dark">Secure payments on nexter</h4>
                <p class="feature__text">Pariatur voluptatibus quidem consequatur harum, voluptatum
                mollitia quae.</p>
            </div>

        </div>

        <!-- ------------------------------------------------------- -->

        <div class="story__pictures">
            <img src="img/story-1.jpeg" alt="Couple with new house" class="story__img--1">
            <img src="img/story-2.jpeg" alt="Couple with new house" class="story__img--2">
        </div>

        <div class="story__content">
            
            <h3 class="heading-3 mb-sm">Happy Customers</h3>
            <h2 class="heading-2 heading-2-light mb-md">&ldquo;The best decision of our lives&rdquo;</h2>
            <p class="story__text mb-lg">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur distinctio necessitatibus pariatur voluptatibus. Quidem
                consequatur harum volupta!
            </p>
            <button class="btn">Find your own home</button>
        </div>

        <!-- ------------------------------------------------------- -->

        <section class="homes">

            <?php
            for($i = 0; $i <= 5 ; $i++) {

            $homes_names = [
                'Beautifull Familiy House',     'Modern Glass Villa',
                'Cozy Country House',           'Large Rustical Villa',
                'Majestic Palace House',        'Modern Familiy Apartment'
            ];

            $homes_locations = ['USA', 'Canada', 'UK', 'Portugal', 'Germany', 'Italy'];

            $homes_areas    = ['325', '450', '250', '480', '4230', '180'];

            $homes_prices  = ['1,200,000', '2,750,000', '850,000', '1,950,000', '9,500,000', '600,000'];

            $homes_rooms   = ['5', '6', '4', '6', '18', '3'];

            $home_img_src = './img/house-' . $i + 1 .'.jpeg';
            $home_img_alt = 'House ' . $i + 1;
            $home_name      = $homes_names[$i];
            $home_location  = $homes_locations[$i];
            $home_price     = $homes_prices[$i];
            $home_area      = $homes_areas[$i];
            $home_rooms     = $homes_rooms[$i];





            $home = <<<HOMEEND
            <div class="home">
                <img src="{$home_img_src}" alt="{$home_img_alt}" class="home__img">
                <svg class="home__like">
                    <use xlink:href="./img/sprite.svg#icon-heart-full"></use>
                </svg>
                <h5 class="home__name">{$home_name}</h5>
                <div class="home__location">
                    <svg>
                        <use xlink:href="./img/sprite.svg#icon-map-pin"></use>
                    </svg>
                    <p>{$home_location}</p>
                </div>
                <div class="home__rooms">
                    <svg>
                        <use xlink:href="./img/sprite.svg#icon-profile-male"></use>
                    </svg>
                    <p>{$home_rooms} rooms</p>
                </div>
                <div class="home__area">
                    <svg>
                        <use xlink:href="./img/sprite.svg#icon-expand"></use>
                    </svg>
                    <p>{$home_area} m <sup>2</sup></p>
                </div>
                <div class="home__price">
                    <svg>
                        <use xlink:href="./img/sprite.svg#icon-key"></use>
                    </svg>
                    <p>\${$home_price}</p>
                </div>
                <button class="btn home__btn">Contact realtor</button>
            </div>
            HOMEEND;  

                echo $home;
            }

            ?>



        </section>

        <!-- ------------------------------------------------------- -->

        <section class="gallery">
            Gallery
        </section>

        <!-- ------------------------------------------------------- -->

        <footer class="footer">
            Footer
        </footer>

        <!-- ------------------------------------------------------- -->

        <div class="empty"></div>

    </body>
</html>
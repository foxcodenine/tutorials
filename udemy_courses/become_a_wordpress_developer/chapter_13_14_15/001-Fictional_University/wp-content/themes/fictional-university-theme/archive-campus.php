<!-- This is the generic blog listing screen template. -->

<?php
get_header();
pageBanner([
    'title' => 'Our Campuses',
    'subtitle' => 'We have several conveniently location campuses.',
]); 
?>


<div class="container container--narrow page-section" style="width: 100%;">

    <!-- map start (This is the google maps map element) -------------->
    <div class="acf-map"> 
        <?php while(have_posts()):  ?>
            
            <?php the_post();
                $mapLocation = get_field('map_location');  
                $latitude = $mapLocation['lat']; 
                $longitude = $mapLocation['lng'];
                $address = $mapLocation['address'];
                $address = $mapLocation['address'];
            ?>

            <!-- marker start (These are the google maps marker el) --->
            <div class="marker" data-lat="<?= $latitude; ?>" data-lng="<?= $longitude; ?>">

                <h3><a href="<?= get_the_permalink()?>"><?= get_the_title() ?></a></h3>
                <p><?= $address ?></p>
                
            </div>
            <!-- marker end ------------------------------------------->
            
        <?php endwhile; wp_reset_postdata(); ?>
    </div>
    <!-- map end ------------------------------------------------------>







</div>

<?php
get_footer();
?>
<!-- This is the generic blog listing screen template. -->

<?php 
get_header(); 
pageBanner([
    'title' => 'All Events',
    'subtitle' => 'See what is going on in our world',
    'bannerUrl' => 'https://onsitemalta.com/wp-content/uploads/2013/12/Event-5.jpg'
]); ?>

<!-- <div class="page-banner">
    <div class="page-banner__bg-image" style="background-image: url(<?= get_theme_file_uri('/images/ocean.jpg'); ?>)"></div>
    <div class="page-banner__content container container--narrow">
        <h1 class="page-banner__title">All Events</h1>
        <div class="page-banner__intro">
            <p>See what is going on in our world</p>
        </div>
    </div>
</div> -->

<div class="container container--narrow page-section">
    <?php while(have_posts()): the_post(); ?>
        <?php get_template_part('template-parts/content', 'event')?>        
    <?php endwhile; wp_reset_postdata(); ?>
    
    <?= paginate_links(); ?>

    <hr class="section-break">
    
    <p>Looking for a recap of the past events? <a href="<?= site_url('/past-events') ?>">Check out our past events archive.</a></p>


</div>

<?php
get_footer();
?>
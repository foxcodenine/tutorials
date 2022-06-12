<!-- This is the generic blog listing screen template. -->

<?php
get_header();
pageBanner([
    'title' => 'Past Events',
    'subtitle' => 'A recap of our past events.',
    'bannerUrl' => 'https://onsitemalta.com/wp-content/uploads/2013/12/Event-5.jpg'
]); 
?>


<div class="container container--narrow page-section">
    <?php 
        $today = date('Ymd');
        $pastEvents = new WP_Query([
            'paged' => get_query_var('paged', 1),
            'posts_per_page' => 10 ,             
            'post_type' => 'event',
            'orderby'  => 'meta_value_num',
            'meta_key' => 'event_date',
            'order' => 'ASC',
            'meta_query' => [
                ['key' => 'event_date', 'compare' => '<', 'value' => $today, 'type' => 'numeric']
            ]

        ]); 
    ?>
    <?php while($pastEvents->have_posts()): $pastEvents->the_post(); ?>
        <?php get_template_part('template-parts/content', 'event')?>        
    <?php endwhile; wp_reset_postdata(); ?>

    <?= paginate_links([
        'total' => $pastEvents->max_num_pages
    ]);?>

    

</div>

<?php
get_footer();
?>
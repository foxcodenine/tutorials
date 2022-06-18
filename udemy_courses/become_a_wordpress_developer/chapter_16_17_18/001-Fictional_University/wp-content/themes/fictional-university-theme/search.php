<!-- This is the generic blog listing screen template. -->

<?php
get_header();
pageBanner([
    'title' => 'Search Results',
    'subtitle' => 'You search for &ldquo;' . esc_html(get_search_query()) . '&rdquo;',
]); 

// echo get_post_type();
?>


<div class="container container--narrow page-section page-section-chris">
    <?php if(have_posts()): ?>   

        <?php while(have_posts()): the_post(); ?>
        
            <?php get_template_part('template-parts/content', get_post_type())?>
        
        <?php endwhile; wp_reset_postdata();  ?>
        <?= paginate_links(); ?>

    <?php else: ?>

        <h2 class="headline headline--small-plus">No result match that search.</h2>
        
        <?php // add_filter( 'get_search_form', 'extra_search_form' );?>
        <?php get_search_form('exta_search_form'); ?>

    <?php endif ?>
</div>

<?php
get_footer();
?>¬
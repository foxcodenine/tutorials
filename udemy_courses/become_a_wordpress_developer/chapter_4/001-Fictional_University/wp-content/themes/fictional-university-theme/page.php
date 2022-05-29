<?php get_header();   while(have_posts()): ?>

    <?php the_post();?>

    <h1>This is a Page not a post</h1>
    <h2><?= the_title();?> </h2>

    <?= the_content();?>

<?php   endwhile; get_footer(); ?>
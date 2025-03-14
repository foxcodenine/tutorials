<!-- This is the generic blog listing screen template. -->

<?php
get_header();
?>

<div class="page-banner">
    <div class="page-banner__bg-image" style="background-image: url(<?= get_theme_file_uri('/images/ocean.jpg'); ?>)"></div>
    <div class="page-banner__content container container--narrow">
        <h1 class="page-banner__title">All Programs</h1>
        <div class="page-banner__intro">
            <p>There is something for everyone. Have a look arround.</p>
        </div>
    </div>
</div>

<div class="container container--narrow page-section" style="width: 100%;">

    <ul class="link-list min-list">
    <?php while(have_posts()): the_post(); ?>

        <li><a href="<?= get_the_permalink()?>"><?= get_the_title(); ?></a></li>
        
    <?php endwhile; wp_reset_postdata(); ?>
    </ul>

</div>

<?php
get_footer();
?>
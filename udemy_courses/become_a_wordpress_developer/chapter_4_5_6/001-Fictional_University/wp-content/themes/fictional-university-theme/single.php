<?php get_header(); while(have_posts()): ?>

    <?php the_post();?>

    <div class="page-banner">
      <div class="page-banner__bg-image" style="background-image: url(<?= get_theme_file_uri('/images/ocean.jpg'); ?>)"></div>
      <div class="page-banner__content container container--narrow">
        <h1 class="page-banner__title"><?php the_title(); ?></h1>
        <div class="page-banner__intro">
          <p>DONT FORGOET TO REPLCE ME LATER</p>
        </div>
      </div>
    </div>

    <div class="container container--narrow page-section"> 
        <div class="metabox metabox--position-up metabox--with-home-link">
            <p>        
                <a class="metabox__blog-home-link" href="<?= site_url('/blog') ?>">
                    <i class="fa fa-home" aria-hidden="true"></i> Blog Home
                </a>					
                <span class="metabox__main">
                    Posted by <?= get_the_author_posts_link() ?> 
                    on <?= get_the_time('j/n/Y') ?> 
                    in <?= get_the_category_list(', ') ?>
                </span>
            </p>
        </div>
        <div class="generic-content"><?php the_content() ?></div>
    </div>

<?php endwhile; get_footer();  ?>
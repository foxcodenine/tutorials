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
            <a class="metabox__blog-home-link" href="<?= get_post_type_archive_link('event'); ?>">
                <i class="fa fa-home" aria-hidden="true"></i> Events Home
            </a>					
            <span class="metabox__main"><?= get_the_title(); ?></span>
        </p>
    </div>

    <div class="generic-content"><?php the_content() ?></div>

	<hr class="section-break">
	
	<?php if($relPrograms = get_field('related_programs')): ?>
		<h2 class="headline headline--medium">
      Related <?= count($relPrograms) > 1 ? 'Programs' : 'Program' ?>
    </h2>
		
		<ul class="link-list min-list">
			<?php foreach($relPrograms as $program):  ?>
				<li><a href="<?= get_the_permalink($program) ?>"><?= get_the_title($program); ?></a></li>
			<?php endforeach; ?>
		</ul>		
	<?php endif; ?>
	
</div>

<?php endwhile; wp_reset_postdata(); get_footer();  ?>
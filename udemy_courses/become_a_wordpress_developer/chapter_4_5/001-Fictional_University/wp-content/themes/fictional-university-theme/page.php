<?php get_header();   while(have_posts()): ?>

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

		<?php $theParentId = wp_get_post_parent_id( get_the_ID()) ?>
		<?php if ($theParentId !== 0):?>
      <div class="metabox metabox--position-up metabox--with-home-link">
        <p>        
					<a class="metabox__blog-home-link" href="<?= get_permalink($theParentId) ?>">
						<i class="fa fa-home" aria-hidden="true"></i><?= get_the_title($theParentId)?>
					</a>					
					<span class="metabox__main"><?= the_title(); ?></span>
        </p>
      </div>
		<?php endif ?>

      
		<?php $isAParent = (bool) get_pages(['child_of' => get_the_id()]) ?>
		<?php if( $theParentId || $isAParent): ?>
			<div class="page-links">
					<?php 
						// if it is a parent return its id, and if it is a child return its parents id
						$theId = $theParentId ?: get_the_ID();
					?>
        <h2 class="page-links__title"><a href="<?= get_permalink($theId) ?>"><?= get_the_title($theId); ?></a></h2>

        <ul class="min-list">

						<?php 
						wp_list_pages( [
							'title_li' => NULL, 
							'child_of' => $theId, 
							'sort_column' => 'menu_order'
						] );						
						?>

        </ul>

      </div> 
		<?php endif ?>
			

      <div class="generic-content">
				<?php the_content(); ?>
    	</div>

    </div>


<?php   endwhile; get_footer(); ?>
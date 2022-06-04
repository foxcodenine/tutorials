<?php get_header();   while(have_posts()): ?>

    <?php 
		the_post();
		pageBanner(['title' => false, 'subtitle' => false, 'bannerUrl' => false]);
	?>

    <div class="container container--narrow page-section">

		<?php $theParentId = wp_get_post_parent_id( get_the_ID()) ?>

		<!-- Metabox start -------------------------------------------->
		<?php if ($theParentId !== 0):?>
		<div class="metabox metabox--position-up metabox--with-home-link">
			<p>        
				<a class="metabox__blog-home-link" href="<?= get_permalink($theParentId) ?>">
					<i class="fa fa-home" aria-hidden="true"></i> Back to <?= get_the_title($theParentId)?>
				</a>					
				<span class="metabox__main"><?= the_title(); ?></span>
			</p>
		</div>
		<?php endif ?>
		<!-- Metabox End ---------------------------------------------->

		<!-- Side Menu start ------------------------------------------>
		<?php 
			$isAParent = (bool) get_pages(['child_of' => get_the_id()]);
			$isAChild =  (bool) $theParentId > 0;
		?>
		
		<?php if( $isAChild  || $isAParent): ?>
		<div class="page-links">
			<?php 
				// if 
				//	it is a child return its parents id (which is alread set) 
				//	and if it is a parent return its id
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
		<!-- Side Menu End -------------------------------------------->
			
		<!-- Content Start -------------------------------------------->
      	<div class="generic-content">
				<?php the_content(); ?>
    	</div>
		<!-- Content End ---------------------------------------------->

    </div>


<?php   endwhile; wp_reset_postdata(); get_footer(); ?>
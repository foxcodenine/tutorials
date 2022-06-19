<?php get_header(); while(have_posts()): ?>

<?php 
	the_post();
	pageBanner();
?>


<div class="container container--narrow page-section"> 

  <!-- Metabox start -------------------------------------------------->
    <div class="metabox metabox--position-up metabox--with-home-link">
        <p>        
            <a class="metabox__blog-home-link" href="<?= get_post_type_archive_link('campus'); ?>">
                <i class="fa fa-home" aria-hidden="true"></i> All Campuses
            </a>					
            <span class="metabox__main"><?= get_the_title(); ?></span>
        </p>
    </div>
    
  <!-- Metabox end ---------------------------------------------------->

  <div class="generic-content"><?php the_content() ?></div>

  <!-- Map start (This is the google maps map element) ---------------->
    <div class="acf-map">        
            
		<?php
			$mapLocation = get_field('map_location');  
			$latitude = $mapLocation['lat']; 
			$longitude = $mapLocation['lng'];
			$address = $mapLocation['address'];
			$address = $mapLocation['address'];
		?>

		<!-- Google maps marker start  -->
		<div class="marker" data-lat="<?= $latitude; ?>" data-lng="<?= $longitude; ?>">
			<h3><?= get_the_title() ?></h3>
			<p><?= $address ?></p>          
		</div>
		<!-- Google maps marker end ----->   

    </div>
  <!-- Map end -------------------------------------------------------->

  <!-- Programs start ------------------------------------------------->
  	<?php
		$campus = get_the_ID();    
		$relatedProgram = new WP_Query([		
		'posts_per_page' =>  -1, 
		'post_type' => 'program',
		'orderby'  => 'title',
		'order' => 'ASC',
		'meta_query' => [
			['key' => 'related_campus', 'compare' => 'LIKE', 'value' => "\"{$campus}\""],
		]
		]);
	?>
  
	<?php if (($relatedProgram->have_posts())):?>

		<hr class="section-break">
		<h2 class="headline headline--medium" >
			Programs Available At This Campus
		</h2>

		<ul class="min-list link-list">
		<?php while ($relatedProgram->have_posts()): $relatedProgram->the_post();   ?>
			<li >
				<a href="<?= get_the_permalink() ?>">
					<?= get_the_title(); ?>			
				</a>
			</li>
		<?php endwhile; wp_reset_postdata(); ?>
		</ul>

	<?php endif; ?>
  <!-- Programs end --------------------------------------------------->


</div>
<?php endwhile; wp_reset_postdata();  ?>

<?php get_footer();  ?>
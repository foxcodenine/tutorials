<?php get_header(); while(have_posts()): ?>

  <?php the_post();?>
  <?= pageBanner();?>

  <div class="container container--narrow page-section"> 

      <div class="generic-content">
          <div class="row group">
              <div class="one-third"><?php the_post_thumbnail('professorPortrait');?> </div>
              <div class="two-third"><?php the_content();?> </div>
          </div>         
      </div>

    <hr class="section-break">

    <!-- Subject Taught Start ----------------------------------------->
    <?php if($relPrograms = get_field('related_programs')): ?>
      <h2 class="headline headline--medium">
              <?= count($relPrograms) > 1 ? 'Subjects' : 'Subject' ?> Taught
          </h2>
      
      <ul class="link-list min-list">
        <?php foreach($relPrograms as $program):  ?>
          <li><a href="<?= get_the_permalink($program) ?>"><?= get_the_title($program); ?></a></li>
        <?php endforeach; ?>
      </ul>		
    <?php endif; ?>
      <!-- Subject Taught End ------------------------------------------->
    
  </div>

<?php endwhile; wp_reset_postdata(); get_footer();  ?>
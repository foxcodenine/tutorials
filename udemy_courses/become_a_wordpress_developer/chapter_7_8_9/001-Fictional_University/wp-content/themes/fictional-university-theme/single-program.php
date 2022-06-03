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
            <a class="metabox__blog-home-link" href="<?= get_post_type_archive_link('program'); ?>">
                <i class="fa fa-home" aria-hidden="true"></i> All Programs
            </a>					
            <span class="metabox__main"><?= get_the_title(); ?></span>
        </p>
    </div>
    <div class="generic-content"><?php the_content() ?></div>

  <!-- Upcomming Events start ----------------------------------------->
  <?php
    $currentProgramID = get_the_ID();    
    $relatedEvents = new WP_Query([		
      'posts_per_page' =>  -1, 
      'post_type' => 'event',
      'orderby'  => 'meta_value_num',
      'meta_key' => 'event_date',
      'order' => 'ASC',
      'meta_query' => [
        ['key' => 'event_date', 'compare' => '>=', 'value' => $today, 'type' => 'numeric'],
        ['key' => 'related_programs', 'compare' => 'LIKE', 'value' => "\"{$currentProgramID}\""],
      ]
    ]);
  ?>
  
  <?php if (($relatedEvents->have_posts())):?>

  <hr class="section-break">
  <h2 class="headline headline--medium" >Upcoming <?= get_the_title()?> Events</h2>

  <?php   while ($relatedEvents->have_posts()): $relatedEvents->the_post();   ?>
  <div class="event-summary">
      <a class="event-summary__date t-center" href="<?= get_the_permalink(); ?>">
          <?php $eventDate = new DateTime(get_field('event_date'))?>
          <span class="event-summary__month"><?= $eventDate->format('M')?></span>
          <span class="event-summary__day"><?= $eventDate->format('d')?></span>
      </a>
      <div class="event-summary__content">
          <h5 class="event-summary__title headline headline--tiny">
              <a href="<?= get_the_permalink(); ?>"><?= get_the_title(); ?></a>
          </h5>
          <p>
              <?= wp_trim_words(get_the_content(), 18); ?> 
              <a href="<?= get_the_permalink(); ?>" class="nu gray">Learn more</a>
          </p>
      </div>
  </div>
  <?php endwhile; wp_reset_postdata(); ?>
  <?php endif; ?>
  <!-- Upcomming Events end ------------------------------------------->

</div>
<?php endwhile; wp_reset_postdata();  ?>

<?php get_footer();  ?>
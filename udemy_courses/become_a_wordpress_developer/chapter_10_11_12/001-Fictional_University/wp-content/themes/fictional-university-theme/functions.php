<?php

function pageBanner($args=null) {
    // (use) pageBanner(['title' => false, 'subtitle' => false, 'bannerUrl' => false])

    // $pageBannerImageUrl = get_field('page_banner_background_image')['url'];
    $pageBannerImageUrl = get_field('page_banner_background_image')['sizes']['pageBanner'];
    $pageBannerImageUrl	= $pageBannerImageUrl ?: get_theme_file_uri('/images/ocean.jpg');
    $pageBannerImageUrl	= $args['bannerUrl']  ?: $pageBannerImageUrl;
    $title    = $args['title']    ?: get_the_title();
    $subtitle = $args['subtitle'] ?: get_field('page_banner_subtitle');

    $makeup = <<< MARKUP_ENDS
    <div class="page-banner">
        <div class="page-banner__bg-image" style="background-image: url($pageBannerImageUrl)"></div>
        <div class="page-banner__content container container--narrow">
            <h1 class="page-banner__title">$title</h1>
            <div class="page-banner__intro">
            <p>$subtitle</p>
            </div>
        </div>
    </div>
    MARKUP_ENDS;
    return $makeup;
}

function university_files() {
    // wp_enqueue_style('university_main_styles', get_stylesheet_uri());
    wp_enqueue_script('main-university-js', get_theme_file_uri('/build/index.js'), array('jquery'), '1.0', true);
    
    wp_enqueue_style('custom-google-fonts', 'https://fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i|Roboto:100,300,400,400i,700,700i');
    wp_enqueue_style('font-awesome', 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
    wp_enqueue_style('university_main_styles', get_theme_file_uri('/build/style-index.css'));
    wp_enqueue_style('university_extra_styles', get_theme_file_uri('/build/index.css'));
}


add_action('wp_enqueue_scripts', 'university_files');

// _____________________________________________________________________

function university_features() {
    register_nav_menu('headerMenuLocation', 'Header Menu Location');
    register_nav_menu('footerLocationOne', 'Footer Location 1');
    register_nav_menu('footerLocationTwo', 'Footer Location 2');

    add_theme_support('title-tag');         // <- video 15  
    add_theme_support('post-thumbnails');   // <- video 41  

    add_image_size('professorLandscape', 400, 260, true);
    add_image_size('professorPortrait', 480, 650, true);
    // add_image_size('professorPortrait', 480, 650, ['center', 'top']); // <- use plugin insted video 42

    add_image_size('pageBanner', 1500, 350, true);
}

add_action('after_setup_theme', 'university_features');


// _____________________________________________________________________


function university_adjust_queries ($query) {
    // $query->set('posts_per_page', '1');

    if (!is_admin() && is_post_type_archive('event') && $query->is_main_query()) {
        $query->set( 'meta_key', 'event_date' );
        $query->set( 'orderby', 'meta_value_num' );
        $query->set( 'order', 'ASC' );
        $today = date('Ymd');
        $query->set( 'meta_query', ['key' => 'event_date', 'compare' => '>=', 'value' => $today, 'type' => 'numeric'] );
    }
    if (!is_admin() && is_post_type_archive('program') && $query->is_main_query()) {
        $query->set('posts_per_page', '-1');
        $query->set( 'orderby', 'title' );
        $query->set( 'order', 'ASC' );
    }
    
}

add_action('pre_get_posts', 'university_adjust_queries');
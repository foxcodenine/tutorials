<?php
error_reporting($_ENV['error_reporting']);
require get_theme_file_path('/inc/search-route.php');

// _____________________________________________________________________

function pageBanner($args=null) {
    // (use) pageBanner(['title' => false, 'subtitle' => false, 'bannerUrl' => false])

    // $pageBannerImageUrl = get_field('page_banner_background_image')['url'];
    $pageBannerImageUrl = get_field('page_banner_background_image')['sizes']['pageBanner'] ?? false;
    $pageBannerImageUrl	= $pageBannerImageUrl ?: get_theme_file_uri('/images/ocean.jpg');
    $pageBannerImageUrl	= $args['bannerUrl']  ?? $pageBannerImageUrl;

    $title    = $args['title'] ?? false;
    $subtitle = $args['subtitle'] ?? false;    
    
    $title    = $title ?: get_the_title();
    $subtitle = $subtitle ?: get_field('page_banner_subtitle');

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
    echo $makeup;
}




// _____________________________________________________________________


function university_files() {
    // --- loading google maps js script
    $url = "//maps.googleapis.com/maps/api/js?key=" . $_ENV['GOOGLE_MAPS_API_KEY'];
    wp_enqueue_script('googleMap', $url, NULL, '1.0', true);
    
    // --- loading our js
    wp_enqueue_script('main-university-js', get_theme_file_uri('/build/index.js'), array('jquery'), '1.0', true);
    wp_localize_script('main-university-js', 'WPVars', [
        'baseURL'=> get_bloginfo('url'), 
        'nonce' => wp_create_nonce('wp_rest')
    ]);
    
    // --- loading our css styles
    wp_enqueue_style('custom-google-fonts', 'https://fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i|Roboto:100,300,400,400i,700,700i');
    wp_enqueue_style('font-awesome', 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
    // wp_enqueue_style('university_main_styles', get_stylesheet_uri());
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
    // https://developer.wordpress.org/reference/classes/wp_query/
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

    if (!is_admin() && is_post_type_archive('campus') && $query->is_main_query()) {
        $query->set('posts_per_page', '-1');
    }
   
}

add_action('pre_get_posts', 'university_adjust_queries');

// _____________________________________________________________________

function university_custom_rest () {

    register_rest_field('post', 'authorName', [
        'get_callback'  =>  function() { return get_the_author(); }
    ]);    
}

add_action('rest_api_init', 'university_custom_rest');

// _____________________________________________________________________

function redirectSubsToFrontend () {
    $ourCurrentUser = wp_get_current_user();
    if( count($ourCurrentUser->roles) == 1 && $ourCurrentUser->roles[0] === 'subscriber') {
        wp_redirect(site_url('/'));
        exit();
    }
}

add_action('admin_init', 'redirectSubsToFrontend');

// _____________________________________________________________________

function noAdminBar () {
    $ourCurrentUser = wp_get_current_user();
    if( count($ourCurrentUser->roles) == 1 && $ourCurrentUser->roles[0] === 'subscriber') {
        show_admin_bar(false);
    }
}

add_action('wp_loaded', 'noAdminBar');

// _____________________________________________________________________
// _____________________________________________________________________

function universityMayKey( $api ){
        
    $api['key'] = $_ENV['GOOGLE_MAPS_API_KEY'];    
    return $api;    
}

add_filter('acf/fields/google_map/api', 'universityMayKey');

// _____________________________________________________________________

function extra_search_form() {

    $form = <<< end_form
    <form id="search-form2" class="search-form" method="get" action="<?= esc_url(site_url('/')) ?>">
        <label class="headline headline--medium" for="s">This is the extra search form</label>
        <div class="search-form-row">
            <input class="s" type="search" name="s" id="s" placeholder="What are you looking for?">
            <input class="search-submit" type="submit" value="Search">
        </div>
    </form>
    end_form;
    return $form;
}

add_filter('get_search_form', 'extra_search_form');
remove_filter( 'get_search_form', 'extra_search_form' );


// _____________________________________________________________________
// _____________________________________________________________________
// --- Customize Login Screen

// Change the logo url
function ourHeaderUrl( $api ){
    return esc_url(site_url('/'));        
}

add_filter('login_headerurl', 'ourHeaderUrl');


// Change the loging page css
function ourLoginCss() {
    wp_enqueue_style('custom-google-fonts', 'https://fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i|Roboto:100,300,400,400i,700,700i');
    wp_enqueue_style('font-awesome', 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
    wp_enqueue_style('university_main_styles', get_theme_file_uri('/build/style-index.css'));
    wp_enqueue_style('university_extra_styles', get_theme_file_uri('/build/index.css'));
}

add_action('login_enqueue_scripts', 'ourLoginCss');


// Change the Login title
function ourLoginTitle() {
    return get_bloginfo('name');
}

add_filter('login_headertitle', 'ourLoginTitle');

// _____________________________________________________________________

// Force note post to be private and sanitizing text before enter it in db

function makeNotePrivate($data) {

    if ($data['post_type'] == 'note' && $data['post_status'] !== 'trash') {
        $data['post_status'] = 'private';
    }

    if ($data['post_type'] == 'note') {
        $data['post_content'] = sanitize_textarea_field($data['post_content']);
        $data['post_title'] = sanitize_text_field($data['post_title']);
    }

    return $data;
}

add_filter('wp_insert_post_data', 'makeNotePrivate');

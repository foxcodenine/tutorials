### Docs

https://developer.wordpress.org/

https://codex.wordpress.org/Main_Page

https://developer.wordpress.org/resource/dashicons/#controls-volumeoff

### Wordpress Function:

```php
    bloginfo('name');

    bloginfo('description');

    

    have_posts();

    the_post();

    the_title();
    get_the_title('#enter_an_id');

    the_content();
    get_the_content();

    the_excerpt();
    get_the_excerpt();
    has_excerpt();

    the_time();
    get_the_time();
    get_the_time('j/n/Y')

    the_author_posts_link();
    get_the_author_posts_link();

    the_permalink();
    get_permalink('#enter_an_id')

    get_header();
    get_footer();

    wp_head();
    wp_footer();

    paginate_links();
    paginate_links([ 'total' => $pastEvents->max_num_pages ]);

    <html <?php language_attributes() ?> 
    <meta charset="<?php bloginfo('charset') ?>" >
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <body <?php body_class(); ?> >


    site_url('/privacy-policy')
    get_theme_file_uri('/build/index.js')
    get_stylesheet_uri();
    
    the_ID();
    get_the_ID();

    wp_get_post_parent_id( '#enter_an_id' );

    is_author();
    is_category();
    in_category( int|string|int[]|string[] $category, int|object $post = null )

    the_author();
    get_the_author();

    single_cat_title();

    the_archive_title();
    the_archive_description();

    get_the_archive_title();
    get_the_archive_description();

    wp_trim_words(get_the_content(), 18);

    wp_reset_postdata();

    get_post_type_archive_link('post_type_name');

    get_post_type( int|WP_Post|null $post = null )

    the_field('field_name')
    get_field('field_name')

    get_query_var( string $var, mixed $default = '' );
    get_query_var('paged', 1);



    get_the_post_thumbnail_url()
    the_post_thumbnail_url()
    the_post_thumbnail_url('professorLandscape')

    the_post_thumbnail();
    the_post_thumbnail('professorPortrait');

    get_template_part( string $slug, string $name = null, array $args = array() )
    get_template_part('path_to/template_part', )
    get_template_part('path_to/template_part', 'name')

```

```php
    wp_list_pages( [ 'title_li' => NULL, 'child_of' => $theId, 'sort_column' => 'menu_order' ] );

    wp_nav_menu(['theme_location' => 'headerMenuLocation']);
```

### Adds a callback function to an action hook.

```php
    function myFunction() {
        wp_enqueue_style('my_styles', get_stylesheet_uri());
        wp_enqueue_script('main-university-js', get_theme_file_uri('/build/index.js'), array('jquery'), '1.0', true);
    }

    add_action('wp_enqueue_scripts', 'myFunction');

    /** wp function used above
     * 
     * add_action(), wp_enqueue_style(), 
     * get_stylesheet_uri(), wp_enqueue_script(), get_theme_file_uri()
    */

    /** wp Hooks used above
     * 
     * 'wp_enqueue_scripts'
    */

```


```php
    function myFunction() {
        register_nav_menu('headerMenuLocation', 'Header Menu Location');
        add_theme_support('title-tag');
    }

    add_action('after_setup_theme', 'myFunction');

    /** wp function used above
     * 
     * add_action(), add_theme_support(), register_nav_menu()
    */

    /** wp Hooks used above
     * 
     * 'after_setup_theme'
    */

    /** feature
     * 
     * 'title-tag'
    */

```

```php
    function myFunction () {
        register_post_type('event', [
            'public' => true, 
            'has_archive' => true,
            'menu_icon' => 'dashicons-calendar',
            'show_in_rest' => true,
            'rewrite' => [
                'slug'=> 'events'
            ],
            'labels' => [
                'name' => 'Events',
                'add_new_item' => 'Add New Event',
                'edit_item' => 'Edit Event',
                'all_items' => 'All Events',
                'add_new' => 'Add Event',
                'singular_name' => 'Event',         
            ],
        ]);
    }


    add_action('init', 'myFunction');

    /** wp function used above
     * 
     * add_action(), register_post_type
    */

    /** wp Hooks used above
     * 
     * 'init'
    */

```


```php
function myFunction ($query) {
    // $query->set('posts_per_page', '1');

    if (!is_admin() && is_post_type_archive('event') && $query->is_main_query()) {
        $query->set( 'meta_key', 'event_date' );
        $query->set( 'orderby', 'meta_value_num' );
        $query->set( 'order', 'ASC' );
        $today = date('Ymd');
        $query->set( 'meta_query', ['key' => 'event_date', 'compare' => '>=', 'value' => $today, 'type' => 'numeric'] );
    }
    
}

add_action('pre_get_posts', 'myFunction');


    /** wp function used above
     * 
     * add_action(), is_admin(), is_post_type_archive('post_type_name'), is_main_query()
    */

    /** wp Hooks used above
     * 
     * 'pre_get_posts'
    */

```






### The WordPress Query class.

Example 1:

```php
        $homepagePosts = new WP_Query([
            'posts_per_page' => 2,
            // 'category_name' => 'myCategoryName',
            // 'post_type' => 'post',
            'post_type' => 'page',
        ]);
```

Example 2:

```php        
        $today = date('Ymd');
        $homepageEvents = new WP_Query([
            // 'paged' => get_query_var('paged', 1),
            // 'posts_per_page' => -1 , 
            'posts_per_page' =>  2, 
            'post_type' => 'event',
            // 'orderby' => 'title',
            // 'orderby' => 'rand',
            // 'orderby' => 'post_date',
            // 'orderby'  => 'meta_value',
            'orderby'  => 'meta_value_num',
            'meta_key' => 'event_date',
            'order' => 'ASC',
            'meta_query' => [
                ['key' => 'event_date', 'compare' => '>=', 'value' => $today, 'type' => 'numeric']
            ]

        ]);
```

Properties:

    $max_num_pages
    The total number of pages. Is the result of $found_posts / $posts_per_page

### Info

single.php - is for individual posts
page.php - is for individual pages


### Plugins

Advanced Custom Fields (ACF) -Delicious Brains
Regenerate Thumbnails - Alex Mills
Manual Image Crop - Tomasz Sita
WP Mail SMTP by WPForms - WPForms
All-in-One WP Migration - ServMask

CMB2 (Custom Metaboxs2)


### npm

https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/

    $ npm install @wordpress/scripts --save-dev

https://www.npmjs.com/package/@glidejs/glide

    $ npm install @glidejs/glide

https://axios-http.com/docs/intro 

    $ npm install axios

https://github.com/necolas/normalize.css/
https://necolas.github.io/normalize.css/ 

    $ npm install --save normalize.css


### Google Maps API settings

https://www.advancedcustomfields.com/blog/google-maps-api-settings/

```php 
    // in function.php
    function my_acf_google_map_api( $api ){
        
        $api['key'] = 'xxx';
        
        return $api;
        
    }
    add_filter('acf/fields/google_map/api', 'my_acf_google_map_api');
```



### useing .env file

Tutorial:

    https://erikpoehler.com/2020/12/30/using-an-env-file-for-database-and-other-credentials/

From you root directory (in this case 001-FICTIONAL_UNIVERSITY) run:

    $ composer require vlucas/phpdotenv
    $ composer dump-autoload

Create your .env file, with you env varables

At the top of wp-config add the following:
```php
    /** @desc this loads the composer autoload file */
    require_once  realpath(__DIR__ .'/vendor/autoload.php');
    /** @desc this instantiates Dotenv and passes in our path to .env */
    $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
    $dotenv->load();
```


### Google Maps
How to add Maps using the JavaScript API - Geocasts:
    
    https://www.youtube.com/watch?v=B4p3A00uXAs


How to generate and restrict API keys for Google Maps Platform:
    
    https://www.youtube.com/watch?v=2_HZObVbe-g

Advanced Custom Fields, Google maps docs:   (we used this option in wp)

    https://www.advancedcustomfields.com/resources/google-map/





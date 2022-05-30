### Wordpress Function:

```php
    bloginfo('name');

    bloginfo('description');

    

    have_posts();

    the_post();

    the_title();

    the_content();



    the_permalink();

    get_header();
    get_footer();

    wp_head();
    wp_footer();

```

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
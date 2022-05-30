### Docs

https://developer.wordpress.org/

https://codex.wordpress.org/Main_Page

### Wordpress Function:

```php
    bloginfo('name');

    bloginfo('description');

    

    have_posts();

    the_post();

    the_title();
    get_the_title('#enter_an_id');

    the_content();



    the_permalink();
    get_permalink('#enter_an_id')

    get_header();
    get_footer();

    wp_head();
    wp_footer();

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
    wp_list_pages( [ 'title_li' => NULL, 'child_of' => $theId, 'sort_column' => 'menu_order' ] );

    wp_nav_menu(['theme_location' => 'headerMenuLocation']);
```
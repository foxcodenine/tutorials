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
    get_the_content();

    the_excerpt();
    get_the_excerpt();

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

```php
        $homepagePosts = new WP_Query([
            'posts_per_page' => 2,
            // 'category_name' => 'myCategoryName',
            // 'post_type' => 'post',
            'post_type' => 'page',
        ]); 
```


### Info

single.php - is for individual posts
page.php - is fo individual pages
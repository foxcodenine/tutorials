<?php


// _____________________________________________________________________

function university_post_type () {

    // Event Post Types
    register_post_type('event', [
        'public' => true, 
        'has_archive' => true,
        'show_in_rest' => true,
        // 'supports' => ['title','editor','excerpt', 'custom-fields'],
        'supports' => ['title','editor','excerpt'],
        'rewrite' => ['slug'=> 'events'],
        'labels' => [
            'name' => 'Events',
            'add_new_item' => 'Add New Event',
            'edit_item' => 'Edit Event',
            'all_items' => 'All Events',
            'add_new' => 'Add Event',
            'singular_name' => 'Event',         
        ],
        'menu_icon' => 'dashicons-calendar',
    ]);

    // Program Post Type
    register_post_type('program', [
        'public' => true, 
        'has_archive' => true,
        'show_in_rest' => true,
        'supports' => ['title','editor'],
        'rewrite' => ['slug'=> 'programs'],
        'labels' => [
            'name' => 'Programs',
            'add_new_item' => 'Add New Program',
            'edit_item' => 'Edit Program',
            'all_items' => 'All Programs',
            'add_new' => 'Add Program',
            'singular_name' => 'Program',         
        ],
        'menu_icon' => 'dashicons-awards',
    ]);
}


add_action('init', 'university_post_type');
<?php


// _____________________________________________________________________

function university_post_type () {

    // Event Post Types
    register_post_type('event', [
        'capability_type' => 'event',
        'map_meta_cap' => true,
        'public' => true, 
        'has_archive' => true,
        'rewrite' => ['slug'=> 'events'],
        'show_in_rest' => true,
        // 'supports' => ['title','editor','excerpt', 'custom-fields'],
        'supports' => ['title','editor','excerpt'],
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
        'capability_type' => 'program',
        'map_meta_cap' => true,
        'public' => true, 
        'has_archive' => true,
        'show_in_rest' => true,
        'rewrite' => ['slug'=> 'programs'],
        // 'supports' => ['title','editor'],
        'supports' => ['title'],
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

    // Professor Post Type
    register_post_type('professor', [
        'capability_type' => 'professor',
        'map_meta_cap' => true,
        'public' => true, 
        'has_archive' => false,
        'show_in_rest' => true,
        // 'rewrite' => ['slug'=> 'professors'],
        'supports' => ['title','editor', 'thumbnail'],
        'labels' => [
            'name' => 'Professors',
            'add_new_item' => 'Add New Professor',
            'edit_item' => 'Edit Professor',
            'all_items' => 'All Professors',
            'add_new' => 'Add Professor',
            'singular_name' => 'Professor',         
        ],
        'menu_icon' => 'dashicons-welcome-learn-more',
    ]);

    // Campus Post Types
    register_post_type('campus', [
        'capability_type' => 'campus',
        'map_meta_cap' => true,
        'public' => true, 
        'has_archive' => true,
        'rewrite' => ['slug'=> 'campuses'],
        'show_in_rest' => true,
        // 'supports' => ['title','editor','excerpt', 'custom-fields'],
        'supports' => ['title','editor','excerpt'],
        'labels' => [
            'name' => 'Campuses',
            'add_new_item' => 'Add New Campus',
            'edit_item' => 'Edit Campus',
            'all_items' => 'All Campuses',
            'add_new' => 'Add Campus',
            'singular_name' => 'Campus',         
        ],
        'menu_icon' => 'dashicons-location-alt',
    ]);

    // Note Post Type
    register_post_type('note', [
        'capability_type' => 'Note',
        'map_meta_cap' => true,
        'show_in_rest' => true,
        'supports' => ['title','editor'],
        'public' => false, 
        'show_ui' => true,
        'labels' => [
            'name' => 'Notes',
            'add_new_item' => 'Add New Note',
            'edit_item' => 'Edit Note',
            'all_items' => 'All Notes',
            'singular_name' => 'Note',         
        ],
        'menu_icon' => 'dashicons-welcome-write-blog',
    ]);
}


add_action('init', 'university_post_type');
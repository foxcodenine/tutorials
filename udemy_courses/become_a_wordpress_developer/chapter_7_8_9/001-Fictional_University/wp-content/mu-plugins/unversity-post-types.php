<?php


// _____________________________________________________________________

function university_post_type () {
    register_post_type('event', [
        'public' => true, 
        'has_archive' => true,
        'menu_icon' => 'dashicons-calendar',
        'show_in_rest' => true,
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
    ]);
}


add_action('init', 'university_post_type');
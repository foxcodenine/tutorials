<?php 
// https://developer.wordpress.org/reference/classes/wp_query/

add_action('rest_api_init', 'unversityRegisterSearch');

function unversityRegisterSearch() {
    // register_rest_route('namespace', 'routeName');
    register_rest_route('university/v1', 'search', [

        // 'methods' => 'GET',
        'methods' => WP_REST_SERVER::READABLE,
        
        'callback' => 'universitySearchResults'
    ]);
}

function universitySearchResults($data) {
    $mainQuery = new WP_Query([
        // 'post_type' => 'professor',
        'post_type' => ['post', 'page', 'professor', 'program', 'campus', 'event'],
        's' =>  sanitize_text_field($data['term'])
    ]);

    $results = array(
        'generalInfo' => array(),
        'professors'  => array(),
        'programs'    => array(),
        'events'      => array(),
        'campuses'    => array(),
    );

    while($mainQuery->have_posts()) {

        $mainQuery->the_post();

        $arr = [
            'title' => get_the_title(),
            'permalink' => get_the_permalink(),
            'postType' => get_post_type(),
            'authorName' => get_the_author()
        ];

        switch (get_post_type()) {
            case 'post':
            case 'page':
                $field = 'generalInfo';
                break;

            case 'professor':
                $field = 'professors';
                $arr['thumbnail'] = get_the_post_thumbnail_url(0, 'professorLandscape');
                break;

            case 'program':                
                $field = 'programs';
                $arr['id'] = get_the_id();                
                
                // - if program have a related campus we are adding it to campuses
                $relatedCampuses = get_field('related_campus');

                if ($relatedCampuses) {
                    foreach ($relatedCampuses as $campus) {
                        array_push($results['campuses'], [
                            'title' => get_the_title($campus),
                            'permalink' => get_the_permalink($campus),
                            'postType' => get_post_type($campus),
                            'authorName' => get_the_author($campus)
                        ]);
                                          }
                }
                // ---
                break;

            case 'event':
                $field = 'events';
                $date = new DateTime(get_field('event_date'));
                $arr['eventDate'] = [
                    'day'   => $date->format('d'), 
                    'month' => $date->format('M'),
                    'year'  => $date->format('Y'),
                ];
                $arr['description'] = has_excerpt() ? get_the_excerpt() : wp_trim_words(get_the_content(), 13);
                break;            
            default:
                $field = 'campuses';
                break;
        }

        array_push($results[$field], $arr);
    }

    // _____________________________________________

    if ($results['programs']) {

        $program_meta_query = ['relation' => 'OR'];
        foreach ($results['programs'] as $p) {
            array_push($program_meta_query, [
                'key' => 'related_programs', 'compare' => 'like' ,  'value' => (string) $p['id']
            ]);
        }

        $programRelationshipQuery = new WP_Query([
            'post_type' => ['professor', 'event'],
            // 'meta_query' => [
            //     'relation' => 'OR',
            //     ['key' => 'related_programs', 'compare' => 'like' ,  'value' => '"65"'],
            //     ['key' => 'related_programs', 'compare' => 'like' ,  'value' => '"65"'],
            // ],
            'meta_query' => $program_meta_query,
        ]);

        while ($programRelationshipQuery->have_posts()) {
            $programRelationshipQuery->the_post();

            if (get_post_type() == 'professor') {               
                
                $arr = [
                    'title'      => get_the_title(),
                    'permalink'  => get_the_permalink(),
                    'postType'   => get_post_type(),
                    'authorName' => get_the_author(),
                    'thumbnail'  => get_the_post_thumbnail_url(0, 'professorLandscape')
                ];
                array_push($results['professors'], $arr);
            }

            if (get_post_type() == 'event') {               
                
                $date = new DateTime(get_field('event_date'));
                $arr = [
                    'title'      => get_the_title(),
                    'permalink'  => get_the_permalink(),
                    'postType'   => get_post_type(),
                    'authorName' => get_the_author(),
                    'eventDate'  => [
                        'day'   => $date->format('d'), 
                        'month' => $date->format('M'),
                        'year'  => $date->format('Y'),
                    ],
                    'description' => has_excerpt() ? 
                                     get_the_excerpt() : 
                                     wp_trim_words(get_the_content(), 13),
                ]; 
                array_push($results['events'], $arr);         
            }            
        }      
    }

    $results['professors'] = array_unique($results['professors'], SORT_REGULAR);
    $results['professors'] = array_values($results['professors']);
    $results['events'] = array_values(array_unique($results['events'], SORT_REGULAR));        
    $results['campuses'] = array_values(array_unique($results['campuses'], SORT_REGULAR));  

    return $results;
}
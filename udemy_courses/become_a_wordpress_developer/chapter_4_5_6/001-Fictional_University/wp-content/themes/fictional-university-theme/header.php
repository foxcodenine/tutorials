<!DOCTYPE html>
<html <?php language_attributes() ?> >
    <meta charset="<?php bloginfo('charset') ?>" >
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
    <body <?php body_class(); ?> >
        <!-- header start --------------------------------------------->
        <header class="site-header">`
            <div class="container">
                <h1 class="school-logo-text float-left">
                <a href="<?= site_url()?>"><strong>Fictional</strong> University</a>
                </h1>
                <span class="js-search-trigger site-header__search-trigger"><i class="fa fa-search" aria-hidden="true"></i></span>
                <i class="site-header__menu-trigger fa fa-bars" aria-hidden="true"></i>
                <div class="site-header__menu group">
                <nav class="main-navigation">
                    <!-- <?php wp_nav_menu(['theme_location' => 'headerMenuLocation']) ?> -->

                    <?php function isActive($pageName=false, $pageId=false, $postType=false, ) {
                        return  is_page($pageName) || 
                                wp_get_post_parent_id(0) === $pageId ||
                                get_post_type() === $postType  ? 
                                'current-menu-item' : '';
                    }?>
                    
                    <ul>
                    <li class="<?= isActive('about-us', 16) ?>" ><a href="<?= site_url('/about-us')?>">About Us</a></li>
                    <li><a href="#">Programs</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Campuses</a></li>
                    <li class="<?= isActive('blog', false, 'post') ?>"><a href="<?= site_url('/blog'); ?>">Blog</a></li>
                    </ul> 
                   
                </nav>
                <div class="site-header__util">
                    <a href="#" class="btn btn--small btn--orange float-left push-right">Login</a>
                    <a href="#" class="btn btn--small btn--dark-orange float-left">Sign Up</a>
                    <span class="search-trigger js-search-trigger"><i class="fa fa-search" aria-hidden="true"></i></span>
                </div>
                </div>
            </div>
        </header>
        
        <!-- header end ----------------------------------------------->
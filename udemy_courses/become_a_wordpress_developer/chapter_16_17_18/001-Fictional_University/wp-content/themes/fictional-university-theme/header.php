<!DOCTYPE html>
<html <?php language_attributes() ?> >
    <meta charset="<?php bloginfo('charset') ?>" >
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
    <body <?php body_class(); ?> style="min-height: 100vh; display: flex; flex-direction: column;" >
    
        <!-- header start --------------------------------------------->
        <header class="site-header">`
            <div class="container">
                <h1 class="school-logo-text float-left">
                <a href="<?= site_url()?>"><strong>Fictional</strong> University</a>
                </h1>
                <a href="<?= esc_url(site_url('/search')) ?>" class="js-search-trigger site-header__search-trigger"><i class="fa fa-search" aria-hidden="true"></i></a>
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
                    <li class="<?= isActive('program', false, 'program') ?>"><a href="<?= get_post_type_archive_link('program')?>">Programs</a></li>
                    <li class="<?= isActive('past-events', false, 'event') ?>"><a href="<?= get_post_type_archive_link('event'); ?>">Events</a></li>
                    <li class="<?= isActive( 'campus', false, 'campus') ?>"><a href="<?= get_post_type_archive_link('campus') ?>">Campuses</a></li>
                    <li class="<?= isActive('blog', false, 'post') ?>"><a href="<?= site_url('/blog'); ?>">Blog</a></li>
                    </ul> 
                   
                </nav>
                <div class="site-header__util">
                    <?php if(is_user_logged_in()): ?>
                        <a href="<?= wp_logout_url() ?>" class="btn btn--small btn--orange float-left push-right btn--with-photo">
                            <span class="site-header__avatar"><?= get_avatar(get_current_user_id(), 60) ?></span>
                            <span class="btn__text">Log Out</span>
                        </a>
                    <?php else: ?>
                        <a href="<?= wp_login_url() ?>" class="btn btn--small btn--orange float-left push-right">Login</a>
                        <a href="<?= wp_registration_url() ?>" class="btn btn--small btn--dark-orange float-left">Sign Up</a>
                    <?php endif ?>
                    <a href="<?= esc_url(site_url('/search')) ?>" class="search-trigger js-search-trigger"><i class="fa fa-search" aria-hidden="true"></i></a>
                </div>
                </div>
            </div>
        </header>
        
        <!-- header end ----------------------------------------------->

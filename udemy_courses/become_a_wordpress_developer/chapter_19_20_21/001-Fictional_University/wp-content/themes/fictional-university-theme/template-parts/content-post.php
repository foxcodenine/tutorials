<div class="post-item">
    
    <h2 class="headline headline--medium headline--post-title"><a href="<?= get_the_permalink() ?>"><?= get_the_title() ?></a></h2>            
    <div class="metabox">
        <p>
            Posted by <?= get_the_author_posts_link() ?> 
            on <?= get_the_time('j/n/Y') ?> 
            in <?= get_the_category_list(', ') ?>
        </p>
    </div>            
    <div class="generic-content">
        <p><?= get_the_excerpt(); ?></p>
        <p><a class="btn btn--blue" href="<?= get_the_permalink() ?>">Continue reading &raquo; </a></p>
    </div>            
</div>
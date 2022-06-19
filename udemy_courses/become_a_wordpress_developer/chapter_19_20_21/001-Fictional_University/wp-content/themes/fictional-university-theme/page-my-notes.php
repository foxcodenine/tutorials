<?php 
	if(!is_user_logged_in()) {
		wp_redirect(esc_url(site_url()));
		exit();
	}

	$userNotes = new WP_Query([
		'post_type' => 'note',
		'post_per_page' => -1,
		'author' => get_current_user_id()
	]);
?>

<!-- --------------------------------------------------------------- -->

<?php get_header();   while(have_posts()): ?>

    <?php 
		the_post();
		pageBanner(
			['title' => 'My Notes']
		);
	?>

    <div class="container container--narrow page-section"  id="notes-container">
		<ul class="min-list">
		<?php while($userNotes->have_posts()): $userNotes->the_post() ?>
			
			<li>
				<input class="note-title-field" value="<?= esc_attr(get_the_title()) ?>">
				<span class="edit-note"><i class="fa fa-pencil" aria-hidden="true"></i> Edit</span>
				<span class="delete-note"><i class="fa fa-trash-o" aria-hidden="true"></i> Delete</span>
				<textarea class="note-body-field"><?= esc_attr(wp_strip_all_tags(get_the_content())) ?></textarea>
			</li>

		<?php endwhile; wp_reset_postdata();?>
		</ul>
    </div>


<?php   endwhile; wp_reset_postdata(); get_footer(); ?>
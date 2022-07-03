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

		<div class="create-note">
			<h2 class="headline headline--medium">Create New Note</h2>
			<input class="new-note-title" type="text" placeholder="Title">
			<textarea class="new-note-body" placeholder="Your note here..."></textarea>
			<span class="submit-note">Create Note</span>
			<span class="note-limit-message">Note limit reached: Please delete an existing note to make room for new ones.</span>
		</div>
		
		<ul class="min-list" id="my-notes">
		<?php while($userNotes->have_posts()): $userNotes->the_post() ?>
			
			<li data-id="<?php the_ID(); ?>">
				<input class="note-title-field" value="<?= str_replace('Private: ', '', esc_attr(get_the_title())) ?>">
				<span class="edit-note"><i class="fa fa-pencil" aria-hidden="true"></i> Edit</span>
				<span class="delete-note"><i class="fa fa-trash-o" aria-hidden="true"></i> Delete</span>
				<textarea class="note-body-field"><?= esc_textarea(wp_strip_all_tags(get_the_content())) ?></textarea>
				<span class="update-note btn btn--blue btn--small"><i class="fa fa-arrow-right" aria-hidden="true"></i> Save</span>
			</li>

		<?php endwhile; wp_reset_postdata();?>
		</ul>
    </div>


<?php   endwhile; wp_reset_postdata(); get_footer(); ?>
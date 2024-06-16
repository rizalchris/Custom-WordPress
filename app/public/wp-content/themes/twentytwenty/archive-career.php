<?php
get_header();
?>

<main id="site-content">

    <header class="archive-header">
        <div class="container">
            <h1 class="archive-title"><?php post_type_archive_title(); ?></h1>
        </div>
    </header><!-- .archive-header -->

    <div class="container">
        <div id="total-posts">Total posts: <span id="total-post-count"></span></div>
        <div class="row align-items-start gap-5">
            <div class="job-listing col border border-primary rounded-2 p-5" style="max-width: 33%;">
                <?php if (have_posts()) : ?>
                    <?php while (have_posts()) : the_post(); ?>
                        <a href="#" class="job-item" data-post-id="<?php the_ID(); ?>">
                            <article <?php post_class(); ?> id="post-<?php the_ID(); ?>">
                                <header class="entry-header">
                                    <h2 class="h3 link-danger link-offset-3 link-underline link-underline-opacity-50"><?php the_title(); ?></h2>
                                </header>
                            </article>
                        </a>
                    <?php endwhile; ?>
                <?php else : ?>
                    <p><?php _e('Sorry, no careers found.', 'twentytwenty'); ?></p>
                <?php endif; ?>
            </div>

            <div class="col border border-primary rounded-2 p-5" style="max-width: 66%;">
                <div class="jobContent">
                    <div class="job-wrapper">
                        <h2 class="h3 jobTitle"></h2>
                        <p class="jobLocation"></p>
                        <p class="jobDescription"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="load-more-container">
        <div class="load-more-spinner" style="display:none;">Loading...</div>
    </div>
</main>

<?php
get_footer();

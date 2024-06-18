jQuery(document).ready(function ($) {
	var isLoaded = true
	var paged = 2
	var latestPostID = $('.job-item').first().data('post-id')

	$('#total-post-count').text(ajax_object.total_posts)
	if (latestPostID) {
		$.ajax({
			url: ajax_object.ajax_url,
			type: 'POST',
			data: {
				action: 'load_career',
				post_id: latestPostID,
				nonce: ajax_object.nonce,
			},
			success: function (response) {
				if (response.success) {
					var postContent = response.data

					$('.jobContent .jobTitle').html(postContent.title)
					$('.jobContent .jobLocation').html(postContent.location)
					$('.jobContent .jobDescription').html(
						postContent.description
					)
				} else {
					console.error('Error: ', response.data)
				}
			},
			error: function (xhr, status, error) {
				console.error('AJAX Error: ', status, error)
			},
		})
	}

	// Handle click event to load content via AJAX
	$('.job-item').on('click', function (e) {
		e.preventDefault()

		var postID = $(this).data('post-id')

		$.ajax({
			url: ajax_object.ajax_url,
			type: 'POST',
			data: {
				action: 'load_career',
				post_id: postID,
				nonce: ajax_object.nonce,
			},
			success: function (response) {
				if (response.success) {
					var postContent = response.data

					$('.jobContent .jobTitle').html(postContent.title)
					$('.jobContent .jobLocation').html(postContent.location)
					$('.jobContent .jobDescription').html(
						postContent.description
					)
				} else {
					console.error('Error: ', response.data)
				}
			},
			error: function (xhr, status, error) {
				console.error('AJAX Error: ', status, error)
			},
		})
	})

	// Infinite scroll functionality
	$('.job-listing').on('scroll', function () {
		var $this = $(this)
		if (
			$this.scrollTop() + $this.innerHeight() >= $this[0].scrollHeight &&
			isLoaded
		) {
			canBeLoaded = false // Prevent multiple AJAX calls
			$('.load-more-spinner').show()

			$.ajax({
				url: ajax_object.ajax_url,
				type: 'POST',
				data: {
					action: 'load_more_posts',
					paged: paged,
					nonce: ajax_object.nonce,
				},
				success: function (response) {
					if (response.success) {
						$('.job-listing').append(response.data.posts)
						paged++
						canBeLoaded = true // Allow more posts to be loaded
						$('.load-more-spinner').hide()
					} else {
						$('.load-more-spinner').text('No more posts')
					}
				},
				error: function (xhr, status, error) {
					console.error('AJAX Error: ', status, error)
				},
			})
		}
	})
})

jQuery(document).ready(function ($) {
	// Load the latest post on page load
	var latestPostID = $('.career-article-link').first().data('post-id')

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
	$('.career-article-link').on('click', function (e) {
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
})

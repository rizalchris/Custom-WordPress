jQuery(document).ready(function ($) {
	var offset = 0
	var isLoading = false
	var totalRecords = 0

	// Function to load data
	function loadData() {
		if (!isLoading) {
			isLoading = true
			$.ajax({
				url: ajax_obj.ajax_url,
				type: 'POST',
				data: {
					action: 'crud_operations',
					action_type: 'read',
					start: offset,
					length: 6,
					nonce: ajax_obj.nonce,
				},
				success: function (response) {
					if (response.status === 'success') {
						totalRecords = response.recordsTotal
						response.data.forEach(function (item) {
							$('#product-category-table tbody').append(
								'<tr>' +
									'<td>' +
									item.product_category_id +
									'</td>' +
									'<td>' +
									item.product_category_name +
									'</td>' +
									'<td>' +
									item.product_category_slug +
									'</td>' +
									'<td>' +
									item.product_category_desc +
									'</td>' +
									'<td>' +
									(item.product_category_status == 1
										? 'Active'
										: 'Inactive') +
									'</td>' +
									'<td mx-auto>' +
									'<button class="btn btn-sm btn-primary edit" data-id="' +
									item.product_category_id +
									'">Edit</button>' +
									'<button class="btn btn-sm btn-danger delete" data-id="' +
									item.product_category_id +
									'">Delete</button>' +
									'</td>' +
									'</tr>'
							)
						})
						offset += 6 // Increment offset by 6
						isLoading = false
					}
				},
			})
		}
	}

	// Load initial data
	loadData()

	// Infinite scrolling
	$(window).on('scroll', function () {
		if (
			$(window).scrollTop() + $(window).height() >=
			$(document).height() - 100
		) {
			if ($('#product-category-table tbody tr').length < totalRecords) {
				loadData()
			}
		}
	})

	// Handle form submission
	$('#product-category-form').on('submit', function (e) {
		e.preventDefault()

		var action_type = $('#product_category_id').val() ? 'update' : 'create'

		$.ajax({
			url: ajax_obj.ajax_url,
			type: 'POST',
			data:
				$(this).serialize() +
				'&action=crud_operations&action_type=' +
				action_type +
				'&nonce=' +
				ajax_obj.nonce,
			success: function (response) {
				if (response.status === 'success') {
					offset = 0 // Reset offset
					$('#product-category-table tbody').empty() // Clear current table
					loadData() // Reload the data
					$('#product-category-form')[0].reset()
				}
				alert(response.message)
			},
		})
	})

	// Handle edit button click
	$('#product-category-table tbody').on('click', 'button.edit', function () {
		var tr = $(this).closest('tr')
		$('#product_category_id').val(tr.find('td').eq(0).text())
		$('#product_category_name').val(tr.find('td').eq(1).text())
		$('#product_category_slug').val(tr.find('td').eq(2).text())
		$('#product_category_desc').val(tr.find('td').eq(3).text())
		$('#product_category_status').val(
			tr.find('td').eq(4).text() === 'Active' ? 1 : 0
		)
	})

	// Handle delete button click
	$('#product-category-table tbody').on(
		'click',
		'button.delete',
		function () {
			if (!confirm('Are you sure you want to delete this category?'))
				return

			var product_category_id = $(this).data('id')

			$.ajax({
				url: ajax_obj.ajax_url,
				type: 'POST',
				data: {
					action: 'crud_operations',
					action_type: 'delete',
					product_category_id: product_category_id,
					nonce: ajax_obj.nonce,
				},
				success: function (response) {
					if (response.status === 'success') {
						offset = 0 // Reset offset
						$('#product-category-table tbody').empty() // Clear current table
						loadData() // Reload the data
					}
					alert(response.message)
				},
			})
		}
	)
})

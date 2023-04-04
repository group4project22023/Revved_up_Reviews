const newFormHandler = async (event) => {
	event.preventDefault();

	const title = document.querySelector('#review-title').value.trim();

	const description = document.querySelector('#review-desc').value.trim();

	if (title && description) {
		const response = await fetch(`/api/carReview`, {
			method: 'POST',
			body: JSON.stringify({ title, description }),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (response.ok) {
			document.location.replace('/dashboard');
		} else {
			alert('Failed to create review');
		}
	}
};

const delButtonHandler = async (event) => {
	if (event.target.hasAttribute('review-id')) {
		const id = event.target.getAttribute('review-id');

		const response = await fetch(`/api/carReview/${id}`, {
			method: 'DELETE',
		});

		if (response.ok) {
			document.location.replace('/dashboard');
		} else {
			alert('Failed to delete review');
		}
	}
};

document
	.querySelector('.new-review-form')
	.addEventListener('submit', newFormHandler);

document
	.querySelector('.review-list')
	.addEventListener('click', delButtonHandler);
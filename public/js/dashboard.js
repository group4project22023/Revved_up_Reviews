const newFormHandler = async (event) => {
	event.preventDefault();

	const title = document.querySelector('#carReview-title').value.trim();

	const carReview = document.querySelector('#carReview-desc').value.trim();

	if (title && carReview) {
		const response = await fetch(`/api/carReviews`, {
			method: 'POST',
			body: JSON.stringify({ title, carReview }),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (response.ok) {
			document.location.replace('/dashboard');
		} else {
			alert('Failed to create CarReview');
		}
	}
};

const delButtonHandler = async (event) => {
	if (event.target.hasAttribute('data-id')) {
		const id = event.target.getAttribute('data-id');

		const response = await fetch(`/api/carReviews/${id}`, {
			method: 'DELETE',
		});

		if (response.ok) {
			document.location.replace('/dashboard');
		} else {
			alert('Failed to delete carReview');
		}
	}
};

document
	.querySelector('.new-carReview-form')
	.addEventListener('submit', newFormHandler);

document
	.querySelector('.carReview-list')
	.addEventListener('click', delButtonHandler);
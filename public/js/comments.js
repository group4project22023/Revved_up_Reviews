const newCommentForm = document.getElementById("new-comment-form");

newCommentForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const comment_description = document
    .getElementById("comment_description")
    .value.trim();
  const carReview_id = newCommentForm.getAttribute("data-carReviewid");

  if (!comment_description) {
    return;
  }

  const response = await fetch("/api/comments", {
    method: "POST",
    body: JSON.stringify({ comment_description, carReview_id }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert("Failed to create comment");
  }
});

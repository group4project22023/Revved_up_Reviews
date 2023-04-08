document
  .querySelector("#edit-review-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const title = document.querySelector("#title").value.trim();
    const carReview = document.querySelector("#content").value.trim();
    const id = window.location.pathname.split("/")[2];

    if (title && carReview) {
      const response = await fetch(`/edit-review/${id}`, {
        method: "PUT",
        body: JSON.stringify({ title, carReview }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        document.location.replace(`/carReview/${id}`);
      } else {
        alert("Failed to update the review");
      }
    }
  });

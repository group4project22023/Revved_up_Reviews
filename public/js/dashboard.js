const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#carReview-title").value.trim();
  const make = document.querySelector("#make").value.trim();
  const model = document.querySelector("#model").value.trim();
  const carReview = document.querySelector("#carReview-desc").value.trim();

  if (title && make && model && carReview) {
    const response = await fetch(`/api/carReviews`, {
      method: "POST",
      body: JSON.stringify({ title, make, model, carReview }),
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((error) => {
      console.error("Fetch error:", error);
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to create CarReview");
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/carReviews/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to delete carReview");
    }
  }
};

document
  .querySelector(".new-carReview-form")
  .addEventListener("submit", newFormHandler);

document
  .querySelector(".carReview-list")
  .addEventListener("click", delButtonHandler);

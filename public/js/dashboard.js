let hiddenValues = [];

const carModelHandler = () => {
  const make = document.querySelector("#make").value;
  const modelList = document.querySelector("#model");

  //If any values are hidden
  if (hiddenValues.length > 0) {
    for (let i = 0; i < hiddenValues.length; i++) {
      //Add each value back to display
      modelList.add(hiddenValues[i]);
    }
    //Clear hidden values list
    hiddenValues = [];
  }

  for (let i = 0; i < modelList.length; i++) {
    //Remove models not associated to the selected make
    if (modelList[i].dataset.make !== make) {
      hiddenValues.push(modelList[i]); //Save deleted values to add back on selection change
      modelList.options[i].remove();
      i--; //Account for removed value and check same index again for new value
    }
  }
};

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
      alert("Success!! Car review created.")
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

const editButtonHandler = async (event) => {
  if (event.target.hasAttribute("edit-id")) {
    const id = event.target.getAttribute("edit-id");
    document.location.replace(`/edit-review/${id}`);
  }
};

carModelHandler();

document.querySelector("#make").addEventListener("change", carModelHandler);

document
  .querySelector(".new-carReview-form")
  .addEventListener("submit", newFormHandler);

document
  .querySelector(".carReview-list")
  .addEventListener("click", delButtonHandler);

document
  .querySelector(".carReview-list")
  .addEventListener("click", editButtonHandler);

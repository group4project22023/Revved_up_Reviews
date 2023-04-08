const apiKey = config.googleApiKey;
const searchEngineId = config.searchEngineId;

async function fetchGoogleImage(searchQuery) {
  const apiUrl = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=${encodeURIComponent(
    searchQuery
  )}&searchType=image&num=1`;

  const response = await fetch(apiUrl);
  const data = await response.json();

  if (data.items && data.items[0]) {
    return data.items[0];
  } else {
    console.error("Error fetching image:", data.error);
  }
}

async function loadImages(carMake, carModel) {
  const searchQueryBase = `${carMake} ${carModel}`.trim();

  console.log("carMake:", carMake);
  console.log("carModel:", carModel);

  if (searchQueryBase) {
    try {
      const exteriorImage = await fetchGoogleImage(searchQueryBase);
      const interiorImage = await fetchGoogleImage(
        searchQueryBase + " interior"
      );

      console.log("exteriorImage:", exteriorImage);
      console.log("interiorImage:", interiorImage);

      const imagesContainer = document.getElementById("images-container");

      const exteriorHeading = document.createElement("h2");
      exteriorHeading.textContent = "Exterior";
      imagesContainer.appendChild(exteriorHeading);

      const exteriorImg = document.createElement("img");
      exteriorImg.src = exteriorImage.link;
      exteriorImg.alt = "Exterior image";
      imagesContainer.appendChild(exteriorImg);

      const interiorHeading = document.createElement("h2");
      interiorHeading.textContent = "Interior";
      imagesContainer.appendChild(interiorHeading);

      const interiorImg = document.createElement("img");
      interiorImg.src = interiorImage.link;
      interiorImg.alt = "Interior image";
      imagesContainer.appendChild(interiorImg);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  }
}

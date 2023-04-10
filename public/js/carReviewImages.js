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

  if (searchQueryBase) {
    try {
      const exteriorImage = await fetchGoogleImage(searchQueryBase);
      const interiorImage = await fetchGoogleImage(
        searchQueryBase + " interior"
      );

      const imagesContainer = document.getElementById("images-container");

      const exteriorContainer = document.createElement("div");
      exteriorContainer.className = "flex flex-col gap-2 items-center";
      const exteriorHeading = document.createElement("h2");
      exteriorHeading.textContent = "Exterior:";
      exteriorContainer.appendChild(exteriorHeading);

      const exteriorImg = document.createElement("img");
      exteriorImg.src = exteriorImage.link;
      exteriorImg.alt = "Exterior image";
      exteriorImg.className = "max-[426px]:w-[90%]"
      exteriorContainer.appendChild(exteriorImg);

      const interiorContainer = document.createElement("div");
      interiorContainer.className = "flex flex-col gap-2 items-center";

      const interiorHeading = document.createElement("h2");
      interiorHeading.textContent = "Interior:";
      interiorContainer.appendChild(interiorHeading);

      const interiorImg = document.createElement("img");
      interiorImg.src = interiorImage.link;
      interiorImg.alt = "Interior image";
      interiorImg.className = "max-[426px]:w-[90%]"
      interiorContainer.appendChild(interiorImg);
      imagesContainer.appendChild(exteriorContainer);
      imagesContainer.appendChild(interiorContainer);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  }
}

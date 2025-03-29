document.addEventListener("DOMContentLoaded", () => {
  // Fetch list of countries to populate the dropdown
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => populateCountries(data));

  // Store countries data globally
  let countriesData = [];

  // Populate the country dropdown with country names
  function populateCountries(countries) {
    countriesData = countries;
    const select = document.getElementById("countrySelect");
    countries.forEach((country) => {
      const option = document.createElement("option");
      option.value = country.cca3; // Use alpha-3 code as value
      option.textContent = country.name.common;
      select.appendChild(option);
    });
  }

  // Handle country selection to fetch country info
  function fetchCountryInfo() {
    const countryCode = document.getElementById("countrySelect").value;
    const country = countriesData.find((c) => c.cca3 === countryCode);

    if (country) {
      displayCountryInfo(country);
    }
  }

  // Display selected country info
  function displayCountryInfo(country) {
    document.getElementById("capital").textContent = country.capital
      ? country.capital[0]
      : "N/A";
    document.getElementById("population").textContent =
      country.population.toLocaleString();
    document.getElementById("currency").textContent = country.currencies
      ? Object.values(country.currencies)[0].name
      : "N/A";

    // Animate flag
    const flagContainer = document.getElementById("flag");
    flagContainer.innerHTML = `<img src="${country.flags[1]}" alt="${country.name.common} Flag" />`;

    // Trigger flag animation
    setTimeout(() => {
      flagContainer.style.transform = "scale(1.2)";
    }, 100);

    // Show country info section
    document.getElementById("countryInfo").style.display = "block";
  }

  // Searchable dropdown filter
  window.filterCountries = function () {
    const input = document.getElementById("countryInput").value.toLowerCase();
    const select = document.getElementById("countrySelect");
    select.innerHTML = '<option value="">Select a country</option>'; // Clear current options

    countriesData.forEach((country) => {
      if (country.name.common.toLowerCase().includes(input)) {
        const option = document.createElement("option");
        option.value = country.cca3;
        option.textContent = country.name.common;
        select.appendChild(option);
      }
    });
  };
});

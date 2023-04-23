
const cities = [
  { name: "Mumbai", path: "mumlisting.html" },
  { name: "Lonavala", path: "lonlisting.html" },
  { name: "Pune", path: "punelisting.html" },
  { name: "Alibaug", path: "alilisting.html" },
  { name: "Mahabaleshwar", path: "mahabalisting.html" },
];

// get the select element from the DOM
const select = document.getElementById("cities");

// add options to the select element
cities.forEach(city => {
  const option = document.createElement("option");
  option.value = city.path;
  option.textContent = city.name;
  select.appendChild(option);
});

// get the button element from the DOM
const button = document.getElementById("go-to-city-btn");

// listen for the button click event
button.addEventListener("click", event => {
  const selectedOption = select.options[select.selectedIndex];
  if (selectedOption && selectedOption.value) {
    const path = selectedOption.value;
    window.location.href = path;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // your JavaScript code here
});

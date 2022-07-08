fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=ernakulam&appid=8ac5c4d57ba6a4b3dfcf622700447b1e"
)
  .then((result) => result.json())
  .then((weath) => displayData(weath));

function searchw() {
  cityl = loc1.value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityl}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e`
  )
    .then((result) => result.json())
    .then((weath) => displayData(weath));
}

function displayData(weath) {
  if (weath.cod == "404") {
    alert("City not found");
  } else {
    city.innerHTML = weath.name;
    degree.innerHTML = Math.floor(weath.main.temp - 273) + `<sup>o</sup>C`;
    feels.innerHTML = Math.floor(weath.main.feels_like - 273) + `<sup>o</sup>C`;
    humid.innerHTML = weath.main.humidity;
    pressure.innerHTML = weath.main.pressure;
    wind.innerHTML = weath.wind.speed;
    vis.innerHTML = weath.visibility;
  }

  // document.getElementById("result").innerHTML += htmlData;
}

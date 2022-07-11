fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=kochi&appid=8ac5c4d57ba6a4b3dfcf622700447b1e"
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
    mainw.innerHTML = weath.weather[0].main;
    // degree.innerHTML = Math.floor(weath.main.temp - 273) + `<sup>o</sup>C`;
    degree.innerHTML = Math.floor(weath.main.temp - 273.15) + `<sup>o</sup>C`;
    feels.innerHTML =
      Math.floor(weath.main.feels_like - 273.15) + `<sup>o</sup>C`;
    humid.innerHTML = weath.main.humidity;
    pressure.innerHTML = weath.main.pressure;
    wind.innerHTML = weath.wind.speed;
    vis.innerHTML = weath.visibility;
    // ICON
    weathICON = weath.weather[0].icon;
    icon.innerHTML = `  <img src="http://openweathermap.org/img/wn/${weathICON}@4x.png" alt="" /> `; //  //  weath.weather[0].id;
  }

  // document.getElementById("result").innerHTML += htmlData;
}

loc1.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    searchw();
  }
});

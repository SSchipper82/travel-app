function updateTime() {
  let sacramentoElement = document.querySelector("#sacramento");
  let sacramentoDateElement = sacramentoElement.querySelector(".date");
  let sacramentoTimeElement = sacramentoElement.querySelector(".time");
  let sacramentoTime = moment().tz("America/Sacramento");

  sacramentoDateElement.innerHTML = moment().format("MMMM Do YYYY");

  sacramentoTimeElement.innerHTML = sacramentoTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let milanElement = document.querySelector("#milan");
  let milanDateElement = milanElement.querySelector(".date");
  let milanTimeElement = milanElement.querySelector(".time");
  let milanTime = moment().tz("Europe/Rome");

  milanDateElement.innerHTML = moment().format("MMMM Do YYYY");

  milanTimeElement.innerHTML = milanTime.format("h:mm:ss [<small>]A[</small>]");
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )}<small>${cityTime.format(" A ")}</small></div>
        </div>`;
}

updateTime();
setInterval(updateTime, 1000);

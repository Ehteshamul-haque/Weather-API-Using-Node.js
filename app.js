//request module
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geocode("Noida", (error, { longitude, latitude, address }) => {
  if (error) {
    console.log("Error ", error);
  } else {
    forecast(longitude, latitude, (error, {temprature,temp_description}) => {
      if (error) {
        console.log("Error " + error);
      } else {
        console.log(address + " Temprature is " + temprature + "\u00B0" + "C - "  + temp_description);
      }
    });
  }
});

// const url =
//   "http://api.weatherstack.com/current?access_key=a4cb5d863df1821546c8935de67ba935&query=55.364,-4.499&units=f";

// // request({url}, (error,response) => {
// //     const data = JSON.parse(response.body);
// //     console.log(data.current);
// //     const temp = "temperature : "
// //     fs.writeFileSync("weather.json",`${JSON.stringify(temp + data.current.temperature)}`);
// // } )
// request({ url, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to fetch the weather forecast!");
//   } else if (response.body.error) {
//     console.log("Unable to find the location!");
//   } else {
//     console.log(
//       `Current Temperature is ${response.body.current.temperature}\u00B0F,and the weather is seem to be ${response.body.current.weather_descriptions[0]}`
//     );
//   }
// });

// const geocoding =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angels.json?access_token=pk.eyJ1IjoiZWh0ZXNoYW0wMDAiLCJhIjoiY2t6MWZnZWt5MHhvODJvbzFsdGlhY3pmdyJ9.fyfGzapVD1nRkLKRGkC8yg";

// request({ url: geocoding, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to fetch the geocoding!");
//   } else if (response.body.message) {
//     console.log("Unable to find the longitude and latitude!");
//   } else {
//     const longitude = response.body.features[0].center[1];
//     const latitude = response.body.features[0].center[0];
//     console.log("longitude : " + longitude + "\n" + "latitude : " + latitude);
//   }
// });

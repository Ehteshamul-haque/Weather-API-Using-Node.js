const request = require("request");

const forecast = (longitude, latitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=a4cb5d863df1821546c8935de67ba935&query=" +
    longitude +
    "," +
    latitude;
  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback("Unable to fetch the weather forecast.", undefined);
    } else if (body.error) {
      callback(undefined, "Unable to get latitude and longitutde.");
    } else {
      callback(undefined, {
        temprature: body.current.temperature,
        temp_description:  body.current.weather_descriptions[0],
      });
    }
  });
};

module.exports = forecast;

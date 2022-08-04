const request = require("request");
const geocode = (address, callback) => {
    const url =
      "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
      encodeURIComponent(address) +
      ".json?access_token=pk.eyJ1IjoiZWh0ZXNoYW0wMDAiLCJhIjoiY2t6MWZnZWt5MHhvODJvbzFsdGlhY3pmdyJ9.fyfGzapVD1nRkLKRGkC8yg";
    request({ url, json: true }, (error, { body } = {}) => {
      if (error) {
        callback("Unable to fetch the geocoding!", undefined);
      } else if (body.message) {
        callback("Unable to find the longitude and latitude!", undefined);
      } else {
        const data = {
          longitude: body.features[0].center[1],
          latitude: body.features[0].center[0],
          address: body.features[0].place_name,
        };
        callback(undefined, data);
      }
    });
  };

  module.exports = geocode;
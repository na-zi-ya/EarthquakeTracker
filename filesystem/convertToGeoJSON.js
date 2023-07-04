const fs = require("fs");

const earthquakeData = require("./earthquakeData.json");

const convertToGeoJSON = () => {
  const geojsonData = {
    type: "FeatureCollection",
    features: earthquakeData.Infogempa.gempa.map((quake) => ({
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: quake.Coordinates.split(",").map(Number),
      },
      properties: {
        name: quake.Wilayah,
        dateTime: quake.DateTime,
        magnitude: quake.Magnitude,
      },
    })),
  };

  fs.writeFile(
    "earthquakeData.geojson",
    JSON.stringify(geojsonData, null, 2),
    (err) => {
      if (err) throw err;
      console.log("GeoJSON file created successfully!");
    }
  );
};

convertToGeoJSON();

const mapHeight = { height: "calc(100vh - 56px)" };

const tileLayers = [
  // {
  //   id: 1,
  //   name: 'OpenStreetMap.BlackAndWhite',
  //   attribution:
  //     '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  //   url: 'https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png',
  //   checked: false
  // },
  {
    id: 2,
    name: "OpenStreetMap.Mapnik",
    attribution:
      '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    checked: false,
  },
  {
    id: 3,
    name: "GoogleStreets",
    attribution: "&copy; Google",
    url: "http://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
    checked: false,
  },
  {
    id: 4,
    name: "GoogleSatellite",
    attribution: "&copy; Google",
    url: "http://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
    checked: false,
  },
  {
    id: 5,
    name: "WorldImagery ",
    attribution:
      "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    checked: true,
  },
];

const tectonicPlatesStyle = {
  color: "orange",
  weight: 2,
};

export { mapHeight, tileLayers, tectonicPlatesStyle };

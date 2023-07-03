import React from "react";
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  CircleMarker,
  Popup,
  FeatureGroup,
  LayersControl,
} from "react-leaflet";
import tectonicPlates from "./PB2002_boundaries.json";
import "leaflet/dist/leaflet.css";
import { mapHeight, tectonicPlatesStyle, tileLayers } from "./tileLayer";

function Map() {
  const circleMarkerColor = (magnitude) => {
    if (magnitude <= 1) return "#00b800";
    if (magnitude > 1 && magnitude <= 2) return "#b6fe00";
    if (magnitude > 2 && magnitude <= 3) return "#1cb981";
    if (magnitude > 3 && magnitude <= 5) return "#ff9000";
    if (magnitude > 5 && magnitude <= 7) return "#fedf17";
    return "#A30000";
  };

  return (
    <MapContainer center={[28.629093900641998, 77.09749706089497]} zoom={3}>
      <LayersControl position="topright">
        {tileLayers.map(({ id, name, attribution, url, checked }) => (
          <LayersControl.BaseLayer key={id} name={name} checked={checked}>
            <TileLayer attribution={attribution} url={url} />
          </LayersControl.BaseLayer>
        ))}
        <LayersControl.Overlay name="Tectonic Plates">
          <GeoJSON data={tectonicPlates} style={tectonicPlatesStyle} />
        </LayersControl.Overlay>
      </LayersControl>
      {/* <GeoJSON data={tectonicPlates} /> */}
      {/* <GeoJSON data={geoJson} style={geoJSONStyle} /> */}

      <FeatureGroup color="purple">
        <Popup>
          <p>
            DateTime: Tuesday, 4 July 2023 (IST)Time in Hyderabad, Telangana
          </p>
          <p>Name: Naziya</p>
          <p>Magnitude: 3.0</p>
          <p>Latitude: 17.385044</p>
          <p>Longtitude: 78.486671</p>
        </Popup>
        {/* <Circle
                center={[
                  feature.geometry.coordinates[1],
                  feature.geometry.coordinates[0]
                ]}
                fillColor="#ff7800"
                radius={200}
                color={"#000"}
                weight={1}
                opacity={1}
                fillOpacity={0.8}
              /> */}
        <CircleMarker
          // center={feature.geometry.coordinates[0,1]}
          center={[17.385044, 78.486671]}
          radius={12}
          fillColor={circleMarkerColor(7)}
          weight={0.5}
          opacity={1}
          fillOpacity={0.8}
        ></CircleMarker>
      </FeatureGroup>
    </MapContainer>
  );
}

export default Map;

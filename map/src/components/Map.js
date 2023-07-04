import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON, CircleMarker, Popup, FeatureGroup, LayersControl } from "react-leaflet";
import tectonicPlates from './PB2002_boundaries.json';
import data from '../geojson.json';
import "leaflet/dist/leaflet.css";
import { tectonicPlatesStyle, tileLayers } from './tileLayer';


function Map() {
  const [geoJson, setGeoJson] = useState([]);

  console.log(geoJson);

  useEffect(() => {
    setGeoJson(data);
  }, [data]);

  const circleMarkerColor = (magnitude) => {
    if (magnitude <= 1) return '#00b800';
    if (magnitude > 1 && magnitude <= 2) return '#b6fe00';
    if (magnitude > 2 && magnitude <= 3) return '#f6ff00';
    if (magnitude > 3 && magnitude <= 5) return '#ffcf00';
    if (magnitude > 5 && magnitude <= 7) return '#ff9000';
    return '#ff0000';
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
          <GeoJSON
            data={tectonicPlates}
            style={tectonicPlatesStyle}
          />
        </LayersControl.Overlay>
      </LayersControl>
      {/* <GeoJSON data={tectonicPlates} /> */}
      {/* <GeoJSON data={geoJson} style={geoJSONStyle} /> */}
      {geoJson.features?.map((feature, index) => {
          return (
            <FeatureGroup color="purple" key={index}>
              <Popup>
                <p>DateTime: {feature.properties.dateTime}</p>
                <p>Wilayah: {feature.properties.name}</p>
                <p>Magnitude: {feature.properties.magnitude}</p>
                <p>Latitude: {feature.geometry.coordinates[0]}</p>
                <p>Longtitude: {feature.geometry.coordinates[1]}</p>
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
    center={[
      feature.geometry.coordinates[1], // latitude
      feature.geometry.coordinates[0], // longitude
    ]}
    radius={12}
    fillColor={circleMarkerColor(feature.properties.magnitude)}
    weight={0.5}
    opacity={1}
    fillOpacity={0.8}>
    </CircleMarker>
             
            </FeatureGroup>
          );
        })}
    </MapContainer>
  );
}

export default Map;

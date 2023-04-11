
import React from "react";
import Map, {Source, Layer} from 'react-map-gl';
const MapComponent = ({center}) => {

  const geojson = {
    type: 'FeatureCollection',
    features: [
      {type: 'Feature', geometry: {type: 'Point', coordinates: [center.longitude, center.latitude]}}
    ]
  };
  
  const layerStyle = {
    id: 'point',
    type: 'circle',
    paint: {
      'circle-radius': 10,
      'circle-color': 'red'
    }
  };
  
    return (
      <Map
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_KEY}
      style={{width: "100%", height: "100%"}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
       initialViewState={{
        longitude: center.longitude,
        latitude:center.latitude,
        zoom: 14
      }}>
        <Source id="my-data" type="geojson" data={geojson}>
          <Layer {...layerStyle} />
        </Source>
      </Map>
  
  )
}
export default MapComponent
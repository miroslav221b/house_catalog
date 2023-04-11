
import React from "react";
import Map, {Source, Layer} from 'react-map-gl';
import style from '../style/components/Map.module.scss'
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
      <div className={style.map}>
        <div className={style.title}>Choosed Home is here:</div>
        <Map
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_KEY}
        // style={{
        //   width: "75%",
        //   height: "100%",
        //   marginRight: "auto",
        //   marginLeft: "auto",
        // }}
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
      </div>
  
  )
}
export default MapComponent
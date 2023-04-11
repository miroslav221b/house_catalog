
import React, { useEffect, useState } from "react";
import { Map } from "react-map-gl";
const MapComponent = ({center}) => {
    const [view,setView] = useState({
        longitude: -100,
        latitude: 40,
        zoom: 1
      })
    return (
        <Map
        mapboxAccessToken="pk.eyJ1IjoibWlyZWsyMjFiIiwiYSI6ImNsZ2J6dThqZjFlZXgzZHJ2Ym40MGd1ZGYifQ.pptXW19bt15B1xnlD2o6Ng"
        initialViewState={{
          longitude: -100,
          latitude: 40,
          zoom: 3.5
        }}
        style={{width: "100%", height: "100%"}}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />
  )
}
export default MapComponent
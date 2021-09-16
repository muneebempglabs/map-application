import ReactMapGL from "react-map-gl"
import { useState } from "react"

export default function Home() {
  const [viewport, setviewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: "100vw",
    height: "100vh",
    zoom: 8
  });

  return (
    <>
    <ReactMapGL 
    {...viewport} 
    mapStyle='mapbox://styles/muneebempg/cktmqd6yrac3117p572pu7gis'
    mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
    onViewportChange={viewport=>{
      setviewport(viewport)
    }}
    >
      markers here
    </ReactMapGL>
    </>
  )
}

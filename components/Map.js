import * as React from 'react';
import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import {getCenter} from 'geolib';

const Map = ({searchResults}) => {

   const [selectedLocation, setSelectedLocation] = useState({})
   
   const coordinates = searchResults.map(result => ({
      longitude : result.long,
      latitude : result.lat
   }))

   const center = getCenter(coordinates)

   const [viewport, setviewport] = useState({
      width : '100%' ,
      height : '100%' ,
      latitude: center.latitude,
      longitude: center.longitude,
      zoom: 11
   })



   return (
      <ReactMapGL
         mapStyle="mapbox://styles/razorteam78/ckta5khjc1hoj17qwxzpnp46d"
         mapboxApiAccessToken={process.env.mapbox_key}
         {...viewport}
         onViewportChange={(nextViewPort) => setviewport(nextViewPort)}
      >
         {searchResults.map(item => (
            <div key={item.long}>
               <Marker
                  longitude={item.long}
                  latitude={item.lat}
                  offsetLeft={-20}
                  offsetTop={-10}
               >
                  <p onClick={()=>setSelectedLocation(item)} className="cursor-pointer text-2xl">📌</p>
               </Marker>

               {selectedLocation.long === item.long ? (
                     <Popup
                        onClose={() => setSelectedLocation({})}
                        closeOnClick={true}
                        longitude={item.long}
                        latitude={item.lat}
                        className="z-50"
                     >
                        {item.title}
                     </Popup>
                  ) : (
                     false
                  )
               }
            </div>
         ))
         }

      </ReactMapGL>
   )
}

export default Map

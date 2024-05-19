import React, { useState, useEffect } from 'react'
import { GoogleMap, useLoadScript, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import axios from 'axios'


export const Mapview = () => {


  const [dataUrl, setDataUrl] = useState([]);

  const cargarData = async () => {

    const url = `http://localhost:3000/services-point`;
    const result = await axios.get(url);
    setDataUrl(result);
    
  }


  useEffect(() => {

    cargarData();

  }, []);


  const containerStyle = {
    width: '100%',
    height: '100vh'
  };
  
  const center = {
    lat: 14.736583,
    lng: -86.876543
  };


  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDdP92YtOPhgqhZUONsnP-KMOiMeypucZc"
  });

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map)=> {
    mapRef.current = map;
  },[]);
  
  if(loadError) return "Error";
  if(!isLoaded) return "Maps";
 
  return (

    <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={8}
        onLoad={onMapLoad}>
          {
            dataUrl.data.map((item) => ( 
              <MarkerF
                key={item.id}
                position={{ lat: item.location.x, lng: item.location.y }}
                title = {item.name}
              ></MarkerF> 
            ))

          }
      </GoogleMap>
  );

}
import React from 'react'
import MapView from 'react-native-maps';
export default function MapaView() {
  return (
    <MapView
    style={{flex:1}}
    initialRegion={{
      latitude: -8.83833,
      longitude: 13.2344,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />
  )
}

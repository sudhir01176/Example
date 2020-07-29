import React,{Component} from 'react'
import {View,Text} from 'react-native'
import MapView, { Marker } from 'react-native-maps'

export class Map extends Component{
    render(){
        return(
            <View style={{flex:1}}>
             <MapView
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />
            </View>
        )
    }
}

export default Map
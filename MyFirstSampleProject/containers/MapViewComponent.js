import React, { Component } from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import MapView,{Marker} from 'react-native-maps';
import FetchLocation from '../components/FetchLocation'
export default class MapViewComponent extends Component {
  state={
    userLocation:null
  }
  getUserLocation = ()=>{
    navigator.geolocation.getCurrentPosition(positon=>{
      // console.log(positon)
      this.setState({
        userLocation:{
          latitude:positon.coords.latitude,
          longitude:positon.coords.longitude,
          latitudeDelta:0.0022,
          longitudeDelta:0.0021
        }
      })
    },err=>console.log(err))
  }
  render() {
    let mapMarker = null
    if(this.state.userLocation!=null){
    mapMarker=<Marker coordinate={this.state.userLocation} />
    }
    return (
      <View style={styles.container}>
        <MapView region={this.state.userLocation} style={{width:'100%',height:'100%'}}>
          {mapMarker}
        </MapView>
        <FetchLocation onGetLocation={this.getUserLocation}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButton:{
    position: 'absolute',
    width: 20,
    height: 20,
    top: 10,
    left: 10,
    zIndex: 10,
    flex:1
  }
});

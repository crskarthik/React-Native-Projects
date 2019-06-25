import React from 'react'
import {Text,View} from 'react-native'
import Icons from 'react-native-vector-icons/MaterialIcons'

const fetchLocation = props =>{

    return (
        <View style={{bottom:20,position:"absolute",justifyContent:"center",alignItems:"center"}}>
    {/* <Button title="Get Location" onPress={props.onGetLocation}/> */}
    <Icons.Button
    name="my-location"
    onPress={props.onGetLocation}
    backgroundColor="#3b5998"
    style={{justifyContent:"center"}}>
        <Text style={{color:'white',fontFamily: 'sans-serif',fontSize:25}}>Current Location</Text>
        </Icons.Button>
    </View>
    )
}
export default fetchLocation
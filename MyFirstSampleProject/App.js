import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator,createAppContainer} from 'react-navigation'
import MapViewComponent from './containers/MapViewComponent';
import Icons from 'react-native-vector-icons/MaterialIcons'
class Home extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome!</Text>
        <Text>This Application is developed by Karthik!</Text>
        <Text>Feel free to open Maps tab below ;-)</Text>
        </View>
    );
  }
}
class MapsView extends Component {
  
  render() {
    return (
      <MapViewComponent/>
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
});

const App = createBottomTabNavigator(
  {
  Home:Home,
  MapsView:MapsView
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Icons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `home`;
        } else if (routeName === 'MapsView') {
          iconName = `map`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
)
export default createAppContainer(App)
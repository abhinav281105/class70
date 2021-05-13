import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import {createAppContainer} from 'react-navigation'; 
import {createBottomTabNavigator} from 'react-navigation-tabs'
import TransactionScreen from './screens/BookTransaction'
import SearchScreen from './screens/SearchScreen'


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
  <AppContainer/>
      </View>
    )
  }
}

const TabNavigator= createBottomTabNavigator({
    Search:{screen:SearchScreen},
  Transaction:{screen:TransactionScreen},
 defaultNavigationOptions:({navigation})=>({
   tabBarIcon:()=>{
     const routeName = navigation.state.routeName
     if (routeName==="Transaction"){
       return(
         <Image 
         source={require("./assets/snack-icon.png")}>
       )
     }
   }
 }) 

})
const AppContainer=createAppContainer(TabNavigator)


const styles=StyleSheet.create({
  container:{
    flex:1,
 
  }
})


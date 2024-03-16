import React, { Component } from 'react'
import { Text, View,StyleSheet, Image } from 'react-native'

//  import Animatable 
import * as Animatable from 'react-native-animatable';

const Home =() =>{

return (

    <Animatable.View animation="zoomIn" style={styles.container}>
  
    <Animatable.Text animation='bounceInDown' style={styles.Welcome}>Welcome</Animatable.Text>

    <Animatable.Text animation='fadeInDownBig' style={styles.Home}>Home Screen</Animatable.Text>

    <Animatable.Image animation='zoomInRight' style={styles.Subcribe} source={require('../Home/Subcribe.png')}></Animatable.Image>

    
    </Animatable.View>
    
)
};

const styles = StyleSheet.create({

container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    },
    

//---------- Welcome Text --------------
Welcome: {
    fontSize: 80,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#000',
    marginTop: 40,
  },


//---------- Home Screen Text ----------
Home: {
    fontSize: 40,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10,
  },

//---------- Subcribe Image ------------
Subcribe:{
    alignSelf:'center',
    marginLeft:110,
    marginTop:-50,
}
 
  });
export default Home

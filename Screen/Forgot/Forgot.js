import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

// import Vector Icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

// import Animation
import * as Animatable from 'react-native-animatable';

const Forgot = ({ navigation }) => {

// State
const [data, setData] = useState({
    email: '',
    check_textInputChange: false,
    isValidUser: true
  });

const textInputChange = (val) => {

  if (val.trim().length >= 4) {
  setData({
  ...data,
  email: val,
  check_textInputChange: true,
  isValidUser: true
 
  });
  }
  
  else 
  {
  setData({
  ...data,
  email: val,
  check_textInputChange: false,
  isValidUser: false
  
  });
  }
  }

return (

  <Animatable.View animation="zoomIn" style={styles.container}>
  
  <Text style={styles.forgotText}>Forgot</Text>
  
  <TouchableOpacity onPress={() => navigation.navigate('Login')}>
  
  <Ionicons style={styles.backArrow} name="chevron-back" size={30} />
  
  </TouchableOpacity>
  
  <Image style={styles.image} source={require('../Forgot/forgot.png')} />
  
  <Text style={styles.forgotPassword}>Forgot password?</Text>
  
  <Text style={styles.dontWorry}>Don’t worry! It happens. Please enter the email associated with your account</Text>
  
  <View>
  
  <Text style={styles.enterYourEmail}>Enter your email</Text>
  
  <TextInput style={styles.emailBox} placeholder="Enter your email" keyboardType="email-address"
   
  onChangeText={(val) => textInputChange(val)} />
  
  { data.check_textInputChange ?
  
  <Animatable.View animation="bounceIn">
  
  <Feather style={styles.emailIcon} name="check-circle" size={20} color="green" />
  
  </Animatable.View>
  
  : null }
  
  </View>

  <View>
        
  <TouchableOpacity style={styles.LoginButton} onPress={()=>navigation.navigate('Forgotverify')}>
          
  <Text style={styles.LoginText}>Get OTP</Text>
  
  </TouchableOpacity>
         
  </View>
  </Animatable.View>
  
  );
};

const styles = StyleSheet.create({

container: {
  flex: 1,
  backgroundColor: '#fff',
  padding: 20,
  },


//--------- Forgot Text -------------  
forgotText: {
  fontSize: 25,
  alignSelf: 'center',
  fontWeight: 'bold',
  color: '#000',
  marginTop: 5,
  },


//--------- Back Arrow -------------  
backArrow: {
  color: "#000",
  marginTop: -30,
  alignSelf: 'flex-start'
  },


//--------- Image Style -------------  
image: {
  alignSelf: 'center',
  },


//--------- Forgot Password ---------  
forgotPassword: {
  fontSize: 20,
  alignSelf: 'center',
  fontWeight: 'bold',
  marginTop: 20,
  color: '#000'
  },


//--------- Don't Worry -------------  
dontWorry: {
  textAlign: 'center',
  color: '#000',
  marginTop: 5
  },


//--------- Enter Email Text ---------  
enterYourEmail: {
  color: '#000',
  marginTop:50,
  },


//--------- Email TextBox ------------  
emailBox: {
  borderWidth: 1,
  width: '100%',
  borderRadius: 10,
  marginTop: 10,
  borderColor: '#D1D1D1',
  paddingLeft: 10,
  },


//--------- Email Icon --------------  
emailIcon: {
  position: 'absolute',
  top: -35,
  right: 10,
  },

  
//--------- Login Button -------------
LoginButton: {
  borderWidth: 1,
  width: "100%",
  height:45,
  borderRadius: 10,
  marginTop: 50,
  backgroundColor:'#000',
  paddingLeft: 10,
 },

//--------- Login Text -------------
LoginText:{
  marginTop:7,
  color:'#fff',
  fontWeight:'bold',
  fontSize:18,
  alignSelf:'center'
 },

});

export default Forgot;

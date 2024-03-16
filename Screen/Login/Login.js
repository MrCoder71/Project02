import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";

//  import Vector Icon
import Feather from 'react-native-vector-icons/Feather';

//  import Animatable 
import * as Animatable from 'react-native-animatable';

const Login = ({navigation}) => {

//  State
const [data, setData] = useState({
  email: '',
  password: '',
  check_textInputChange: false,
  secureTextEntry: true,
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

  else {
  setData({
  ...data,
  email: val,
  check_textInputChange: false,
  isValidUser: false
  });
  }
  }

const handlePasswordChange = (val) => {
  setData({
  ...data,
  password: val
  });
  }

const updateSecureTextEntry = () => {
  setData({
  ...data,
  secureTextEntry: !data.secureTextEntry
  });
  }

return (

  <Animatable.View animation="zoomIn" style={styles.container}>
  
  <Text style={styles.loginText}>Login</Text>
  
  <View>

  <Text style={styles.Enteryouremail}>Enter your email</Text>

  <TextInput style={styles.EmailBox} placeholder="Enter your email" keyboardType="email-address" onChangeText={(val) => textInputChange(val)} />
       
  {data.check_textInputChange ?
  
  <Animatable.View animation="bounceIn">
  
  <Feather style={styles.Emailicon} name="check-circle" size={20} color="green" />
  
  </Animatable.View>
  
  : null}
  
  </View>
  
  <View>
  
  <Text style={styles.Enteryourpassword}>Enter your password</Text>
  
  <TextInput style={styles.PasswordBox} secureTextEntry={data.secureTextEntry} placeholder="Enter your password" onChangeText={(val) => handlePasswordChange(val)} />
   
  <TouchableOpacity onPress={updateSecureTextEntry}>
  
  <Feather style={styles.Passwordicon} name={data.secureTextEntry ? "eye-off" : "eye"} size={20} color="green" />
  
  </TouchableOpacity>
  
  </View>

  <TouchableOpacity onPress={()=>navigation.navigate('Forgot')}>
  
  <Text style={styles.Forgotpassword}>Forgot Password?</Text>
  
  </TouchableOpacity>

  <View>
        
  <TouchableOpacity style={styles.LoginButton} onPress={() => navigation.navigate('Home')}>
          
  <Text style={styles.LoginText}>Login</Text>
  </TouchableOpacity>
         
  </View>

  <View style={{alignSelf:'center'}} >

  <Text style={styles.Dontaccount}>Don't have an account?</Text>

  <TouchableOpacity onPress={() => navigation.navigate('Register')}>

  <Text style = {styles.Signup}>Signup</Text>

  </TouchableOpacity>

  </View>

  <Text style={styles.Or}>Or</Text>

  <View>
      
  <TouchableOpacity style={styles.Google}>
          
  <View style={{alignSelf:'center'}}>

  <Text style={styles.GoogleText}>Continue With Google</Text>

  <Image style={styles.GoogleLogo} source={require('../Login/Google.png')}/>

  </View>
  </TouchableOpacity>
         
  </View>

  <View>
        
  <TouchableOpacity style={styles.Apple}>
        
  <View style={{alignSelf:'center'}}>

  <Text style={styles.AppleText}>Continue With Apple</Text>

  <Image style={styles.AppleLogo} source={require('../Login/Apple.png')}/>

  </View>
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


//---------- Login Text --------------
loginText: {
    fontSize: 25,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10,
  },


//---------- Enter You Email ---------
Enteryouremail: {
    marginTop: 120,
    color: '#000',
  },


//---------- Email Box ---------------
EmailBox: {
    borderWidth: 1,
    width: '100%',
    borderRadius: 10,
    marginTop: 10,
    borderColor: '#D1D1D1',
    paddingLeft: 10,
  },


//--------- Email Icon Style ---------
Emailicon: {
    position: 'absolute',
    top: -35,
    right: 10,
  },


//--------- Enter You Password --------
Enteryourpassword: {
    marginTop: 20,
    color: '#000',
  },

//--------- Password TextBox -----------
PasswordBox: {
    borderWidth: 1,
    width: '100%',
    borderRadius: 10,
    marginTop: 10,
    borderColor: '#D1D1D1',
    paddingLeft: 10,
  },

//--------- Password Icon -------------
Passwordicon: {
    position: 'absolute',
    top: -35,
    right: 10,
  },


//--------- Forgot Password ------------
Forgotpassword:{
  fontWeight:'bold',
  alignSelf:'flex-end',
  marginTop:10,
  color:'#000'
},


//--------- Login Button -------------
LoginButton: {
  borderWidth: 1,
  width: "100%",
  height:45,
  borderRadius: 10,
  marginTop: 20,
  backgroundColor:'#000',
  paddingLeft: 10,
},

//--------- Login Text -------------
LoginText:{
  marginTop:5,
  color:'#fff',
  fontWeight:'bold',
  fontSize:18,
  alignSelf:'center'
},


//--------- Don't Have An Account ---
Dontaccount:{
  marginTop:40,
  color:'#000',
},

//--------- Signup Text -------------
Signup:{
  marginTop:-20,
  marginLeft:145,
  color:"#000",
  fontWeight:'bold'
},

//--------- OR Text ------------------
Or:{
  alignSelf:'center',
  fontWeight:'bold',
  color:'#000',
  marginTop:30,
},


//--------- Google TextBox ------------
Google: {
  borderWidth: 1,
  width: "100%",
  height:45,
  borderRadius: 10,
  marginTop: 30,
  backgroundColor:'#FFF',
  paddingLeft: 10,
},


//--------- Google Text ----------------
GoogleText:{
  color:'#000',
  fontWeight:'bold',
  marginTop:10,
  marginLeft:40,
  fontSize:15
},


//--------- Google Logo ----------------
GoogleLogo:{
  marginTop:-20
},


//--------- Apple TextBox --------------
Apple: {
  borderWidth: 1,
  width: "100%",
  height:45,
  borderRadius: 10,
  marginTop: 30,
  backgroundColor:'#FFF',
  paddingLeft: 10,
},


//--------- Apple Text ---------------
AppleText:{
  color:'#000',
  fontWeight:'bold',
  marginTop:10,
  marginLeft:40,
  fontSize:15
},


//--------- Apple Logo ---------------
AppleLogo:{
  marginTop:-22,
}
});

export default Login;

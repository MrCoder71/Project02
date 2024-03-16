import React, { useRef } from 'react';
import { View, Button ,TouchableOpacity,StyleSheet,Text,Image} from 'react-native';

// import Vector Icon
import Ionicons from 'react-native-vector-icons/Ionicons';

// Import Animation
import * as Animatable from 'react-native-animatable';

// import OTP Text Input
import OTPTextInput from 'react-native-otp-textinput'

const Forgotverify = ({navigation}) => {

const otpInput = useRef(null);

const setText = () => {

if (otpInput.current) {

otpInput.current.setValue("1234");

}
}

return (

  <Animatable.View style={styles.container}>
  
  <Text style={styles.Verify}>Verify</Text>
  
  <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
  
  <Ionicons style={styles.backArrow} name="chevron-back" size={30} />
  
  </TouchableOpacity>
  
  <Image style={styles.image} source={require('../Forgotverify/Forgotverify.png')} />
  
  <Text style={styles.EnterOTP}>Enter OTP</Text>
  
  <Text style={styles.OTPText}> An 4 digit OTP has been sent to Email</Text>

  <View style={{marginTop:20}}>
  
  <OTPTextInput  ref={otpInput} style={styles.OTP} focusedBorderColor={'red'}  />
  
  </View>
  
  <TouchableOpacity style={styles.VerifyButton} onPress={()=>navigation.navigate('Login')}>
          
  <Text style={styles.VerifyText}>Verify</Text>
  
  </TouchableOpacity>
  
  </Animatable.View>
  
);
}

const styles = StyleSheet.create({
    
container: {
  flex: 1,
  backgroundColor: '#fff',
  padding: 20,
  },


//------------ Verify  ---------------
Verify: {
  fontSize: 25,
  alignSelf: 'center',
  fontWeight: 'bold',
  color: '#000',
  marginTop: 5,
  },


//------------ Back Arrow  -------------
backArrow: {
  color: "#000",
  marginTop: -30,
  alignSelf: 'flex-start'
  },


//------------ Image  ------------------
image: {
  alignSelf: 'center',
  marginTop:30,
  },


//------------ Enter OTP  ----------------
EnterOTP: {
  fontSize: 20,
  alignSelf: 'center',
  fontWeight: 'bold',
  marginTop: 20,
  color: '#000'
  },
 

//------------ OTP Text ---------------
OTPText: {
  textAlign: 'center',
  color: '#000',
  marginTop: 5
  },

  
//--------- Verify Button -------------
VerifyButton: {
    borderWidth: 1,
    width: "95%",
    height:45,
    borderRadius: 10,
    marginTop: 20,
    backgroundColor:'#000',
    alignSelf:'center'
  },
  

//--------- Verify Text -------------
VerifyText:{
  marginTop:7,
  color:'#fff',
  fontWeight:'bold',
  fontSize:18,
  alignSelf:'center'
  },


//--------- Verify TextInput ----------
OTP:{
  borderWidth:1,
  borderRadius:10,
  height:50,
  width:50,
  borderColor: '#D1D1D1',
  margin:20,
  textAlign:'center'
},

})

export default Forgotverify;

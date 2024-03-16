import React from 'react';
import { StatusBar } from 'react-native';

// Import Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Import Screen
import Login from './Screen/Login/Login';
import Register from './Screen/Register/Register';
import Forgot from './Screen/Forgot/Forgot';
import Forgotverify from './Screen/Forgotverify/Forgotverify';
import Home from './Screen/Home/Home';

const Stack = createNativeStackNavigator();

const App = () => {

  return (

    <NavigationContainer>

    <StatusBar backgroundColor="#fff" barStyle="dark-content" />

    <Stack.Navigator>
        
      <Stack.Screen name = "Login" component = {Login} options={{ headerShown: false }} />
        
      <Stack.Screen name = "Register" component={Register} options={{ headerShown: false }} />

      <Stack.Screen name = "Forgot" component={Forgot} options={{headerShown:false}}/>

      <Stack.Screen name = "Forgotverify" component={Forgotverify} options={{headerShown:false}}/>

      <Stack.Screen name = "Home" component={Home} options={{headerShown:false}}/>

      
    </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;

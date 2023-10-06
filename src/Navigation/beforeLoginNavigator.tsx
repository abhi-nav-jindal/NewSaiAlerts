import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Route} from './constants';
import LoginScreen from '../Screens/BeforeLogin/Login';
import ForgetScreen from '../Screens/BeforeLogin/ForgetScreen';
import OtpScreen from '../Screens/BeforeLogin/OtpScreen';

const BeforeLoginStack = createNativeStackNavigator();

const BeforeLoginNavigator = () => {
  return (
    <BeforeLoginStack.Navigator screenOptions={{headerShown: false}}>
      <BeforeLoginStack.Screen name={Route.Login} component={LoginScreen} />
      <BeforeLoginStack.Screen name={Route.Forget} component={ForgetScreen} />
      <BeforeLoginStack.Screen name={Route.Otp} component={OtpScreen} />
    </BeforeLoginStack.Navigator>
  );
};

export default BeforeLoginNavigator;

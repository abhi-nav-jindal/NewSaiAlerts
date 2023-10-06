import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {useSelector} from 'react-redux';

//user-define Import files
import HomeScreen from '../Screens/AfterLogin/Homepage';
import AttendSelection from '../Screens/AfterLogin/AttendSelection';
import {Route} from './constants';
import ViewFullImage from '../Screens/AfterLogin/ViewFullImage';
import CommentingScreen from '../Screens/AfterLogin/CommentingScreen';

const AfterLoginStack = createNativeStackNavigator();

const AfterLoginNavigator = () => {
//   const selectionHeader = useSelector(
//     (state: any) => state.SelectionHeaderReducer,
//   );
//   console.log('Selection Header Type:  ', selectionHeader?.type);
  return (
    <AfterLoginStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={
        // selectionHeader?.type != null ? Route.AttendSelection : Route.Home
        Route.Home
      }>
      <AfterLoginStack.Screen name={Route.Home} component={HomeScreen} />
      <AfterLoginStack.Screen
        name={Route.AttendSelection}
        component={AttendSelection}
      />
      <AfterLoginStack.Screen
        name={Route.ViewFullImage}
        component={ViewFullImage}
      />
      <AfterLoginStack.Screen
        name={Route.CommentScreen}
        component={CommentingScreen}
      />
    </AfterLoginStack.Navigator>
  );
};

export default AfterLoginNavigator;

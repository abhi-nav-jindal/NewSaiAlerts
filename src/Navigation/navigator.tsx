import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {useDispatch, useSelector} from 'react-redux';

//user-define Import files
import NavigationService from './NavigationService';
import * as Storage from '../Services/AsyncStoreConfig';
import LoaderScreen from '../Components/Loader';
import AfterLoginNavigator from './afterLoginNavigator';
import BeforeLoginNavigator from './beforeLoginNavigator';
// import {Get_Login, Loader} from '../Redux/types';
// import {
//   notificationListener,
//   requestUserPermission,
// } from '../Services/NotificationService';
import {Route} from './constants';

const RootStack = createNativeStackNavigator();

const Navigator = () => {
  // const loginRecord = useSelector((state: any) => state.loginReducer);
  // const dispatch = useDispatch<any>();

  // useEffect(() => {
  //   dispatch(requestUserPermission());
  //   dispatch(notificationListener());
  //   isLoginUser('USER_ID');
  // }, []);

  // const isLoginUser = async (key: string) => {
  //   const user = await Storage.getData(key);
  //   if (user) {
  //     dispatch({
  //       type: Get_Login,
  //       payload: JSON.parse(user),
  //     });
  //   } else {
  //     dispatch({
  //       type: Loader,
  //       payload: true,
  //     });
  //   }
  // };

  return (
    <NavigationContainer
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        {/* {!loginRecord?.hideProgress && ( */}
        {/* <RootStack.Screen name={Route.Loader} component={LoaderScreen} /> */}
        {/* )} */}
        {/* {loginRecord?.hideProgress && loginRecord?.authStatus ? ( */}
        {/* <RootStack.Screen
          name={Route.AppStack}
          component={AfterLoginNavigator}
        /> */}
        {/* ) : ( */}
        <RootStack.Screen
            name={Route.AuthStack}
            component={BeforeLoginNavigator}
          />
        {/* )} */}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

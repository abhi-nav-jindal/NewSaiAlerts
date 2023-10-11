import {ApiConfig} from '../../Services/Api';
import {BaseUrl, optVerifyURL} from '../../Services/ApiConfig';
import {Logout_Failure, OTP_Verify} from '../types';
import * as Storage from '../../Services/AsyncStoreConfig';

import {Alert} from 'react-native';
import NavigationService from '../../Navigation/NavigationService';

import {Route} from '../../Navigation/constants';
import {logoutAction} from './login';

export function optVerify(data: any, userInfo: any) {
  return (dispatch: any) => {
    const url = BaseUrl + optVerifyURL;
    new ApiConfig()
      .postJSON(url, data)
      .then((res: any) => {
        console.log('OTP Verify Response: ', res);
        if (res?.status == 200) {
          Storage.saveData('USER_ID', JSON.stringify(userInfo));
          dispatch({
            type: OTP_Verify,
            payload: userInfo,
          });
        } else {
          dispatch(logoutAction(userInfo?.data?.user_id));
          Alert.alert('Alert', 'Invalid OTP');
          NavigationService.navigate(Route.AuthStack, {screen: Route.Login});
        }
      })
      .catch(err => {
        console.log('OTP Verify Error', userInfo);
        dispatch({
          type: Logout_Failure,
          payload: true,
        });
      });
  };
}

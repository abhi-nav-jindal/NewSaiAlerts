import {Alert} from 'react-native';
import {ApiConfig} from '../../Services/Api';
import {BaseUrl, logOutURL, loginURL} from '../../Services/ApiConfig';
import NavigationService from '../../Navigation/NavigationService';
import {
  Loading,
  Login_Failure,
  Login_Success,
  Logout_Success,
  OTP_Verify,
} from '../types';
import * as Storage from '../../Services/AsyncStoreConfig';
import {sendOtp} from './sendOtpAction';

const loginSuccess = (res: any) => ({
  type: Login_Success,
  payload: res,
});

const loginFailure = (res: any) => ({
  type: Login_Failure,
  payload: res,
});

const loading = (res: any) => ({
  type: Loading,
  payload: res,
});

export const loginAction = (data: any) => {
  return async (dispatch: any) => {
    const url = BaseUrl + loginURL;
    await new ApiConfig()
      .postJSON(url, data)
      .then((res: any) => res.json())
      .then((res: any) => {
        if (res?.data) {
          const otpData = {
            phone_number: res?.data?.mobile_number,
            country_code: res?.data?.country_code,
            via: 'sms',
          };
          dispatch(sendOtp(otpData));
          if (res?.data?.otp_status == 1) {
            NavigationService.navigate('BeforeLogin', {screen: 'Otp'});
            dispatch(loginSuccess(res));
          } else {
            console.log('User can not show OTP Screen', res?.data?.otp_status);
            Storage.saveData('USER_ID', JSON.stringify(res));
            dispatch(loading(res));
            dispatch({
              type: OTP_Verify,
              payload: res,
            });
          }
        } else {
          if (res?.message == 'User Id is Disabled !')
            Alert.alert('Alert', 'Invalid Credentials');
          else Alert.alert('Alert', 'User Already Login in Another Device');
          dispatch(loginFailure(false));
        }
      })
      .catch(err => {
        console.log('Login Error ' + err);
        Alert.alert('Alert', 'Something went wrong.');
        dispatch(loginFailure(false));
      });
  };
};

export const logoutAction = (user_id: string) => {
  return (dispatch: any) => {
    const url = BaseUrl + logOutURL;
    new ApiConfig()
      .deleteJSON(url, {user_id})
      .then(res => {
        console.log('Logout Response :', res);
        Storage.removeData('USER_ID');
        console.log('====================================');
        console.log('Logout Successfully');
        console.log('====================================');
        dispatch({
          type: Logout_Success,
          payload: true,
        });
      })
      .catch(err => {
        console.log('Logout Error :', err);
        dispatch({
          type: Login_Failure,
          payload: true,
        });
      });
  };
};

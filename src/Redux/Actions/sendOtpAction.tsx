import {ApiConfig} from '../../Services/Api';
import {BaseUrl, sendOtpURL} from '../../Services/ApiConfig';

export function sendOtp(data: any) {
  return (dispatch: any) => {
    const url = BaseUrl + sendOtpURL;
    new ApiConfig()
      .postJSON(url, data)
      .then((res: any) => res.json())
      .then(res => {
        console.log('Otp send Successfully: ', res);
      })
      .catch(err => {
        console.log('OTP Send Error ', err);
      });
  };
}

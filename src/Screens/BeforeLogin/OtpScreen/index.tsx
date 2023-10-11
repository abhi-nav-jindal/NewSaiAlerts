import {View, Image, Text, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import OTPInputView from '@twotalltotems/react-native-otp-input';

//user-define Import files
import {logo} from '../../../Utils/images';
import Button from '../../../Components/Button';
import {styles} from './styles';
import {optVerify} from '../../../Redux/Actions/otpVerifyAction';
import {Loader} from '../../../Components/Loader';
import {Logout_Failure} from '../../../Redux/types';

const OtpScreen = () => {
  const loginRecord = useSelector((state: any) => state.loginReducer);
  const dispatch = useDispatch<any>();
  const [otpData, setOtp] = useState<any>('');

  const verify = () => {
    dispatch({
      type: Logout_Failure,
      payload: false,
    });
    const data = {
      phone_number: loginRecord?.loginData?.data?.mobile_number,
      country_code: loginRecord?.loginData?.data?.country_code,
      token: otpData,
    };
    dispatch(optVerify(data, loginRecord?.loginData));
  };

  return (
    <KeyboardAwareScrollView>
      <SafeAreaView style={styles.container}>
        {/* <Loader visible={loginRecord?.isLoading} /> */}
        <View style={styles.headerView}>
          <Text style={styles.headerText}>SAI</Text>
          <Image source={logo} style={styles.img} />
        </View>
        <Text style={styles.otpVerify}>OTP Verification</Text>
        <Text style={styles.enterOtp}>Enter Otp Here</Text>
        <OTPInputView
          style={styles.otpContainer}
          code={otpData}
          pinCount={4}
          onCodeChanged={code => {
            console.log('Code: ', code);
            setOtp(code);
          }}
          autoFocusOnLoad={false}
          codeInputFieldStyle={styles.otpFilled}
          codeInputHighlightStyle={styles.otpInputHighlight}
        />
        <Button
          style={styles.verifyBtn}
          btnStyle={styles.btn}
          title="Verify"
          onPress={verify}
        />
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default OtpScreen;

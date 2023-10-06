import {View, Text, Image, Alert, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {TextInput} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';

//user-define files
import InputField from '../../../Components/TextInput';
import Button from '../../../Components/Button';
import {styles} from './styles';
import {logo} from '../../../Utils/images';
import {Loader} from '../../../Components/Loader';
import {Route} from '../../../Navigation/constants';
import {loginValidation} from '../../../Validation';

const LoginScreen = () => {
  const navigation = useNavigation<any>();
  // const dispatch = useDispatch<any>();
  // const loginData = useSelector((state: any) => state.loginReducer);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [textField, setTextFields] = useState({
    username: '',
    password: '',
  });

  const login = () => {
    const valid = loginValidation(textField);
    // if (valid) {
    //   dispatch({
    //     type: Login_Failure,
    //     payload: true,
    //   });
    //   Storage.getData('fcmToken')
    //     .then(res => {
    //       if (res) {
    //         dispatch(loginAction({...textField, deviceid: res}));
    //       } else {
    //         dispatch({
    //           type: Login_Failure,
    //           payload: false,
    //         });
    //         Alert.alert('Alert', 'Something went wrong');
    //       }
    //     })
    //     .catch(err => {
    //       console.log('Error: ', err);
    //       dispatch({
    //         type: Login_Failure,
    //         payload: false,
    //       });
    //     });
    // }
  };

  return (
    <KeyboardAwareScrollView>
      <SafeAreaView style={styles.container}>
        {/* <Loader visible={loginData?.isLoading} /> */}
        <View style={styles.logoView}>
          <Text style={styles.logoText}>SAI</Text>
          <Image source={logo} style={styles.logoImg} />
        </View>
        <View style={styles.textView}>
          <Text style={styles.textWelcome}>Welcome,</Text>
          <Text style={{fontSize: hp(3.5), color: '#737373'}}>
            Sign in to continue!
          </Text>
        </View>
        <View style={styles.inputView}>
          <InputField
            style={{marginVertical: hp(2)}}
            label="Username"
            onChangeText={(value: string) =>
              setTextFields((prev: any) => ({...prev, username: value}))
            }
          />
          <InputField
            label="Password"
            style={{marginVertical: hp(2)}}
            secureTextEntry={secureTextEntry}
            onChangeText={(value: string) =>
              setTextFields((prev: any) => ({...prev, password: value}))
            }
            right={
              <TextInput.Icon
                icon={secureTextEntry ? 'eye-off' : 'eye'}
                onPress={() => {
                  setSecureTextEntry(!secureTextEntry);
                }}
              />
            }
          />
          <View style={{alignItems: 'flex-end'}}>
            <Button
              disabled={true}
              title="Forgot Password?"
              btnStyle={{color: '#BF6739', fontSize: hp(2)}}
              onPress={() => {
                navigation.navigate(Route.Forget);
              }}
            />
          </View>

          <Button
            style={styles.loginBtn}
            btnStyle={{
              fontWeight: 'bold',
            }}
            title="Sign in"
            onPress={login}
          />
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;

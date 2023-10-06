import {Image, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

//user-define Import files
import {think} from '../../../Utils/images';
import EditText from '../../../Components/EditText';
import Button from '../../../Components/Button';
import {styles} from './styles';

const ForgetScreen = () => {
  return (
    <KeyboardAwareScrollView>
      <SafeAreaView style={styles.container}>
        <Text style={styles.headerText}>Forgot Password?</Text>
        <Image source={think} style={styles.img} resizeMode="contain" />
        <Text style={styles.text1}>
          Enter the mail address associated with your account
        </Text>
        <Text style={styles.text2}>
          We will email you a link to reset your password
        </Text>
        <EditText placeholder="Enter Email Address" style={styles.inputField} />
        <Button style={styles.sendBtn} btnStyle={styles.btn} title="Send" />
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default ForgetScreen;

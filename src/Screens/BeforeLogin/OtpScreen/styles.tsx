import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: hp(100),
    backgroundColor: '#FFF',
  },
  headerView: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: hp(4),
  },
  headerText: {
    fontSize: hp(8),
    fontWeight: 'bold',
    color: '#DC6745',
  },
  img: {
    height: hp(8),
    width: wp(18),
    resizeMode: 'contain',
  },
  otpVerify: {
    textAlign: 'center',
    marginTop: hp(6),
    fontSize: wp(10),
    color: 'black',
    fontWeight: 'bold',
  },
  enterOtp: {
    textAlign: 'center',
    fontSize: wp(7),
    marginVertical: hp(3),
  },
  otpContainer:{
    width: '60%',
    height: hp(10),
    alignSelf: 'center',
  },
  otpFilled:{
    borderRadius: wp(2),
    fontWeight: 'bold',
    borderWidth: wp(0.4),
    borderColor: 'grey',
    color: 'black',
  },
  otpInputHighlight:{
    borderColor: 'blue',
  },
  verifyBtn: {
    height: hp(6),
    backgroundColor: '#E56234',
    marginHorizontal: hp(6),
    marginTop: hp(4),
    borderRadius: wp(3),
  },
  btn: {
    color: '#FFFF',
    fontWeight: 'bold',
    fontSize: hp(3),
  },
  otpTextFieldView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

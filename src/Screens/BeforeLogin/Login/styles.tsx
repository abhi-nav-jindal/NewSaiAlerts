import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    height: hp(100),
  },
  logoView: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: hp(4),
    alignItems: 'center',
  },
  logoText: {
    fontSize: wp(20),
    fontWeight: 'bold',
    color: '#DC6745',
  },
  logoImg: {
    height: hp(10),
    width: wp(20),
    resizeMode: 'contain',
  },
  textView: {
    marginLeft: hp(3),
    marginTop: hp(4),
  },
  textWelcome: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: hp(5),
  },
  loginBtn: {
    height: hp(7),
    marginTop: hp(2),
    borderRadius: hp(1),
    backgroundColor: '#E56234',
  },
  inputView: {
    marginHorizontal: wp(10),
    marginTop: hp(6),
  },
});

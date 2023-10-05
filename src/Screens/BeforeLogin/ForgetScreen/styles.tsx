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
  headerText: {
    textAlign: 'center',
    fontSize: wp(8),
    fontWeight: 'bold',
    color: 'black',
    marginTop: hp(6),
  },
  img: {
    alignSelf: 'center',
    height: hp(20),
    width: wp(50),
    resizeMode: 'contain',
    marginVertical: hp(4),
  },
  text1: {
    fontSize: wp(7),
    width: wp(90),
    marginHorizontal: wp(4),
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
  text2: {
    fontSize: wp(5.5),
    marginHorizontal: wp(10),
    textAlign: 'center',
    marginVertical: hp(2),
  },
  sendBtn: {
    backgroundColor: '#E56234',
    height: hp(6.5),
    marginHorizontal: wp(8),
    width: wp(30),
    alignSelf: 'center',
    marginTop: hp(4),
    borderRadius: wp(2),
  },
  btn: {
    color: '#FFFF',
    fontWeight: 'bold',
    fontSize: hp(3.5),
  },
  inputField: {
    marginTop: hp(3),
    textAlign: 'center',
    marginHorizontal: wp(8),
    borderBottomWidth: wp(0.6),
    fontSize: hp(3.5),
    padding: 0,
    borderBottomColor: 'orange',
  },
});

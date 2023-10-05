import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  opacity: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: hp(2.5),
    color: '#FFFFFF',
  },
});

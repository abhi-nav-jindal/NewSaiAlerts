import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    width: wp(40),
    marginVertical: hp(2),
    paddingHorizontal: wp(2),
    paddingVertical:hp(1),
    borderRadius: wp(4),
    backgroundColor: '#FFF',
    flexDirection: "row",
    justifyContent: "center",
    alignItems:"center"
  },
  cartView: {
    // flexDirection: 'row',
    // flex: 0.9,
  },
  img: {
    height: hp(8),
    width: wp(12),
    resizeMode: 'contain',
  },
  activeView: {
    // height: hp(8),
    alignItems: 'center',
    flex: 1,
  },
  countText: {
    color: 'black',
    fontSize: hp(2.5),
  },
});

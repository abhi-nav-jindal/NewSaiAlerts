import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#E46125',
    paddingVertical:hp(2)
  },
  headerView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    height: hp(8),
    width: wp(16),
    resizeMode: 'contain',
  },
  headersView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    marginHorizontal: wp(2),
  },
  headerText: {
    fontSize: hp(4),
    fontWeight: 'bold',
    marginLeft: hp(2),
    color: '#FFFFFF',
  },
  headerBtn: {
    alignItems:"center",
    justifyContent:'center',
  },
  imgBtn: {
    height: hp(6),
    width: wp(12),
    resizeMode: 'contain',
  },
});

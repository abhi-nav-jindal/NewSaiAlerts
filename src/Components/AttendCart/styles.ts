import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAEBF6',
  },
  parentView: {
    marginVertical: hp(2),
    paddingTop: hp(2),
    backgroundColor: '#FFF',
    paddingHorizontal: wp(2),
  },
  commentView: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: hp(2),
    color: 'black',
    fontWeight: 'bold',
  },
  dateView: {
    flex: 1,
    alignItems: 'flex-end',
  },
  noDataView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  NoDataText: {
    fontSize: hp(2),
    color: 'grey',
  },
  img: {
    height: hp(30),
    width: '100%',
    resizeMode: 'cover',
    marginVertical: hp(4),
  },
});

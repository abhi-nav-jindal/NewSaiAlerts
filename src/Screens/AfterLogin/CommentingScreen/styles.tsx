import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: wp(5),
    marginVertical: hp(1),
  },
  box: {
    height: hp(21.5),
    width: wp(40),
    margin: hp(1),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(8),
    textAlign: 'center',
    color: 'black',
    paddingHorizontal: wp(1.5),
    paddingVertical: hp(1),
  },
  boxFont: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: hp(1.8),
    color: 'black',
  },
  AfterSelectionBox: {
    borderColor: 'black',
    borderWidth: wp(0.4),
    backgroundColor: '#D3D3D3',
  },
  AfterSelectionText: {
    color: 'black',
    fontWeight: 'bold',
  },
  GoBackBOx: {
    height: hp(5),
    padding: wp(2),
    borderRadius: wp(2),
    marginLeft: wp(2),
  },
  SubmitBox: {
    position: 'absolute',
    height: hp(5),
    padding: wp(3),
    borderRadius: wp(2),
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    bottom: hp(1.5),
  },
  goBackText: {
    color: 'black',
    fontWeight: 'bold',
  },
  ImgeStyle: {
    width: wp(5.5),
    height: hp(2.8),
  },
});

export default styles;

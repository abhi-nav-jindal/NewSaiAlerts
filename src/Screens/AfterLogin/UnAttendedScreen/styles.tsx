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
    backgroundColor: '#FFF',
    flex: 1,
    paddingHorizontal: wp(2),
  },
  text: {
    fontSize: hp(2.5),
    color: 'black',
    fontWeight: 'bold',
  },
  modelInput: {
    height: hp(18),
  },
  modelParentView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
  },
  modelView: {
    backgroundColor: 'white',
    borderRadius: hp(1),
    padding: hp(4),
    height: hp(35),
    width: wp(95),
    shadowColor: '#000',
    elevation: 5,
  },
  modelBtnView: {
    flexDirection: 'row',
    marginTop: hp(2.5),
    justifyContent:'space-between',
    paddingHorizontal:wp(8)
  },
  modelBtn: {
    backgroundColor: '#E56234',
    width: wp(25),
    borderRadius: hp(1),
    height: hp(5),
  },
  btn: {
    fontWeight: 'bold',
    fontSize: hp(2.5),
  },
  noDataFoundView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noDataText: {
    fontSize: hp(2),
    color: 'grey',
  },
  commentView: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  btnView: {
    flexDirection: 'row',
  },
  dateView: {
    flex: 1,
    alignItems: 'flex-end',
  },
  videoView:{
    height: hp(30),
    flex: 1,
    marginVertical: hp(3),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  img: {
    height: hp(30),
    width: '100%',
    resizeMode: 'cover',
    marginVertical: hp(2),
  },
  attendBtnOpacity: {
    flex: 1,
    height: hp(5),
    backgroundColor: '#E56234',
    borderRadius: wp(1),
    marginHorizontal: wp(2),
  },
  attendBtn: {
    fontSize: hp(2),
    fontWeight: 'bold',
  },
});

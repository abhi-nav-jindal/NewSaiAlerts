import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header1: {
    flex: 0.45,
  },
  imgView: {
    marginHorizontal: wp(5),
    marginTop: hp(3),
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
  },
  img: {
    height: hp(10),
    width: wp(24),
    resizeMode: 'contain',
  },
  profileBtnView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  nameTxt:{
    fontSize: hp(3),
    color: '#000',
    marginRight:wp(2)
  },
  profileImg: {
    height: hp(8),
    width: wp(16),
    resizeMode: 'contain',
  },
  headerTxtView:{
    marginHorizontal: wp(5),
    flexDirection: 'row',
  },
  headerTxtInnerView:{
    marginVertical: hp(2),
    width: wp(70),
  },
  headerTxt:{
    fontSize: hp(3),
    width: wp(70),
    color: 'black',
  },
  logoutBtn: {
    backgroundColor: '#FFFFFF',
    width: wp(20),
    height: hp(5),
    marginTop: hp(1),
    borderRadius: hp(1),
    borderColor: 'grey',
    elevation: 5,
    shadowOffset: {width: -2, height: 4},  
    shadowColor: '#171717',  
    shadowOpacity: 0.2,  
    shadowRadius: 3,  
  },
  cartParentView: {
    flex: 1,
    backgroundColor: '#E56135',
    borderTopLeftRadius: hp(10),
  },
  cartView1: {
    marginTop: hp(5),
  },
  cartView2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(5),
  },
});

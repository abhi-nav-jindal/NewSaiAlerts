import {
  View,
  Text,
  Image,
  BackHandler,
  TouchableOpacity,
  SafeAreaView,
  AppState,
} from 'react-native';
import React, {useState, useEffect} from 'react';

//user-define Import files
import {
  active,
  logo,
  profile,
  queue,
  stock,
  theft,
  sco,
  clutter,
  theftWhite,
  activeWhite,
  clutterWhite,
  stockWhite,
  queueWhite,
  scoWhite,
} from '../../../Utils/images';
import Cart from '../../../Components/Cart';
import Button from '../../../Components/Button';
import {styles} from './styles';
import {Loader} from '../../../Components/Loader';


import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const HomeScreen = () => {
//   const {authStatus} = useSelector((state: any) => state.loginReducer);
//   const {loading, countData} = useSelector(
//     (state: any) => state.dashboardCountReducer,
//   );
  // const navigation = useNavigation<any>();
  // const dispatch = useDispatch<any>();
  const [logoutBtn, setLogoutBtn] = useState<boolean>(false);

  useEffect(() => {
    // dispatch(dashboardCountAction());
  }, []);


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header1}>
        {/* <Loader visible={loading} /> */}
        <View style={styles.imgView}>
          <Image source={logo} style={styles.img} />
          <View style={styles.profileBtnView}>
            {/* <Text style={styles.nameTxt}>{authStatus?.data?.username}</Text> */}
            <TouchableOpacity
              onPress={() => {
                setLogoutBtn(!logoutBtn);
              }}>
              <Image source={profile} style={styles.profileImg} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.headerTxtView}>
          <View style={styles.headerTxtInnerView}>
            <Text
              style={[styles.headerTxt, {color: 'grey', fontSize: hp(2.5)}]}>
              Welcome to
            </Text>
            {/* <Text style={styles.headerTxt}>
              {authStatus?.data?.user_stores[0]?.name}
            </Text> */}
          </View>
          {logoutBtn ? (
            <Button
              // onPress={logout}
              style={styles.logoutBtn}
              btnStyle={{
                color: 'red',
              }}
              title="Logout"
            />
          ) : null}
        </View>
      </View>
      <View style={styles.cartParentView}>
        <View style={styles.cartView1}>
          <View style={styles.cartView2}>
            <Cart
              // onPress={() => {
              //   cartPress('Theft', theftWhite);
              // }}
              icon={theft}
            //   count={countData?.theft_count}
              type="Theft"
            />
            <Cart
              // onPress={() => {
              //   cartPress('Active', activeWhite);
              // }}
              icon={active}
            //   count={countData?.active_count}
              type="Active"
            />
          </View>
          <View style={styles.cartView2}>
            <Cart
              // onPress={() => {
              //   cartPress('Clutter', clutterWhite);
              // }}
              icon={clutter}
            //   count={countData?.clutter_count}
              type="Clutter"
            />
            <Cart
              // onPress={() => {
              //   cartPress('Stock', stockWhite);
              // }}
              icon={stock}
            //   count={countData?.stock_count}
              type="Stock"
            />
          </View>
          <View style={styles.cartView2}>
            <Cart
              // onPress={() => {
              //   cartPress('Queue', queueWhite);
              // }}
              icon={queue}
            //   count={countData?.queue_count}
              type="Queue"
            />
            <Cart
              // onPress={() => {
              //   cartPress('Theft', scoWhite);
              // }}
              icon={sco}
            //   count={countData?.queue_count}
              type="SCO"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

import React from 'react';
import {View, Image, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
// import {useSelector} from 'react-redux';

//user-define Import files
import AttendedScreen from '../AttendedScreen';
import UnAttendedScreen from '../UnAttendedScreen';
import {logo_White} from '../../../Utils/images';
import {styles} from './styles';

const Tab = createMaterialTopTabNavigator();

const AttendSelection = () => {
//   const navigation = useNavigation<any>();
//   const selectionHeader = useSelector(
//     (state: any) => state.SelectionHeaderReducer,
//   );

//   const {type, icon} = selectionHeader;

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.headersView}>
          <View style={styles.headerView}>
            {/* <Image source={icon} style={styles.img} />
            <Text style={styles.headerText}>{type}</Text> */}
          </View>
          <TouchableOpacity
            style={styles.headerBtn}
            // onPress={() => {
            //   navigation.replace('Home');
            // }}
            >
            <Image source={logo_White} style={styles.imgBtn} />
          </TouchableOpacity>
        </View>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: hp(2),
            width: wp(50),
            color: '#FFF',
            fontWeight: 'bold',
          },
          tabBarItemStyle: {marginHorizontal: wp(6)},
          tabBarStyle: {
            backgroundColor: '#F09059',
            elevation: 0,
          },
          tabBarIndicatorStyle: {backgroundColor: '#FFF'},
        }}>
        <Tab.Screen name="UnAttended" component={UnAttendedScreen} />
        <Tab.Screen name="Attended" component={AttendedScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default AttendSelection;

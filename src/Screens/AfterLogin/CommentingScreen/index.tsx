import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// user defined imports
// import {
//   attendedActiveUpdateURL,
//   attendedClutterUpdateURL,
//   attendedQueueUpdateURL,
//   attendedStockUpdateURL,
//   attendedTheftUpdateURL,
//   getAttendedActiveURL,
//   getAttendedClutterURL,
//   getAttendedQueueURL,
//   getAttendedStockURL,
//   getAttendedTheftURL,
//   getUnAttendedActiveURL,
//   getUnAttendedClutterURL,
//   getUnAttendedQueueURL,
//   getUnAttendedStockURL,
//   getUnAttendedTheftURL,
// } from '../../../Services/ApiConfig';
import {GoBack} from '../../../Utils/images';
// import {dataUpdateAction} from '../../../Redux/Actions/dataUpdateAction';
import styles from './styles';
import { data } from '../../../Common';
// import { data } from '../../../Common';

function CommentingScreen({route}: any) {
  const {items} = route.params;
  const navigation = useNavigation<any>();
  const [selectedBox, setSelectedBox] = useState<any>('');
  const selectionHeader = useSelector(
    (state: any) => state.SelectionHeaderReducer,
  );
  const loginRecord = useSelector((state: any) => state.loginReducer);
  const dispatch = useDispatch<any>();

  const {type} = selectionHeader;
  const {user_stores, user_id} = loginRecord?.authStatus?.data;

//   const done = () => {
//     switch (type) {
//       case 'Theft':
//         const TheftData = {
//           id: items?.id,
//           remarks: selectedBox?.label,
//           refillDatetime: new Date(),
//         };
//         const getTheft = {
//           user_id,
//           type: 'Theft',
//           storeId: user_stores[0]?.id,
//           getURL: getUnAttendedTheftURL,
//           get_filled_URL: getAttendedTheftURL,
//         };
//         dispatch(dataUpdateAction(TheftData, attendedTheftUpdateURL, getTheft));
//         break;
//       case 'Active':
//         const ActiveData = {
//           theft_id: items?.id,
//           remarks:  selectedBox?.label,
//         };
//         const getActive = {
//           user_id,
//           type: 'Active',
//           getURL: getUnAttendedActiveURL,
//           storeId: user_stores[0]?.id,
//           get_filled_URL: getAttendedActiveURL,
//         };
//         dispatch(
//           dataUpdateAction(ActiveData, attendedActiveUpdateURL, getActive),
//         );
//         break;
//       case 'Clutter':
//         const ClutterData = {
//           detail_id: items?.detail_id,
//           clutter_id: items?.id,
//           refillDatetime: new Date(),
//           remarks:  selectedBox?.label,
//         };
//         const getClutter = {
//           user_id,
//           type: 'Clutter',
//           getURL: getUnAttendedClutterURL,
//           get_filled_URL: getAttendedClutterURL,
//           storeId: user_stores[0]?.id,
//         };
//         dispatch(
//           dataUpdateAction(ClutterData, attendedClutterUpdateURL, getClutter),
//         );
//         break;
//       case 'Stock':
//         const stockData = {
//           detail_id: items?.detail_id,
//           stock_id: items?.id,
//           refillDatetime: new Date(),
//           remarks:  selectedBox?.label,
//         };
//         const getStock = {
//           user_id,
//           type: 'Stock',
//           getURL: getUnAttendedStockURL,
//           get_filled_URL: getAttendedStockURL,
//           storeId: user_stores[0]?.id,
//         };
//         dispatch(dataUpdateAction(stockData, attendedStockUpdateURL, getStock));
//         break;
//       case 'Queue':
//         const queueData = {
//           id: items?.id,
//           refilldatetime: new Date(),
//           remarks:  selectedBox?.label,
//         };
//         const getQueue = {
//           user_id,
//           type: 'Queue',
//           getURL: getUnAttendedQueueURL,
//           get_filled_URL: getAttendedQueueURL,
//           storeId: user_stores[0]?.id,
//         };
//         dispatch(dataUpdateAction(queueData, attendedQueueUpdateURL, getQueue));
//         break;
//     }
//     navigation.goBack();
//   };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.GoBackBOx}
        onPress={() => navigation.goBack()}>
        <Image source={GoBack} style={styles.ImgeStyle} />
      </TouchableOpacity>
      <View style={styles.row}>
        {data.map(box => {
          return (
            <TouchableOpacity
              style={[
                styles.box,
                {backgroundColor: box.color},
                selectedBox?.id === box.id && styles.AfterSelectionBox,
              ]}
              onPress={() => {
                setSelectedBox(box)
              }}
              key={box.id}>
              <Text
                style={[
                  styles.boxFont,
                  selectedBox?.id === box.id && styles.AfterSelectionText,
                ]}>
                {box.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <TouchableOpacity
        style={[
          styles.SubmitBox,
          {
            backgroundColor: selectedBox === '' ? '#fede81' : '#fcbf0f',
          },
        ]}
        disabled={selectedBox === ''}
        // onPress={done}
        >
        <Text style={styles.goBackText}>SUBMIT</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CommentingScreen;

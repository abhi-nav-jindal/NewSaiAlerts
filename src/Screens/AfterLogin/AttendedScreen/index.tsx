import {View, Text, FlatList} from 'react-native';
import React, {useEffect} from 'react';

//user-define Import files
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import AttendCart from '../../../Components/AttendCart';

import {
  getAttendedActiveURL,
  getAttendedClutterURL,
  getAttendedQueueURL,
  getAttendedStockURL,
  getAttendedTheftURL,
} from '../../../Services/ApiConfig';
import {Attended_Record_Failure} from '../../../Redux/types';
import {attendedAction} from '../../../Redux/Actions/attendedAction';

const AttendedScreen = () => {
  const dispatch = useDispatch<any>();
  const {filledData, loading} = useSelector(
    (state: any) => state?.filledReducer,
  );
  const loginRecord = useSelector((state: any) => state.loginReducer);
  const selectionHeader = useSelector(
    (state: any) => state.SelectionHeaderReducer,
  );

  const {user_id} = loginRecord?.authStatus?.data;
  const {type} = selectionHeader;

  useEffect(() => {
    console.log('Attended Record Fetch');
    dispatch({
      type: Attended_Record_Failure,
      payload: true,
    });
    switch (type) {
      case 'Theft':
        dispatch(attendedAction(user_id, getAttendedTheftURL, 'Theft'));
        break;
      case 'Active':
        dispatch(attendedAction(user_id, getAttendedActiveURL, 'Active'));
        break;
      case 'Clutter':
        dispatch(attendedAction(user_id, getAttendedClutterURL, 'Clutter'));
        break;
      case 'Stock':
        dispatch(attendedAction(user_id, getAttendedStockURL, 'Stock'));
        break;
      case 'Queue':
        dispatch(attendedAction(user_id, getAttendedQueueURL, 'Queue'));
        break;
    }
  }, []);

  return (
    <View style={styles.container}>
      {filledData?.length > 0 ? (
        <FlatList
          data={filledData}
          renderItem={({item, index}) => {
            return <AttendCart key={index} item={item} index={index} />;
          }}
        />
      ) : (
        <View style={styles.noDataView}>
          <Text style={styles.NoDataText}>Data is Not Available</Text>
        </View>
      )}
    </View>
  );
};

export default AttendedScreen;

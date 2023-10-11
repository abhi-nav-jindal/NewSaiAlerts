import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import VideoPlayer from 'react-native-video-controls';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

//user-define Import files
import {styles} from './styles';
import Button from '../../../Components/Button';
  import {
    getUnAttendedActiveURL,
    getUnAttendedClutterURL,
    getUnAttendedQueueURL,
    getUnAttendedStockURL,
    getUnAttendedTheftURL,
  } from '../../../Services/ApiConfig';
import LoaderScreen, {Loader} from '../../../Components/Loader';
import {UnAttended_Record_Failure} from '../../../Redux/types';
import {unAttendedAction} from '../../../Redux/Actions/unAttendedAction';
import {Route} from '../../../Navigation/constants';
import {UnAttended_Record_Fetch} from '../../../Redux/types';

const UnAttendedScreen = ({route}: any) => {
  const [loadings, setLoading] = useState(true);
  const dispatch = useDispatch<any>();
  const navigation = useNavigation<any>();
  const {unAttendedRecord, loading} = useSelector(
    (state: any) => state?.unAttendedReducer,
  );
  const {type} = useSelector((state: any) => state.SelectionHeaderReducer);
  useEffect(() => {
    console.log('Type:=====================', type);
    dispatch({
      type: UnAttended_Record_Failure,
      payload: true,
    });
    unAttendedRecordFetch();
  }, []);

  const unAttendedRecordFetch = () => {
    switch (type) {
      case 'Theft':
        dispatch(unAttendedAction(type, getUnAttendedTheftURL));
        break;
      case 'Active':
        dispatch(unAttendedAction(type, getUnAttendedActiveURL));
        break;
      case 'Clutter':
        dispatch(unAttendedAction(type, getUnAttendedClutterURL));
        break;
      case 'Stock':
        dispatch(unAttendedAction(type, getUnAttendedStockURL));
        break;
      case 'Queue':
        dispatch(unAttendedAction(type, getUnAttendedQueueURL));
        break;
    }
  };

  const attend = (item: any) => {
    navigation.navigate('Comment', {
      items: item,
    });
  };

  const UnAttendCart = (data: any) => {
    const {item, attendPress, index} = data;
    const [videoStatus, setVideoStatus] = useState(true);

    return (
      <View style={{paddingTop: hp(2), flex: 1}}>
        <View style={styles.commentView}>
          <Text style={styles.text}>{index + 1}</Text>
          <View style={styles.dateView}>
            <Text style={[styles.text, {fontSize: hp(2), color: 'grey'}]}>
              {item?.date}
            </Text>
            <Text style={[styles.text, {fontSize: hp(2), color: 'grey'}]}>
              {item?.time}
            </Text>
          </View>
        </View>
        {videoStatus ? (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(Route.ViewFullImage, {url: item?.image});
            }}>
            <ImageBackground
              source={{
                uri: item?.image,
              }}
              onLoadEnd={() => {
                setLoading(false);
              }}
              style={styles.img}>
              {loadings && <LoaderScreen />}
            </ImageBackground>
          </TouchableOpacity>
        ) : (
          <View style={styles.videoView}>
            <VideoPlayer
              disableVolume={true}
              disableBack={true}
              disableFullscreen={true}
              resizeMode="contain"
              source={{
                uri: item?.video,
              }}
            />
          </View>
        )}
        <View style={styles.btnView}>
          <Button
            title="ATTEND"
            style={styles.attendBtnOpacity}
            btnStyle={styles.attendBtn}
            onPress={attendPress}
          />
          {item?.video ? (
            <Button
              title="VIDEO"
              onPress={() => {
                setVideoStatus(false);
              }}
              style={styles.attendBtnOpacity}
              btnStyle={styles.attendBtn}
            />
          ) : (
            <Button
              title="Reload"
              onPress={unAttendedRecordFetch}
              style={styles.attendBtnOpacity}
              btnStyle={styles.attendBtn}
            />
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Loader visible={loading} />
      <View style={styles.parentView}>
          {unAttendedRecord.length > 0 ? (
            <FlatList
              style={{flex: 1}}
              data={unAttendedRecord}
              keyExtractor={(item, index) => String(index)}
              renderItem={({item, index}) => {
                return (
                  <UnAttendCart
                    key={item?.id}
                    item={item}
                    index={index}
                    attendPress={() => {
                      attend(item);
                    }}
                  />
                );
              }}
            />
          ) : (
            <View style={styles.noDataFoundView}>
              <Text style={styles.noDataText}>Data is Not Available</Text>
            </View>
          )}
        </View>
    </SafeAreaView>
  );
};

export default UnAttendedScreen;

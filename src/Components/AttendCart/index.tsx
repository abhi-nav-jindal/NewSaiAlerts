import {View, Text, ImageBackground} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//user-define Import files
import {styles} from './styles';
import LoaderScreen from '../Loader';

const AttendCart = (data: any) => {
  const {item, index} = data;
  const [loading, setLoading] = useState(true);

  return (
    <View style={styles.parentView}>
      <View style={styles.commentView}>
        <View style={{flex: 1}}>
          <Text style={styles.text}>{index + 1}</Text>
          <Text style={styles.text}>{item?.remarks}</Text>
        </View>
        <View style={styles.dateView}>
          <Text style={[styles.text, {fontSize: hp(2), color: 'grey'}]}>
            {item?.date}
          </Text>
          <Text style={[styles.text, {fontSize: hp(2), color: 'grey'}]}>
            {item?.time}
          </Text>
        </View>
      </View>
      <ImageBackground
        source={{uri: item?.image}}
        style={styles.img}
        onLoadEnd={() => {
          setLoading(false);
        }}>
        {loading ? <LoaderScreen /> : null}
      </ImageBackground>
    </View>
  );
};

export default AttendCart;

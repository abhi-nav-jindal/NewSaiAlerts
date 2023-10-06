import {View, TouchableOpacity, Image, Text} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//user-define Import files
import {styles} from './styles';

const Cart = (data: any) => {
  const {style, count, onPress, icon, type} = data;
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <View>
        <Image source={icon} style={styles.img} />
        <Text
          style={[styles.countText, {color: '#E56135', marginBottom: hp(1)}]}>
          {type}
        </Text>
      </View>
      <View style={styles.activeView}>
        <Text style={{fontSize: hp(2), color: '#8D8C8C'}}>Active</Text>
        <Text style={styles.countText}>{count}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Cart;

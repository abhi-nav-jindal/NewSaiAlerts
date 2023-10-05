import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

//user-define Import files
import {styles} from './styles';

const Button = (props: any) => {
  const {title, disabled, style, onPress, btnStyle} = props;
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.opacity, style]}
      onPress={onPress}>
      <Text style={[styles.buttonText, btnStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

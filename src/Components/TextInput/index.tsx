import React from 'react';
import {TextInput} from 'react-native-paper';

const InputField = (props: any) => {
  const {label, multiline, style, secureTextEntry, right, onChangeText} = props;
  return (
    <TextInput
      secureTextEntry={secureTextEntry}
      style={[style, {paddingVertical: 0}]}
      label={label}
      multiline={multiline}
      theme={{colors: {primary: 'red'}}}
      onChangeText={onChangeText}
      mode="outlined"
      right={right}
      autoCapitalize="none"
    />
  );
};

export default InputField;

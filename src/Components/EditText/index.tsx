import {TextInput} from 'react-native';
import React from 'react';

const EditText = (data: any) => {
  const {placeholder, keyboardType, onChangeText, ref, onSubmitEditing, style} =
    data;
  return (
    <TextInput
      placeholder={placeholder}
      style={style}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
      ref={ref}
      keyboardType={keyboardType}
    />
  );
};

export default EditText;

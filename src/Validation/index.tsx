import {Alert} from 'react-native';

const isValidAllFields = (props: object) => {
  const valid = Object.values(props)?.every(value => value?.trim());
  return valid;
};

const nameValidate = (name: string | any) => {
  const Name = name.trim();
  return Name.length ? true : false;
};

const passwordValidate = (pass: string) => {
  const Pass = pass.trim();
  return Pass.length ? true : false;
};

export const loginValidation = (data: any) => {
  const {username, password} = data;
  if (!isValidAllFields(data))
    return Alert.alert('Alert', 'Require All fields');
  if (!nameValidate(username)) return Alert.alert('Alert', 'Invalid Username');
  if (passwordValidate(password)) return true;
  else return Alert.alert('Alert', 'Invalid  Password');
};

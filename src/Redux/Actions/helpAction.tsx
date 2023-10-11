import {Alert} from 'react-native';
import {ApiConfig} from '../../Services/Api';
import {
  BaseUrl,
  add_Image_URl,
  help_Update_URL,
} from '../../Services/ApiConfig';
import {
  Add_Image_Action,
  Add_Image_Request,
  Failed_Image_Action,
  Login_Failure,
  Login_Request,
  Login_Success,
} from '../types';

export const helpAction = (data: any) => {
  return (dispatch: any) => {
    dispatch({
      type: Login_Request,
    });
    const url = BaseUrl + help_Update_URL;
    new ApiConfig()
      .postJSON(url, {
        store_id: data,
      })
      .then((res: any) => res.json())
      .then(res => {
        console.log(res);
        dispatch({
          type: Login_Success,
          payload: res.data,
        });
      })
      .catch((err: any) => {
        console.log(err);
        dispatch({type: Login_Failure});
      });
  };
};

export const addImageAction = (data: any) => {
  const {datetime, label, store_id} = data;
  return async (dispatch: any) => {
    dispatch({type: Add_Image_Request});
    const url = BaseUrl + add_Image_URl;
    await new ApiConfig()
      .postJSON(url, {
        datetime: datetime,
        label: label,
        store_id: store_id,
      })
      .then((res: any) => res.json())
      .then((res: any) => {
        dispatch({
          type: Add_Image_Action,
          payload: res,
        });
      })
      .catch((err: any) => {
        console.log(err);
        Alert.alert('Err', err);
        dispatch({
          type: Failed_Image_Action,
        });
      });
  };
};

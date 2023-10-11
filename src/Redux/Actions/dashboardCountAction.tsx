import {ApiConfig} from '../../Services/Api';
import {BaseUrl, dashboardCountURL} from '../../Services/ApiConfig';
import * as Storage from '../../Services/AsyncStoreConfig';
import {Dashboard_Count} from '../types';

export function dashboardCountAction() {
  return async (dispatch: any) => {
    const url = BaseUrl + dashboardCountURL;
    const userprofileData = await Storage.getData('USER_ID');
    const fcmToken = await Storage.getData('fcmToken');

    if (userprofileData && fcmToken) {
      const countInfo = {
        storeId: JSON.parse(userprofileData)?.data?.user_stores[0]?.id,
        userId: JSON.parse(userprofileData)?.data?.user_id,
        deviceId: fcmToken,
      };
      new ApiConfig()
        .postJSON(url, countInfo)
        .then((res: any) => res.json())
        .then(res => {
          console.log('Dashboard count Response: ', res);
          dispatch({
            type: Dashboard_Count,
            payload: res,
          });
        })
        .catch(err => {
          console.log('Dashboard count Error:', err);
        });
    }
  };
}

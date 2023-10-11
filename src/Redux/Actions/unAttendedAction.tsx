import {ApiConfig} from '../../Services/Api';
import {BaseUrl} from '../../Services/ApiConfig';
import {UnAttended_Record_Fetch} from '../types';
import * as Storage from '../../Services/AsyncStoreConfig';

export function unAttendedAction(type: string, endPoint: string) {
  return async (dispatch: any) => {
    const userprofileData = await Storage.getData('USER_ID');
    if (userprofileData) {
      const url = BaseUrl + endPoint;
      new ApiConfig()
        .postJSON(url, {user_id: JSON.parse(userprofileData)?.data?.user_id})
        .then((res: any) => res.json())
        .then((res: any) => {
          const response: any = [];
          if (res?.data) {
            // console.log('UnAttended Response:==========', res.data[0].video);
            switch (type) {
              case 'Theft':
                res?.data.map((item: any) => {
                  response.push({
                    date: item?.datetime.split(' ')[0],
                    time: item?.datetime.split(' ')[1].split('.')[0],
                    id: item?.id,
                    image: item?.image,
                    video: item?.video,
                  });
                });
                break;
              case 'Active':
                res?.data.map((item: any) => {
                  response.push({
                    aisle_name: item?.aisle_name,
                    date: item?.date.split(' ')[0],
                    time: item?.date.split(' ')[1].split('.')[0],
                    id: item?.theft_id,
                    image: item?.image,
                    video: item?.video,
                  });
                });
                break;
              case 'Clutter':
                res?.data.map((item: any) => {
                  response.push({
                    aisle_name: item['Aisle Name'],
                    camera_No: item['Camera No.'],
                    date: item?.Date.split(' ')[0],
                    time: item?.Date.split(' ')[1].split('.')[0],
                    id: item['Clutter Id'],
                    image: item?.Image,
                    store_name: item['Store Name'],
                    detail_id: item['Detail Id'],
                    video: '',
                  });
                });
                break;
              case 'Stock':
                res?.data.map((item: any) => {
                  response.push({
                    aisle_name: item['Aisle Name'],
                    detail_id: item['Detail Id'],
                    camera_No: item['Camera No.'],
                    date: item?.Date.split(' ')[0],
                    time: item?.Date.split(' ')[1].split('.')[0],
                    id: item['Stock Id'],
                    image: item?.Image,
                    store_name: item['Store Name'],
                    video: '',
                  });
                });
                break;
              case 'Queue':
                res?.data.map((item: any) => {
                  response.push({
                    date: item?.datetime.split(' ')[0],
                    time: item?.datetime.split(' ')[1].split('.')[0],
                    id: item?.id,
                    image: item?.image,
                    video: '',
                    store_id: item?.store_id,
                  });
                });
                break;
            }
          }
          // console.log('UnAttended Record fetch successfully: ', response);
          dispatch({
            type: UnAttended_Record_Fetch,
            payload: response,
          });
        })
        .catch(err => {
          console.log('Theft Error', err);
        });
    }
  };
}

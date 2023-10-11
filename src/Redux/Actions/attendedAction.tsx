import {ApiConfig} from '../../Services/Api';
import {BaseUrl} from '../../Services/ApiConfig';
import {Attended_Record_Fetch} from '../types';

export function attendedAction(data: any, endpoint: string, type: string) {
  return (dispatch: any) => {
    const url = BaseUrl + endpoint;
    new ApiConfig()
      .postJSON(url, {user_id: data, limit: 20})
      .then((res: any) => res.json())
      .then((res: any) => {
        const response: any = [];
        if (res?.data) {
          switch (type) {
            case 'Theft':
              res?.data.map((item: any) => {
                response.push({
                  date: item?.responseDatetime.split('_')[0],
                  time: item?.responseDatetime.split('_')[1],
                  id: item?.store_id,
                  remarks: item?.remarks,
                  image: item?.image,
                  video: item?.video,
                });
              });
              break;
            case 'Active':
              res?.data.map((item: any) => {
                response.push({
                  aisle_name: item?.aisle_name,
                  date: item?.refill_datetime.split('_')[0],
                  time: item?.refill_datetime.split('_')[1],
                  id: item?.theft_id,
                  remarks: item?.comment,
                  image: item?.image,
                  video: item?.video,
                });
              });
              break;
            case 'Clutter':
              res?.data.map((item: any) => {
                response.push({
                  date: item?.Response_Datetime.split('_')[0],
                  time: item?.Response_Datetime.split('_')[1],
                  id: item?.Camera_No,
                  remarks: item?.Comment,
                  image: item?.Image,
                  Aisle_Name: item?.Aisle_Name,
                  Store_Name: item?.Store_Name,
                });
              });
              break;
            case 'Stock':
              res?.data.map((item: any) => {
                response.push({
                  date: item?.Response_Datetime.split('_')[0],
                  time: item?.Response_Datetime.split('_')[1],
                  id: item?.Camera_No,
                  remarks: item?.Comment,
                  image: item?.Image,
                  Aisle_Name: item?.Aisle_Name,
                  Store_Name: item?.Store_Name,
                });
              });
              break;
            case 'Queue':
              res?.data.map((item: any) => {
                response.push({
                  date: item?.response_datetime.split('_')[0],
                  time: item?.response_datetime.split('_')[1],
                  id: item?.id,
                  remarks: item?.comment,
                  image: item?.image,
                  Store_Name: item?.store_id,
                });
              });
              break;
          }
        }
        dispatch({
          type: Attended_Record_Fetch,
          payload: response,
        });
      })
      .catch(err => {
        console.log('Attended Data Api Error  ', err);
      });
  };
}

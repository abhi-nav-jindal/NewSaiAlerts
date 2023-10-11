import {UnAttended_Record_Fetch, UnAttended_Record_Failure} from '../types';

export const Initial_State = {
  unAttendedRecord: [],
  loading: true,
};

export const unAttendedReducer = (state = Initial_State, action: any) => {
  switch (action.type) {
    case UnAttended_Record_Fetch:
      return {
        ...state,
        unAttendedRecord: action.payload,
        loading: false,
      };
    case UnAttended_Record_Failure:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

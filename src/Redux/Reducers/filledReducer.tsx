import {Attended_Record_Fetch, UnAttended_Record_Failure} from '../types';

export const Initial_State = {
  filledData: [],
  loading: false,
};

export const filledReducer = (state = Initial_State, action: any) => {
  switch (action.type) {
    case Attended_Record_Fetch:
      return {
        ...state,
        filledData: action.payload,
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

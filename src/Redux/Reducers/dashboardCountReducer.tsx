import {Dashboard_Count} from '../types';

export const Initial_State = {
  countData: '',
  loading: true,
};

export const dashboardCountReducer = (state = Initial_State, action: any) => {
  switch (action.type) {
    case Dashboard_Count:
      return {
        ...state,
        countData: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

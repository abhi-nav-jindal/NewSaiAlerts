import {SelectionHeader_Type} from '../types';

export const Initial_State = {
  type: null,
  icon: null,
};

export const SelectionHeaderReducer = (state = Initial_State, action: any) => {
  switch (action.type) {
    case SelectionHeader_Type:
      return {
        ...state,
        type: action?.payload?.type,
        icon: action?.payload?.icon,
      };
    default:
      return state;
  }
};

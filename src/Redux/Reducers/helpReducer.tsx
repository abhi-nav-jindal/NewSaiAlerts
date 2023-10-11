import {
  Add_Image_Action,
  Add_Image_Request,
  Failed_Image_Action,
  Login_Failure,
  Login_Request,
  Login_Success,
} from '../types';

const initialState = {
  isloading: false,
  images: '',
  loading: false,
  addedImages: '',
};

export const helpReducer = (state = initialState, {type, payload}: any) => {
  switch (type) {
    case Login_Success: {
      return {
        ...state,
        isloading: false,
        images: payload,
      };
    }
    case Login_Failure: {
      return {
        ...state,
        isloading: false,
      };
    }
    case Login_Request: {
      return {
        ...state,
        isloading: true,
      };
    }
    case Add_Image_Request: {
      return {
        ...state,
        loading: true,
      };
    }
    case Add_Image_Action: {
      return {
        ...state,
        loading: false,
        addedImages: payload,
      };
    }
    case Failed_Image_Action: {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
};

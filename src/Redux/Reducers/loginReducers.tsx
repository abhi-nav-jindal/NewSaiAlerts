import {
  Get_Login,
  Loader,
  Loading,
  Login_Failure,
  Login_Success,
  Logout_Failure,
  Logout_Success,
  OTP_Verify,
} from '../types';

const Initial_State = {
  loginData: '',
  hideProgress: false,
  authStatus: '',
  isLoading: false,
};

export const loginReducer = (state = Initial_State, action: any) => {
  switch (action.type) {
    case Get_Login:
      return {
        ...state,
        hideProgress: true,
        authStatus: action.payload,
      };
    case Login_Success:
      return {
        ...state,
        hideProgress: true,
        loginData: action.payload,
        // isLoading: false,
      };
    case Login_Failure:
      return {...state, isLoading: action.payload};
    case Loader:
      return {
        ...state,
        hideProgress: action.payload,
      };
    case Logout_Success:
      return {...state, hideProgress: true, authStatus: null};
    case Logout_Failure:
      return {
        ...state,
        hideProgress: action.payload,
      };
    case OTP_Verify:
      return {
        ...state,
        isLoading: false,
        hideProgress: action.payload,
        authStatus: action.payload,
      };
    case Loading:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

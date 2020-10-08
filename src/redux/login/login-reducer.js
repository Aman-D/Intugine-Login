import { loginTypes } from "./login-type";

const INITIAL_STATE = {
  loading: false,
  error: null,
  user: null,
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case loginTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case loginTypes.LOGIN_Failed:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case loginTypes.LOGIN_START:
      return {
        ...state,
        loading: true,
      };
    case loginTypes.UPDATE_USER:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default loginReducer;

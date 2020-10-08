import { loginTypes } from "./login-type";

const loginStart = () => ({
  type: loginTypes.LOGIN_START,
});

const loginFailed = () => ({
  type: loginTypes.LOGIN_FAILED,
  payload: "Login failed",
});

const loginSuccess = () => ({
  type: loginTypes.LOGIN_SUCCESS,
});

const updateUser = (user) => ({
  type: loginTypes.UPDATE_USER,
  payload: user,
});

//action-creator
export const login = ({ username, password }) => {
  return (dispatch) => {
    dispatch(loginStart());

    /**
     * This logic can be changed by actual Api call
     */
    if (username === "aman@gmail.com" && password === "aman1234") {
      dispatch(loginSuccess());
      dispatch(updateUser({ username }));
    } else {
      dispatch(loginFailed());
    }
  };
};

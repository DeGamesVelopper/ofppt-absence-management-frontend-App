import {
  LOGIN__PROCCESS,
  LOGIN__SUCCESS,
  UNAUTHORIZED_ERROR,
  LOGOUT,
} from "../actions/TYPES";

const initialeState = {
  isloading: false,
  islogin: false,
  token: "",
};

const reducer = (state = initialeState, action) => {
  switch (action.type) {
    case LOGIN__PROCCESS:
      return {
        isloading: true,
        islogin: false,
        token: "",
      };
    case LOGIN__SUCCESS:
      localStorage.setItem("token", action.token);
      return {
        islogin: true,
        isloading: false,
        token: action.token,
      };
    case UNAUTHORIZED_ERROR:
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        isloading: false,
        islogin: false,
        token: "",
      };
    default:
      return state;
  }
};

export default reducer;

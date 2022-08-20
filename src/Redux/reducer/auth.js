import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, REGISTER_FAIL, REGISTER_SUCCESS } from "../actionType";

const user = JSON.parse(localStorage.getItem("user"));
const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

export const auth = (store = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...store,
        isLoggedIn: true,
        user: payload.user,
      };
    case LOGIN_FAIL:
      return {
        ...store,
        isLoggedIn: false,
        user: null,
      };

    case LOGOUT:
      return {
        ...store,
        user: (store.user = null),
        isLoggedIn: (store.isLoggedIn = false),
      };

    case REGISTER_SUCCESS:
      return {
        ...store,
        isLoggedIn: false,
      };
    case REGISTER_FAIL:
      return {
        ...store,
        isLoggedIn: false,
      };

    default:
      return store;
  }
};

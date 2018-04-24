import { USER_STATUS } from "../actions/actionTypes";

export default function(state = {}, action) {
  switch (action.type) {
    case USER_STATUS:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

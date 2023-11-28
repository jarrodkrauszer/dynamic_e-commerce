import { UPDATE_USER } from "./actions";

export const reducer = (state, action) => {
  console.log(`State: ${state} - Action: ${action}`);
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        user: action.user
      }

    default:
      return state;
  }
}
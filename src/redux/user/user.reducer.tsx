import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
  currentUser: null,
};

type UserReducerTypes = {
  type: string;
  payload: string;
};

const userReducer = (state = INITIAL_STATE, action: UserReducerTypes) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;

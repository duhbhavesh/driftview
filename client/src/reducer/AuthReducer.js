const SET_USER_SIGNIN = 'SET_USER_SIGNIN';
const SET_USER_SIGNOUT = 'SET_USER_SIGNOUT';
const SET_USER_DETAILS = 'SET_USER_DETAILS';

export const AuthReducer = (state, { type, payload }) => {
   switch (type) {
      case SET_USER_SIGNIN:
         return {
            ...state,
            token: payload,
         };

      case SET_USER_SIGNOUT:
         return {
            ...state,
            token: '',
         };

      case SET_USER_DETAILS:
         return {
            ...state,
            email: payload.email,
            firstName: payload.firstName,
            lastName: payload.lastName,
         };

      default:
         break;
   }
};

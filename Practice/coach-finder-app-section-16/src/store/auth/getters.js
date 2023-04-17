export default {
  userId(state) {
    return state.userId;
  },
  token(state) {
    return state.token;
  },
  //   tokenExpiration(state) {
  //     return state.tokenExpiration;
  //   },
  isLoggedIn(state) {
    return !!state.token;
  },
  didAutoLogout(state) {
    return state.didAutoLogout;
  },
};

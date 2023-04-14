export default {
  addContact(state, payload) {
    state.requests.push(payload);
    console.log(state.requests);
  },
  setRequest(state, payload) {
    state.requests = payload;
  },
};

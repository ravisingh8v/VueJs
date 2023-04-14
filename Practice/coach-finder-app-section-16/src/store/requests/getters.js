export default {
  requestsCoach(state, _, _2, rootGetters) {
    const coachId = rootGetters.userId;
    console.log(coachId);
    return state.requests.filter((res) => res.coachId === coachId);
  },
  hasRequest(_, getters) {
    return getters.requestsCoach && getters.requestsCoach.length > 0;
  },
};

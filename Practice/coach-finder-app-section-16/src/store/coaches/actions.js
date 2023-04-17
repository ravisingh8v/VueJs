export default {
  // to register new coach in server and send data with this method
  async registerCoach(context, payload) {
    // const coachId = context.rootGetters.userId;
    // here we sending id manually with rootGetter
    const coachData = {
      id: context.rootGetters.userId,
      firstName: payload.first,
      lastName: payload.last,
      description: payload.desc,
      hourlyRate: payload.rate,
      areas: payload.areas,
    };
    const token = context.rootGetters.token;
    const response = await fetch(
      `https://coachfinderwebapp-default-rtdb.firebaseio.com/coaches/${coachData.id}.json?auth=` +
        token,
      {
        method: "PUT",
        body: JSON.stringify(coachData),
      }
    );
    if (response.ok) {
      // --- error
    }
    // const responseData = await response.json();
    // await console.log(responseData);
    context.commit("registerCoach", coachData);
  },

  // to getting all data from the server
  async loadCoaches(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }
    const response = await fetch(
      "https://coachfinderwebapp-default-rtdb.firebaseio.com/coaches.json "
    );
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.message || "failed to fetch");
      throw error;
    }
    const coaches = [];
    for (let key in responseData) {
      const coach = {
        id: responseData[key].id,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas,
      };
      coaches.push(coach);
    }
    context.commit("setCoaches", coaches);
    context.commit("setFetchTimeStamp");
  },
};

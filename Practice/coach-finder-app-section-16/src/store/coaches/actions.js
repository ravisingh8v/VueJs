export default {
  async registerCoach(context, payload) {
    // const coachId = context.rootGetters.userId;
    const coachData = {
      id: context.rootGetters.userId,
      firstName: payload.first,
      lastName: payload.last,
      description: payload.desc,
      hourlyRate: payload.rate,
      areas: payload.areas,
    };

    const response = await fetch(
      `https://coachfinderwebapp-default-rtdb.firebaseio.com/coaches/${coachData.id}.json`,
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

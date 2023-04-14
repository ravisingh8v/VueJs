export default {
  async contactCoach(context, payload) {
    const newRequest = {
      userEmail: payload.email,
      userMessage: payload.message,
    };
    const response = await fetch(
      `https://coachfinderwebapp-default-rtdb.firebaseio.com/request/${payload.coachId}.json`,
      {
        method: "POST",
        body: JSON.stringify(newRequest),
      }
    );
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(
        responseData.message || "failed to send data !!!!"
      );
      throw error;
    }

    newRequest.id = responseData.name;
    newRequest.coachId = payload.coachId;
    context.commit("addContact", newRequest);
  },
  async fetchRequest(context) {
    const coachId = context.rootGetters.userId;
    const response = await fetch(
      `https://coachfinderwebapp-default-rtdb.firebaseio.com/request/${coachId}.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || "failed to fetch data !!!!"
      );
      throw error;
    }

    const requests = [];

    for (let key in responseData) {
      const request = {
        id: key,
        coachId: coachId,
        userEmail: responseData[key].userEmail,
        userMessage: responseData[key].userMessage,
      };
      requests.push(request);
      console.log(requests);
    }
    context.commit("setRequest", requests);
  },
};

let timer;

export default {
  // login / sign-in
  async login(context, payload) {
    return context.dispatch("auth", { ...payload, mode: "login" });
  },

  //   sign up
  async signUp(context, payload) {
    return context.dispatch("auth", { ...payload, mode: "sign-up" });
  },

  async auth(context, payload) {
    const mode = payload.mode;
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBUOE7z4aNFUEPVWZ6Dr2pj9KZAuCisV0E";

    if (mode == "sign-up") {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBUOE7z4aNFUEPVWZ6Dr2pj9KZAuCisV0E";
    }

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }),
    });
    const responseData = await response.json();
    if (!response.ok) {
      console.log(responseData);
      const error = new Error(responseData.message || "authentication failed");
      throw error;
    }
    // expire time give by server
    const expiresIn = +responseData.expiresIn * 1000;
    // const expiresIn = 5000;
    // current time + expires time
    const expirationDate = new Date().getTime() + expiresIn;

    localStorage.setItem("token", responseData.idToken);
    localStorage.setItem("userId", responseData.localId);
    localStorage.setItem("tokenExpiration", expirationDate);

    timer = setTimeout(() => {
      context.dispatch("autoLogout");
    }, expiresIn);

    context.commit("setUser", {
      token: responseData.idToken,
      userId: responseData.localId,
    });
  },

  tryLogin(context) {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem("tokenExpiration");
    const expiresIn = +expirationDate - new Date().getTime();

    if (expiresIn < 0) {
      return;
    } else {
      timer = setTimeout(function () {
        context.dispatch("autoLogout");
      }, expiresIn);
    }

    if (token && userId) {
      context.commit("setUser", {
        token: token,
        userId: userId,
      });
    }
  },
  //   logout
  logout(context) {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("tokenExpiration");
    clearInterval(timer);
    context.commit("setUser", {
      token: null,
      userId: null,
    });
  },
  autoLogout(context) {
    context.dispatch("logout");
    context.commit("setAutoLogout");
  },
};

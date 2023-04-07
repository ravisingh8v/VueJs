import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 0,
    isLogin: false
  },
  getters: {
    finalResult(state) {
      return state.counter * 2
    },
    normalized(_, getters) {
      const finalState = getters.finalResult;
      if (finalState > 100) {
        return 100
      }
      if (finalState < 0) {
        return 0
      }
      return finalState
    },

    userAuthenticated(state) {
      return state.isLogin

    }
  },
  mutations: {
    increment(state) {
      state.counter += 1
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value
    },

    // authentication 

    setAuthentication(state, payload) {
      state.isLogin = payload.isAuth
    }
  },

  actions: {
    increment(context) {
      setTimeout(() => {
        return context.commit('increment')

      }, 2000)
    },
    increase(context, payload) {
      setTimeout(() => {
        return context.commit('increase', payload)

      }, 2000)
    },

    // authentication 
    login(context) {
      context.commit('setAuthentication', { isAuth: true })
    },
    logout(context) {
      context.commit('setAuthentication', { isAuth: false })
    }
  },
  modules: {
  }
})

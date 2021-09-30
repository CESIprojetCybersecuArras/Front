export const state = () => ({
    email: null,
    authenticated: true,
    token: null
  })
  
  export const mutations = {
    toggle(state) {
      state.authenticated = !state.authenticated
    },
    setToken(state,token) {
      state.token = token
    },
    changeEmail(state, email) {
      state.email = email
    }

  }
  
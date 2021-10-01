export default ({app: { $axios } }) => {
    $axios.onRequest((config) => {
        config.headers.AccessAllowOrigin
    config.headers.Authorization = 'Bearer ' + store.state.user.token
    })
  }
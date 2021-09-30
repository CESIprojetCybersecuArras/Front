export default function ({redirect, store}) {
    const isAuthenticated = store.state.authenticated 
    if (!isAuthenticated) {
      redirect('/')
    }
  }
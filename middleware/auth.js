export default function ({store, redirect}) {
    // const auth = false;
    // const auth = localStorage.getItem('token'); -> pas possible
    if (!store.state.auth) {
        return redirect('login')
    }
}
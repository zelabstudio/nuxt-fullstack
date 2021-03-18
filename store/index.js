export const state = () => ({
    auth: false,
})

export const mutations = {
    isAuth(state) {
        state.auth = true;
    },
    loggedOut(state) {
        state.auth = false
    }
}
/* eslint-disable */
export default {
    setUser(state, payload) {
        state.token = payload.token;
        state.userId = payload.userId;
        state.didAutoLogout = false;
    },
    
    setAutoLogout(state, payload) {
        state.didAutoLogout = true;
    }
};
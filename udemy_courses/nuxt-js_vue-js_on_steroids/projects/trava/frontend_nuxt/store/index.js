import Vuex from 'vuex';
import { initData } from "@/data/data";

// _____________________________________________________________________
// Helper funtions



// _____________________________________________________________________
// Vuex store

const createStore = () => {
    // <- You reture the Store from a function so each client has its store!
    
    return new Vuex.Store({

        state: {
            myBoxes: [],
            voices: [],
            selectedVoice: 'English (Great Britain)',
            utterance: null,

            textBoxOn: false,
            newBoxOn: false,
            signInOn: false,
            signUpOn: false,

            resendValEmailOn: false,
            resendPasswordOn: false,
            resetPasswordOn: false,            

            noBrowserSupport: false,

            isUserAdmin: false,

            isUserLogedIn: false,

            userInfoState: {
                email: '',
                token: null
            }
        },
    // __________________________________

        mutations: {
            setMyBoxes(state, boxs) {
                state.myBoxes = boxs;
            },
            setVoices(state, voices) {
                state.voices = voices
            },
            setUtterance(state, u) {
                state.utterance = u;
            },
            setSelectedVoice(state, v) {
                state.selectedVoice = v;
            },
            setNoBrowserSupport(state, s) {
                state.noBrowserSupport = s;
            },
            setForm(state, payload) {
                console.log(payload.name)
                state[payload.name] = payload.action
            },
            closeAll(state) {
                state.signInOn = false;
                state.signUpOn = false;
                state.newBoxOn = false;
                state.textBoxOn = false;
                state.resendPasswordOn = false;
                state.resendValEmailOn = false;
                state.resetPasswordOn = false;
            },
            setUserInfo(state, payload) {
                state.userInfoState[payload.key] = payload.value;
            },
        },
    // __________________________________

        actions: {
            async serverInit(vuexContext, context) {
                // ----- fetch and set boxes data:
                vuexContext.commit('setMyBoxes', initData);
                
            },
            setVoices(vuexContext, payload) {
                vuexContext.commit('setVoices', payload);
            },
            setUtterance(vuexContext, payload) {
                vuexContext.commit('setUtterance', payload);
            },
            setSelectedVoice(vuexContext, payload) {
                vuexContext.commit('setSelectedVoice', payload);
            },
            setNoBrowserSupport(vuexContext, payload) {
                vuexContext.commit('setNoBrowserSupport', payload)
            },
            setForm({commit, dispatch}, payload) {
                dispatch('closeAll')
                commit('setForm', payload);
            },
            closeAll({commit}) {
                commit('closeAll');
            },
            adduser(vuexContext, payload) {
                return this.$axios.$post('/trava/user/', {...payload})
                .catch(err => { 
                    console.log(err.response);
                    if (err.response.data.state === 'error') {
                        return err.response.data; 
                    }                   
                 })
            },
            loginUser(vuexContext, payload) {
                return this.$axios.$post('/trava/user/signin/', {
                    email: payload.email,
                    password: payload.password
                }).catch(err => {
                    console.log(err.response);
                    if (err.response.data.state === 'error') {
                        return err.response.data; 
                    }     
                })
            },
            resendEmail(vuexContext, email) {
                return this.$axios.$post('trava/user/resend/', {email})
                .catch(err => {
                    console.log(err.response)
                    if (err.response.data.state === 'error') {
                        return err.response.data;
                    }
                })
            },
            userSignIn({commit}, payload) {
                commit('setForm', {name: 'isUserLogedIn', action: true});
                commit('setUserInfo', {key: 'email', value: payload.email});
                commit('setUserInfo', {key: 'token', value: payload.token});
            },
            userSignOut({commit}) {
                commit('setForm', {name: 'isUserLogedIn', action: false});
                commit('setUserInfo', {key: 'email', value: 'chris12aug@yahoo.com'}); //<--
                commit('setUserInfo', {key: 'token', value: ''});
            },
            resetPassword(vuexContext, token) {
                return this.$axios.$post('trava/user/resetPassword/', {token})
                .catch(err => {
                    console.log(err.response)
                    if (err.response.data.state === 'error') {
                        return err.response.data;
                    }
                })
            },
            changePassword(vuexContext, data) {
                return this.$axios.$post('trava/user/passwordChange/', data)
                .catch(err => {
                    console.log(err.response)
                    if (err.response.data.state === 'error') {
                        return err.response.data;
                    }
                })

            }

        },
    // __________________________________

        getters: {
            getMyBoxes(state) {
                return state.myBoxes;
            },
            getVoices(state) {

                return state.voices;
            },
            getUtterance(state) {
                return state.utterance;
            },
            getTextBoxOn(state) {
                return state.textBoxOn;
            },
            getSignUpOn(state) {
                return state.signUpOn;
            },
            getSignInOn(state) {
                return state.signInOn;
            },
            getNewBoxOn(state) {
                return state.newBoxOn;
            },
            getSelectedVoice(state) {
                return state.selectedVoice;
            },
            getNoBrowserSupport(state) {
                return state.noBrowserSupport;
            },
            getUserInfo(state) {
                return state.userInfoState
            },
            getIsUserAdmin(state) {
                return state.isUserAdmin;
            },
            getIsUserLogedIn(state) {
                return state.isUserLogedIn;
            },
            getResendValEmailOn(state) {
                return state.resendValEmailOn;
            },
            getResendPasswordOn(state) {
                return state.resendPasswordOn;
            },
            getResetPasswordOn(state) {

                return state.resetPasswordOn;
            },
        }
    })
}

export default createStore;
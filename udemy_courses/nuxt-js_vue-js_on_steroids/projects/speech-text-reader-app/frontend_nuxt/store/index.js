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

            noBrowserSupport: false
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
                state[payload.name] = payload.action
            },
            closeAll(state) {
                state.signInOn = false;
                state.signUpOn = false;
                state.newBoxOn = false;
                state.textBoxOn = false;
            }
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
                return this.$axios.$post('/TSA/user/', {...payload});
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
            }
        }
    })
}

export default createStore;
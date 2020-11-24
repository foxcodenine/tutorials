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
            utterance: null,
            textBoxOn: false,
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
            setTextBox(state, payload) {
                state.textBoxOn = payload;
            }
        },
    // __________________________________

        actions: {
            async nuxtServerInit(vuexContext, context) {

                // ----- fetch and set boxes data:
                vuexContext.commit('setMyBoxes', initData);
                
            },
            setVoices(vuexContext, payload) {
                vuexContext.commit('setVoices', payload);
            },
            setUtterance(vuexContext, payload) {
                vuexContext.commit('setUtterance', payload);
            },
            setTextBox(vuexContext, payload) {
                vuexContext.commit('setTextBox', payload);
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
        }
    })
}

export default createStore;
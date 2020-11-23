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
        },
    // __________________________________

        mutations: {
            setMyBoxes(state, boxs) {
                state.myBoxes = boxs;
            },
            setVoices(state, voices) {
                state.voices = voices
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
            }
        },
    // __________________________________

        getters: {
            getMyBoxes(state) {
                return state.myBoxes;
            },
            getVoices(state) {

                return state.voices;
            }
        }
    })
}

export default createStore;
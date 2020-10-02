import Vue from 'vue';
import Vuex from "vuex";

import axiosGlobal from "axios";
import { axiosAuth } from './axios-auth';
import { api_01 } from './axios-auth';

// _____________________________________________________________________

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        idToken: '', 
        userId: '',
        activeUser: ''
    },
    mutations: {
      authUser(state, authData) {
        state.idToken = authData.token;
        state.userId = authData.userId;
      },
      setActiveUser(state, user) {
        state.activeUser = user
      }
    },
    actions: {
        async signUp({commit, dispatch}, formData) {
            try {                                  
                const response = await axiosAuth.post(
                  `/accounts:signUp?key=${api_01}`, 
                  {
                    email: formData.email,
                    password: formData.password,
                    returnSecureToken: true
                  }
                );
                // here we are using our auth axios api instead of the 
                // deafault axios.

                console.log('>>',response);

                const authData = {
                  token: response.data.idToken,
                  userId: response.data.localId
                }
                commit('authUser', authData);

                console.log('<0>', this.state);
                
                // Here we have dispatched another action 
                // The 'storeUser' action from this action 'signUp' 

                formData.userId = this.state.userId;
                dispatch('storeUser', formData);
                console.log('<2>', this.state);

              } catch(err) {
                console.log(err);
              }
        },

        async logIn({commit}, formData) {

          try {            
            const response = await axiosAuth.post(
                `/accounts:signInWithPassword?key=${api_01}`,
                {
                  email: formData.email,
                  password: formData.password,
                  returnSecureToken: true,
                  headers: {
                            'Access-Control-Allow-Origin': '*',        
                            'Content-Type': 'application/json;charset=UTF-8',
                            "Access-Control-Allow-Methods":" PUT, GET, POST",
                            "Access-Control-Allow-Headers":" Origin, X-Requested-With, Content-Type, Accept",
                            'Access-Control-Allow-Credentials': true 
                  }
                }
              );
              console.log('>>',response);

              const authData = {
                token: response.data.idToken,
                userId: response.data.localId
              }
              commit('authUser', authData);

              // here we are using our auth axios api instead of the 
              // deafault axios.
          } catch(err) {
            console.log(err);
          } 
          console.log('<4>', this.state) 
        },

        async storeUser({commit, state}, formData) {
          try {
            if (!state.idToken) {
              return
            }
            const response = await axiosGlobal.post(`/users.json?auth=${state.idToken}`, formData);
            formData.userId = state.userId;
            console.log('<1>', response);
          } catch(err) {
            console.log(err)
          }
        },

        async fetchUser({commit, state}) {
          try {
            if (!state.idToken) { return }
            const response = await axiosGlobal.get(`/users.json?auth=${state.idToken}`);
            // we are using baseURL in main.js so we only need the '/user.json'
            // users.json not required bu axios it is how firebase works           
            
            const users = [];
            for (let key in response.data) {            
                const user = response.data[key];
                user.id = key
                users.push(user);
            } 
            
            const user =   users.find(user => {
              return user.userId === state.userId;
            })  
            console.log('><', user) 
            commit('setActiveUser', user);
  
          } catch(err) {
            console.log(err);
          }
        }
    },
    getters: {
      getActiveUser(state) {
        
        return state.activeUser;
      },
    },
    modules: {

    },
});
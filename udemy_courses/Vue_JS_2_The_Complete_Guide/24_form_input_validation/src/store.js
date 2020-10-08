import Vue from 'vue';
import Vuex from "vuex";

import axiosGlobal from "axios";
import { axiosAuth } from './axios-auth';
import { api_01 } from './axios-auth';

import router from './router'


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
      },
      signOut(state) {
        console.log('<logout>');
        state.idToken = '';
        state.userId  = '';
        state.activeUser = '';
      }
    },
    actions: {
      async signUp({commit, dispatch}, formData) {
        try {        
          // here we are using our auth axios api instead of the 
          // deafault axios.                          
          const response = await axiosAuth.post(
            `/accounts:signUp?key=${api_01}`, 
            {
              email: formData.email,
              password: formData.password,
              returnSecureToken: true
            }
          );
          
          const authData = {
            token: response.data.idToken,
            userId: response.data.localId
          }

          commit('authUser', authData);                             
          
          // Here we have dispatched another action 
          // The 'storeUser' action from this action 'signUp' 

          formData.userId = this.state.userId;
          await dispatch('storeUser', formData);
          
          dispatch('logoutTimer', response.data.expiresIn);
          dispatch('setDataInLocalStore', response);
          

        } catch(err) {
          console.log(err);
        }
      },

      async logIn({commit ,dispatch}, formData) {

        try { 
                    
          // here we are using our auth axios api instead of the 
          // deafault axios.           
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
                        
            const authData = {
              token: response.data.idToken,
              userId: response.data.localId
            }
            commit('authUser', authData);
            dispatch('logoutTimer', response.data.expiresIn);
            dispatch('setDataInLocalStore', response);

        } catch(err) {
          console.log(err);
        } 
        
      },

      async storeUser({commit, state}, formData) {
        try {
          if (!state.idToken) {
            return
          }
          const response = await axiosGlobal.post(`/users.json?auth=${state.idToken}`, formData);
          formData.userId = state.userId;
          
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
          // ?auth=${state.idToken} is how we pass the token in firebase  
          
          const users = [];
          for (let key in response.data) {            
              const user = response.data[key];
              user.id = key
              users.push(user);
          } 
          
          const user =   users.find(user => {
            return user.userId === state.userId;
          })  
          
          commit('setActiveUser', user);

        } catch(err) {
          console.log(err);
        }
      },
      signOut({commit, dispatch}) {
        commit('signOut');
        dispatch('removeDataFromLocalStorage')
      },
      logoutTimer({commit, dispatch}, expirationTime) {
        setTimeout(()=>{
          console.log('<timeUp>');
          commit('signOut');
          router.replace({path: '/'})
        }, expirationTime * 1000);
      },
      setDataInLocalStore(context, res) {
        console.log('<setLocalStorage>')
        const now = new Date();
        const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000);
        localStorage.setItem('idTocken', res.data.idToken);        
        localStorage.setItem('userId', res.data.localId);
        localStorage.setItem('expires', expirationDate);
      },
      removeDataFromLocalStorage() {
        console.log('<removeLocalStorage>')
        localStorage.removeItem('idTocken');        
        localStorage.removeItem('userId');
        localStorage.removeItem('expires');
      },
      async getDataFromLocalStorage({dispatch, state}) {
        console.log('<getLocalStorage>')

        const expires = new Date(await localStorage.getItem('expires'));
        const now = new Date();

        if (expires) {
          if (now >= expires) {
            console.log('<expires>')
            dispatch('removeDataFromLocalStorage');
            return
          }
          console.log({now, expires})
          console.log(now >= expires)

          const idToken = await localStorage.getItem('idTocken');
          const userId = await localStorage.getItem('userId');

          if (!idToken || !userId) {
            return

          } 
          state.userId = userId;
          state.idToken = idToken;

          router.replace({name: 'dashboard'});
                  

        } 
        console.log('<return>')
        return
               
      }
    },
    getters: {
      getActiveUser(state) {        
        return state.activeUser;
      },
      isAuthenticated(state) {
        return state.idToken !== "";
      }
    },
    modules: {

    },
});
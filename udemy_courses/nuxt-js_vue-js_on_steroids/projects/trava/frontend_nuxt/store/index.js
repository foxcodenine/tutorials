import Vuex from 'vuex';
import { initData } from "@/data/data";
import Cookies from "js-cookie";
const jwt = require('jsonwebtoken');

// _____________________________________________________________________
// Helper funtions



// _____________________________________________________________________
// Vuex store
import pictures from "./modules/pictures";
import * as actions from "./actions";

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
            
            deleteAccountOn: false,

            noBrowserSupport: false,

            isUserAdmin: false,

            isUserLogedIn: false,

            token: null,

            autoLogOut: null,

            userInfoState: {
                firstname: '',
                lastname: '',
                email: '',
                dob: '',
                signup: ''
            }
        },
    // __________________________________
        modules: {
            pictures
        },
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
                state.resendPasswordOn = false;
                state.resendValEmailOn = false;
                state.resetPasswordOn = false;
                state.deleteAccountOn = false;
            },
            setUserData(state, payload) {
                state.userInfoState[payload.key] = payload.value;
            },
            setUserInfo(state, payload) {
                state.userInfoState = payload;
            },
            setToken(state, payload) {
                state.token = payload;
            },
            setAutoLogOut(state, payload) {
                state.autoLogOut = payload;
            }
        },
    // __________________________________

        actions: {
            ...actions,
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
            async userSignIn({commit, dispatch, getters}, payload) {
                commit('setForm', {name: 'isUserLogedIn', action: true});
                commit('setUserInfo', payload.userInfo);
                commit('setToken', payload.token);
                document.documentElement.style.setProperty('--color-primary', '#dff0f8');
                document.documentElement.style.setProperty('--color-primary-dark', '#7ba3cf');
                
                // Clear previous 'Sign-out if token exp'
                clearTimeout(getters.getSetAutoLogOut);
                // Sign-out if token exp
                await dispatch('autoLogOut');

            },
            userSignOut({commit, dispatch}) {

                const userInfo = {
                    firstname: '', lastname: '', email: '',  dob: '',signup: ''
                }
                dispatch('closeAll');
                commit('setForm', {name: 'isUserLogedIn', action: false});
                commit('setUserInfo', userInfo);
                commit('setToken', null);
                Cookies.remove('trava_jwt_email');
                document.documentElement.style.setProperty('--color-primary', '#c5f5e1');
                document.documentElement.style.setProperty('--color-primary-dark', '#3ab07f');
            },
            saveToCookie(vuexContext, payload) {
                const decoded = jwt.verify(`${payload.token}`, this.$config.BESK);
                const token_exp = decoded.exp - Date.parse(new Date()) / 1000;
                const expires = (token_exp - 10) / 86400;                 
                
                // I am getting the exp of token and calulate time remaning in sec
                // then i am dividing by 86400 (seconds in a day), I am removing 10s for safty
                // js-cookie expires is calc. in day, so I am giving a fraction of a day.
                
                Cookies.set('trava_jwt_email', JSON.stringify(payload), {expires, sameSite: 'strict'})
            },
            decodeJWT(vuexContext) {
                return jwt.verify(vuexContext.getters.getToken, this.$config.BESK);
            },
            async getFromCookie(vuexContext) {

              
                const cookie_string = Cookies.get('trava_jwt_email');

                if (!cookie_string) return;

                const cookie_object = JSON.parse(cookie_string);

                const token = cookie_object.token;
                const decoded = jwt.verify(token, this.$config.BESK);
                const token_exp = decoded.exp - Date.parse(new Date()) / 1000;
                console.log(`Token expires in ${token_exp} seconds`);


            
                // let check_my_token = await vuexContext.dispatch('checkToken', cookie_object.token); // <-
                // console.log(check_my_token);// <-

                return cookie_object;

            },
            async checkToken(vuexContext, token) {
                
                try {
                    jwt.verify(token, this.$config.BESK);
                    return 'valide';
                } catch(err) {

                    console.log(err);
                    return 'invalide';                    
                }
            },
            async checkPassword(vuexContext, password) {
                const decoded = await vuexContext.dispatch('decodeJWT');
                const hashed = decoded.hashed;

                return this.$axios.$post('trava/user/checkPassword/', {hashed, password})
                .then(data => data.result)
                .catch(err => console.log(err)) 
            },
            async autoLogOut({commit, dispatch, getters}) {
                const token = await getters.getToken;
                const decoded = jwt.verify(token, this.$config.BESK);
                

                commit('setAutoLogOut', 
                    
                    setTimeout(() => {
                        console.log('<TimeUp>')
                        dispatch('userSignOut');
                        dispatch('setForm', {name: 'signInOn', action: true});
                    }, decoded.reset * 1000)
                ) 
            },
            async autoLogin(vuexContext) {
                console.log('<<AutoLogin>>')

                const cookie_object = await vuexContext.dispatch('getFromCookie');

                if (!cookie_object) {
                    console.log('<<NoCookie>>');
                    return;
                }

                const {userInfo, token} = cookie_object;

                if (!userInfo || !token)  {
                    console.log('<<NoUser/Token>>'); 
                    Cookies.remove('trava_jwt_email');
                    return;
                }

                if (await vuexContext.dispatch('checkToken', token) === 'valide') {
                    // Clear previous 'Sign-out if token exp'
                    clearTimeout(vuexContext.getters.getSetAutoLogOut);

                    // Decode Token
                    let decoded = jwt.verify(token, this.$config.BESK)

                    // Restart Token exp
                    decoded.iat = Math.floor(Date.now() / 1000);
                    delete decoded.exp;
                    // Encode new Token
                    const newToken = jwt.sign(decoded, this.$config.BESK, { expiresIn: decoded.reset }) 
                    const payload = {
                        token: newToken,
                        userInfo                      
                    }
                    // Save new Token in cookie and store with userInfo
                    vuexContext.dispatch('userSignIn', payload);
                    vuexContext.dispatch('saveToCookie', payload);

                    // Sign-out if token exp
                    vuexContext.dispatch('autoLogOut');

                    return
                } else {
                    Cookies.remove('trava_jwt_email');
                    return
                }           
            },
            resetPassword(vuexContext, token) {
                return this.$axios.$post('trava/user/resetPassword/', {token})
                .catch(err => {
                    console.log(err.response);
                    if (err.response.data.state === 'error') {
                        return err.response.data;
                    }
                })
            },
            changePassword(vuexContext, data) {
                return this.$axios.$post('trava/user/passwordChange/', data)
                .catch(err => {
                    console.log(err.response);
                    if (err.response.data.state === 'error') {
                        return err.response.data;
                    }
                })
            },
            updatePassword(vuexContext, payload) {
                return this.$axios.$put('trava/user/updatePassword/', payload)
                .catch(err => {
                    console.log(err.response);
                    if (err.response.data.state === 'error') {
                        return err.response.data;
                    } 
                })
            },
            async deleteAccount(vuexContext) {

                const decoded = await vuexContext.dispatch('decodeJWT');
                const hashed = decoded.hashed;
                const payload = {
                    email: vuexContext.getters.getUserInfo['email'],
                    hashed 
                }
                return this.$axios.$post('trava/user/deleteAccount/', payload)
                .catch(err => {
                    console.log(err.response);
                    if (err.response.data.state === 'error') {
                        return err.response.data;
                    } 
                })
            },
            updateProfile({commit, dispatch, getters}, payload) {
                return this.$axios.$put('trava/user/profileUpdate/', payload)
                .catch(err => {
                    console.log(err.response)
                    if (err.response.data.state === 'error') {
                        return err.response.data;
                    }
                })                 
            },
            async authUser({getters, dispatch, commit}) {
                
                const token = getters.getToken;
                const tokenState = await dispatch('checkToken', token);
                
                if (tokenState !== 'valide') {
                    dispatch('userSignOut');
                    commit('setForm', {name: 'signInOn', action: true});
                    this.$router.push('/')
                } else {
                    console.log('<<AuthUser>>');
                    return 
                }
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
            getToken(state) {
                return state.token;
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
            getDeleteAccountOn(state) {
                return state.deleteAccountOn;
            },
            getSetAutoLogOut(state) {
                return state.setAutoLogOut
            }
        }
    })
}

export default createStore;
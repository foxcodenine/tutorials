import Vuex from 'vuex';
import axios from 'axios';

import jsonwebtoken from "jsonwebtoken";
const jwt = require('jsonwebtoken')

import Cookie from "js-cookie";


// _____________________________________________________________________
// Helper functions:

function expTokenFlask(token, key) {
    
    // This function validate the flask Token and retune time in seconde to expitation.

    try {
        const decodedTokenFlask = jwt.verify(token, key);
        const utcNow = Math.floor(new Date().getTime() / 1000);
        const expInSeconds = decodedTokenFlask.exp - utcNow;
        console.log(expInSeconds)
        return expInSeconds
    } catch (err) {
        if (err.message === "jwt expired") {
            return -1
        } else {
            console.log(err)
        }
    }
}
// _____________________________

function setTokenInLocalStorage(token, tokenName, expInSeconds, email=null) {
    localStorage.setItem(tokenName, token);
    
    const expiration = parseInt(new Date().getTime()) + (expInSeconds * 1000);
    localStorage.setItem(`${tokenName}Exp`, expiration);
    // <- we have '*1000' cause .getTime is in milliseconds

    if (email) {
        localStorage.setItem('email', email)
    }
}

// _____________________________

function setTokenInCookie(token, tokenName, expInSeconds, email=null) {

    Cookie.set(tokenName, token, { sameSite: 'strict' });

    const expiration = parseInt(new Date().getTime()) + (expInSeconds * 1000);
    // console.log(expiration)
    Cookie.set(`${tokenName}Exp`, expiration, { sameSite: 'strict' });
    // <- we have '*1000' cause .getTime is in milliseconds

    if (email) {
        Cookie.set('email', email, { sameSite: 'strict' })
    }
}

// _____________________________________________________________________
const createStore = () => {
    // <- You reture the Store from a function so each client has its store!
    return new Vuex.Store({
        state: {
            dataPost: [],
            firebasePost: [],
            isBackendFirebase: false,
            tokenFirebase: null,
            tokenFlask: null,
            email: null
        },
        mutations: {
            setPost(state, posts) {
                state.dataPost = posts;
            },
            setFirebasePost(state, posts) {
                state.firebasePost = posts;
            },
            toggleBackend(state) {
                state.isBackendFirebase = !state.isBackendFirebase;
            },
            setTokenFirebase(state, token) {
                state.tokenFirebase = token;
            },
            setTokenFlask(state, token) {
                state.tokenFlask = token;
            },
            setEmail(state, email) {
                state.email = email;
            },
            clearTokens(state) {
                state.tokenFlask = null;
                state.tokenFirebase = null;
            },
            setToken(state, payload) {
                state[payload.name] = payload.token;
            }
        },
        actions: {
            setPost(vuexContext, posts) {
                vuexContext.commit('setPost', posts);
            },
            setFirebasePost(vuexContext, posts) {
                vuexContext.commit('setFirebasePost', posts);
            },
            toggleBackend(vuexContext) {
                vuexContext.commit('toggleBackend')
            },
            async nuxtServerInit(vuexContext, context) {
                if (!process.client) {
                    console.log('>> async await, running on server')
                    console.log(`>>> Private .env server only ${context.$config.testPrivate}`)
                }
                // _____________________________________________________
                // Flask backend
                try {
                    const res = await fetch(                    
                        'http://127.0.0.1:5000/nuxtAPI/', {headers: {'API-Nuxt-Key': '123#456#789'}}
                    )
                    const data = await res.json()
                    vuexContext.commit('setPost', data.reverse());

                } catch(err) {
                    console.log('Flask error: ',err)
                    context.error({ statusCode: 404, message: 'Post not found'})
                }
                // _____________________________________________________
                // Firebase backend  
                
                try {
                    const response = await axios.get('https://nuxtblogproject.firebaseio.com/post.json')
                    
                    const data = response.data;

                    let firebaseData = [];

                    for (let key in data) {

                        firebaseData.unshift({
                            id: key,
                            author: data[key].author,
                            title: data[key].title,
                            sampleText: data[key].sample_text,
                            thumbnail: data[key].thumbnail,                            
                            flaskId: data[key].flaskId,                            
                        })
                    }
                    vuexContext.commit('setFirebasePost', firebaseData);
                    

                } catch(err) {
                    console.log('Firebase error: ',err)
                }
                
                // _____________________________________________________
            },
            authenticateUserFirebase(vuexContext, authData) {
                // This action is used when user signin or signup (Firebase)
                let authURL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.$config.fbApiKey}`

                if (!authData.isLogin) {
                  authURL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.$config.fbApiKey}`
                }
        
                // <- Below we using "return" 
                // <- So this action will return a promise were it is used.
                // <- And we can use the ".then" statement
                return axios.post(authURL ,
                  {
                    "email": authData.email,
                    "password": authData.password,
                    "returnSecureToken": true
                  }
                ).then(result => { 
                    console.log('tokenFirebase >', result.data.email)
                    vuexContext.commit('setTokenFirebase', result.data.idToken)

                    setTokenInLocalStorage(result.data.idToken, 'tokenFirebase', result.data.expiresIn, result.data.email);
                    // <- store token to local storage after loggin.

                    setTokenInCookie(result.data.idToken, 'tokenFirebase', result.data.expiresIn, result.data.email);
                    // <- store token to cookie after loggin.
                 })
                .catch(e => { console.log(e); })
                
                // _____________________________________________________
            },
            authenticateUserFlask(vuexContext, authData) {
                // This action is used when user signin or signup (Flask)

                let authURL = 'http://127.0.0.1:5000/nuxtAPI/add-user'
                

                let payload = {
                    method: 'POST',
                    body: JSON.stringify({email: authData.email, password: authData.password}),
                    headers: {
                        'API-Nuxt-Key': '123#456#789',
                        'Access-Control-Allow-Origin': '*',
                    }
                }

                if (authData.isLogin) {
                    authURL = 'http://127.0.0.1:5000/nuxtAPI/login-user'
                }

                
                // https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/
                
                
                fetch(authURL, payload)
                .then(res => res.json())
                .then(data => {
                    console.log('tokenFlask >', data)
                    vuexContext.commit('setTokenFlask', data.tokenFlask)   
                    
                    const expTime = expTokenFlask(data.tokenFlask, this.$config.fkSecretKey)
                    
                    

                    // <- expTime get the exp  time in sec by decoding the token.
                    // <- Ideal this is fectch token instead of decoding it.

                    vuexContext.dispatch('clearTokens', expTime ); 
                    // <- remove token from store if it has exp.

                    setTokenInLocalStorage(data.tokenFlask, 'tokenFlask', expTime);
                    // <- store token to local storage after loggin

                    setTokenInCookie(data.tokenFlask, 'tokenFlask', expTime);
                    // <- store token to cookie after loggin
                })
                .then(()=>{
                    this.$router.push('/admin');
                })
                .catch(e => { console.log(e); })
                
                // _____________________________________________________
            },
            setEmail(vuexContext, email) {
                
                vuexContext.commit('setEmail', email)
            },
            clearTokens(vuexContext, duration) {
                setTimeout(()=>{
                    console.log('Time up Token exp!')
                    vuexContext.commit('clearTokens')
                }, 
                duration * 1000);
            },
            retrieveLocalStorage(vuexContext, tokenName) {

                const token = localStorage.getItem(tokenName);
                const expirationDate = localStorage.getItem(`${tokenName}Exp`);
                const email = localStorage.getItem('email');

                if (!token || new Date().getTime() > expirationDate) {
                    console.log('<No Token or Token Expired>')
                    return
                }
                const payload = {
                    name: tokenName,
                    token: token
                }
                vuexContext.commit('setToken', payload);

                if (email) {
                    vuexContext.commit('setEmail', email);
                }
            },
            retrieveCookie(vuexContect, payload) {
                
                // if it was on client we could do this:
                // const token = Cookie.get(payload.tokenName);
                                
                if (payload.req) {
                    let cookies = payload.req.headers.cookie.split(';');

                    let cookiesObject = {};
                    cookies = cookies.forEach(m => {
                        
                        m = m.split('=');
                        const key = m[0].trim();
                        const value = m[1].trim();
                        
                        cookiesObject[key] = value;
                    });

                    console.log('cookie >', cookiesObject);


                }
            }
        },
        getters: {
            fetchPost(state) {
                if (state.isBackendFirebase) {
                    return state.firebasePost;
                } else {
                    return state.dataPost;
                }                
            },
            fetchSelectedBackend(state) {

                return state.isBackendFirebase;
            },
            fetchFirebasePost(state) {
                return state.firebasePost;
            },
            fetchFlaskPost(state) {
                return state.dataPost;
            },
            isNotAuthenticated(state) {
                return state.tokenFlask === null || state.setTokenFirebase === null || state.email === null;
            }
        }
    })
}

export default createStore;
import Vuex from 'vuex';
import axios from 'axios';

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
                    console.log('tokenFirebase >', result.data)
                    vuexContext.commit('setTokenFirebase', result.data.idToken)
                 })
                .catch(e => { console.log(e); })
                
                // _____________________________________________________
            },
            authenticateUserFlask(vuexContext, authData) {

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
                })
                .catch(e => { console.log(e); })
                
                // _____________________________________________________
            },
            setEmail(vuexContext, email) {
                vuexContext.commit('setEmail', email)
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
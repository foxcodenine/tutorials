import Vuex from 'vuex';
import axios from 'axios';

const createStore = () => {
    return new Vuex.Store({
        state: {
            dataPost: [],
            firebasePost: [],
        },
        mutations: {
            setPost(state, posts) {
                state.dataPost = posts;
            },
            setFirebasePost(state, posts) {
                state.firebasePost =posts;
            }
        },
        actions: {
            setPost(vuexContext, posts) {
                vuexContext.commit('setPost', posts);
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
                            sampleText: data[key].content,
                            thumbnail: data[key].thumbnailLink,                            
                        })
                    }
                    vuexContext.commit('setFirebasePost', firebaseData);
                    console.log(vuexContext.getters.fetchFirebasePost);

                } catch(err) {
                    console.log('Firebase error: ',err)
                }
                
                // _____________________________________________________

            }
        },
        getters: {
            fetchPost(state) {
                return state.dataPost;
            },
            fetchFirebasePost(state) {
                return state.firebasePost;
            }
        }
    })
}

export default createStore;
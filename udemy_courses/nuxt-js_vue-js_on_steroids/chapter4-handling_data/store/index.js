import Vuex from 'vuex';

const createStore = () => {
    return new Vuex.Store({
        state: {
            dataPost: []
        },
        mutations: {
            setPost(state, posts) {
                state.dataPost = posts;
            }
        },
        actions: {
            setPost(vuexContext, posts) {
                vuexContext.commit('setPost', posts);
            },
            nuxtServerInit(vuexContext, context) {
                if (!process.client) {
                    console.log('>> running on server')
                }
                return fetch(                    
                    'http://127.0.0.1:5000/nuxtAPI/', {headers: {'API-Nuxt-Key': '123#456#789'}}
                    )
                    .then(res => res.json())
                    .then(data => {                  
                        vuexContext.commit('setPost', data.reverse())              
                      }          
                    )
                    .catch(e => {
                      context.error({ statusCode: 404, message: 'Post not found'})
                    })
            }
        },
        getters: {
            fetchPost(state) {
                return state.dataPost;
            }
        }
    })
}

export default createStore;
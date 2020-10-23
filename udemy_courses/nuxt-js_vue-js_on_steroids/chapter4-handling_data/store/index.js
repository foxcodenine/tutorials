import Vuex from 'vuex';

const createStore = () => {
    return new Vuex.Store({
        state: {
            dataPost: []
        },
        mutation: {
            setPost(state, posts) {
                state.dataPost = posts;
            }
        },
        actions: {
            setPost(vuexContext) {
                vuexContext.commit('setPost', posts);
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
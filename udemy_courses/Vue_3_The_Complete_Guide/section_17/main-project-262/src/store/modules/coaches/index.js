/* eslint-disable */
export default {
    namespaced: true,

    state() {
        return {
            // count: 2,
            lastFetch: null,
            coaches: [
                {
                    id: 'c1',
                    firstName: 'Maximilian',
                    lastName: 'Schwarzmüller',
                    areas: ['frontend', 'backend', 'career'],
                    description:
                        "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
                    hourlyRate: 30
                },
                {
                    id: 'c2',
                    firstName: 'Julie',
                    lastName: 'Jones',
                    areas: ['frontend', 'career'],
                    description:
                        'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
                    hourlyRate: 30
                }
            ]
        }
    },

    getters: {
        coaches(state) {
            return state.coaches;
        },
        hasCoaches(state) {
            return state.coaches && state.coaches.length > 0;
        },
        getCount(state) {
            return state.count;
        },
        isCoach(state, getters, rootState, rootGetters) {
            const coaches = getters.coaches;
            const userId = rootGetters.userId;

            return coaches.some(function (coach) {
                return coach.id === userId;
            });
        },
        shouldUpdate(state) {
            const lastFetch = state.lastFetch;

            if (!lastFetch) {
                return true;
            } else {
                const currentTimestamp = new Date().getTime();
                return (currentTimestamp - lastFetch) / 1000 > 60;
            }
        }
    },

    mutations: {
        registerCoach(state, payload) {
            state.coaches.push(payload);
        },
        increamentCount(state) {
            state.count++;
        },
        setCoaches(state, payload) {
            state.coaches = payload;
        },
        setFetchTimestamp(state) {
            state.lastFetch = new Date().getTime();
        }
    },
    

    actions: {
        async loadCoaches(context, payload) {

            if (!payload.forceRefresh && !context.getters.shouldUpdate) {
                return;
            }

            const url = `${process.env.VUE_APP_FIREBASE_URL}/coaches.json`;

            const response = await fetch(url, { method: 'GET' });

            const responseData = await response.json();

            if (!response.ok) { 
                const error = new Error(responseData.message || 'Faild to fetch!');
                throw error;
             }

            const coaches = [];

            for (const key in responseData) {
                const coach = {
                    id: key,
                    firstName: responseData[key].firstName,
                    lastName: responseData[key].lastName,
                    areas: responseData[key].areas,
                    hourlyRate: responseData[key].hourlyRate,
                    description: responseData[key].description,
                }
                coaches.push(coach);
            }
            context.commit('setCoaches', coaches)
            context.commit('setFetchTimestamp');
        },
        async registerCoach(context, payload) {

            // context.commit('increamentCount');
            // const id = 'c' + context.getters.getCount;

            // const id = new Date().toISOString();

            // __________________________________________

            const userId = context.rootGetters.userId;
            console.log(userId);
            const coachData = {

                firstName: payload.first,
                lastName: payload.last,
                areas: payload.areas,
                hourlyRate: payload.rate,
                description: payload.desc,
            }

            let token = context.rootGetters.token;
            let url = `${process.env.VUE_APP_FIREBASE_URL}/coaches/${userId}.json?auth=${token}`;
            console.log(url);

            const response = await fetch(url, {
                method: 'PUT',
                body: JSON.stringify(coachData)
            });

            // const responseData = await response.json();

            if (!response.ok) {
                // error ... 
            }

            context.commit('registerCoach', { ...coachData, id: userId });
        }
    },

    modules: {
    }
}
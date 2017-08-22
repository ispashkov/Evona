import * as firebase from 'firebase';
import alertify from 'alertifyjs';

export const Auth = {
    state: {
        user: null
    },

    actions: {
        singUp({commit}, payload) {

            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
                .then(user => {
                    const newUser = {
                        id: user.uid,
                    }

                    commit('SET_USER', newUser)
                })
                .catch(error => alertify.error(error.message));
        },

        singIn({commit}, payload) {
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
                .then(user => {
                    const newUser = {
                        id: user.uid,
                    }

                    commit('SET_USER', newUser)
                })
                .catch(error => alertify.error(error.message));
        }
    },

    mutations: {
        
        SET_USER(state, payload) {
            state.user = payload
        }

    },

    getters: {
        getUser(state) {
            return state.user;
        }
    }
}
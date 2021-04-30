import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
// import auth from './auth.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:{
      loggedIn:false,
      data:null
    },
    message: null
  },

  getters:{
    user(state){
      return state.user
    },

    getMsg(state){
      return state.message
    }
  },

  mutations: {

    SET_LOGGED_IN(state,value){
      state.user.loggedIn = value
    },

    SET_USER(state,data){
      state.user.data = data
    },

    SET_MESSAGE(state,msg)
    {
      state.message = msg
    }
  },
  actions: {

    fatchUser({commit}, user){
      commit('SET_LOGGED_IN', user != null)

      if(user){
        commit('SET_USER', {
          displayName : user.displayName,
          email: user.email
        })
      }else{
        commit('SET_USER',null)
      }


    },

     logout(){

     alert('Are you sure to logout? ')
      
    },

    messageHandler({commit},msg){
      commit('SET_MESSAGE',msg)
    }


    
  },
  modules: {
    
  }
})

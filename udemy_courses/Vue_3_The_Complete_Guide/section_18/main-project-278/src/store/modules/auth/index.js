import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

export default {
    namespaced: false,
    
    state() {
      return {  
        token: null,
        userId: null,
        didAutoLogout: false,   
      }
    },
      
    getters: getters,
    
    mutations: mutations,
    
    actions: actions,    

}
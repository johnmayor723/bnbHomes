import {SET_CURRENT_USER} from '../actionTypes'

const DEFAULT_STATE = {
    isAuthenticate: false,
    user: {}
}

export default (state = DEFAULT_STATE, action) =>{
    switch(action.type){
        case SET_CURRENT_USER:
            return {
                isAuthenticate: !!Object.keys(action.user).length, // or the following code -- Object.keys(action.user).length > 0.
                // turns empty object to trues if there are signed in users
                user: action.user
            }
         default:
            return state    
    }
   
}
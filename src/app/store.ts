import { tassign } from 'tassign';
import { REMOVE_SIGN_IN_TOKEN, SIGN_IN_TOKEN } from './actions';

export interface IAppstate{
  token: string;
  user_type: string;
}

export const INITIAL_STATE: IAppstate = {
  token: "",
  user_type: '0'
}

export function rootReducer (state, action){

  console.log(action.data)
    switch(action.type){
      case SIGN_IN_TOKEN: {
        return tassign(state, {
          token: action.data.token,
          user_type: action.data.user_type
        });
      }
      case REMOVE_SIGN_IN_TOKEN: {
        return tassign(state, {
          token: "",
          user_type: "0"
        })
      }
    }
    return state
}

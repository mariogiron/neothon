import { tassign } from 'tassign';
import { REMOVE_SIGN_IN_TOKEN, SIGN_IN_TOKEN } from './actions';

export interface IAppstate{
    token: string;
}

export const INITIAL_STATE: IAppstate = {
    token: ""
}

export function rootReducer (state, action){

    switch(action.type){
      case SIGN_IN_TOKEN: {
        return tassign(state, {token: action.data});
      }
      case REMOVE_SIGN_IN_TOKEN: {
        return tassign(state, { token: "" })
      }
    }
    return state
}

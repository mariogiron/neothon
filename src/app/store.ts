import { SIGN_IN_TOKEN } from "./actions";
import {tassign} from 'tassign';

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
    }
    return state
}
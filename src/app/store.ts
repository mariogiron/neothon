
export interface IAppstate{
    contador: number;
}

export const INITIAL_STATE: IAppstate = {
    contador: 0
}

export function rootReducer (state, action){
    return state;
}
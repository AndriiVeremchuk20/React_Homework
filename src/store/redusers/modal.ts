import { AppActionTypes, MODAL } from "../action_types/modal";

const initialState: boolean = false;


export const modalReducer = (state: boolean = initialState, action: AppActionTypes) => {
    switch(action.type){
        case MODAL.SHOW:
            return true;

        case MODAL.HIDE:
            return false;

        default:
            return false;
    }
}
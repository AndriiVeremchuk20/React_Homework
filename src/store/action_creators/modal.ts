import { Dispatch } from "react"
import { AppActionTypes, MODAL } from "../action_types/modal"

export const showModal = () =>{
    return (dispatch: Dispatch<AppActionTypes>) => {
        dispatch({
            type: MODAL.SHOW
        })
    }
}

export const hideModal = () =>{
    return (dispatch: Dispatch<AppActionTypes>) => {
        dispatch({
            type: MODAL.HIDE
        })
    }
}
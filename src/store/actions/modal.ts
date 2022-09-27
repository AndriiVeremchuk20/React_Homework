import { AppActionTypes, MODAL } from "../action_types/modal";

export const showModal = (id: string): AppActionTypes => ({
    type: MODAL.SHOW
})

export const hideModal = (): AppActionTypes => ({
    type: MODAL.HIDE
})

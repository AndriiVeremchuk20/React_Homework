export interface ModalState {
    stow: boolean;
}

export enum MODAL {
    HIDE,
    SHOW
}

export interface ShowModal {
    type: MODAL.SHOW
}

export interface HideModal {
    type: MODAL.HIDE
}

export type AppActionTypes = 
    ShowModal|
    HideModal;

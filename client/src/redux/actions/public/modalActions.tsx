import { ActionType } from "../actionTypes";

export const setModal = (modal: object) => {
  return { type: ActionType.SET_MODAL, payload: modal };
};

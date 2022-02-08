import axios from "axios";
import {Dispatch} from "redux";
import Storage from "../../../services/storage";
import {ActionType} from "../actionTypes";
import {Action} from "../index";


export const getNotifications =
  (role: string, applicantId: number) => async (dispatch: Dispatch<Action>) => {
      try {
        const token = Storage.get("token");
        let {data}: any = await axios.get(`/${role}/${applicantId}`,
          {
            headers: {
              token: token || "",
            },
          }
        );
        return dispatch({
          type: ActionType.GET_NOTIFICATIONS,
          payload: {
            notifications: data.notifications,
            role: role,
          },
        });
      } catch (error) {
        console.log("Ups! algo salió mal");
        console.log(error);
      }
  };

export const setNotification = (notificationId:number, role:string) => async (dispatch: Dispatch<Action>)=>{
  try {
    const token = Storage.get("token");
    let {data}: any = await axios.put(`/notification/update/${notificationId}`,null,
      {
        headers: {
          token: token || "",
        },
      }
    );

    return dispatch({
      type: ActionType.SET_NOTIFICATION,
      payload: {data, role}
    });
  } catch (error) {
    console.log("Ups! algo salió mal");
    console.log(error);
  }
}

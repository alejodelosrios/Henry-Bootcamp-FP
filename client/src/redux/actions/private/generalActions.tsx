import axios from "axios";
import {Dispatch} from "redux";
import Storage from "../../../services/storage";
import {ActionType} from "../actionTypes";
import {Action} from "../index";

const token = Storage.get("token");

export const getNotifications =
  (role: string, applicantId: number) => async (dispatch: Dispatch<Action>) => {

      try {
        let {data}: any = await axios.get(`/${role}/${applicantId}`,
          {
            headers: {
              token: token || "",
            },
          }
        );
        //console.log("Notifications actualizadas");
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

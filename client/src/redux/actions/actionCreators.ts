import axios from "axios";
import { Dispatch } from "redux"
import { ActionType } from "./actionTypes"
import { Action } from "./index"


export const getPosts = () => async (dispatch: Dispatch<Action>) => {

    try {
        let { data } = await axios.get('/posts/index');
        console.log("POSTS", "Se recibe data de la API");
        return dispatch({ type: ActionType.GET_POSTS, payload: data });
    }catch (error) {
        console.log(error);
    }

}

export const getPostsById = (id: any) => async (dispatch: Dispatch<Action>) => {

    try {
        let { data } = await axios.get(`/posts/${id}`);
        console.log("POSTS BY ID", "Se recibe data de la API");
        return dispatch({ type: ActionType.GET_POSTS_BY_ID, payload: data });
    }catch (error) {
        console.log(error);
    }
    
}

export const filterAndSort = (postsFiltersAndSort: any) => async (dispatch: Dispatch<Action>) => {

    try {
        let { data } = await axios.get(`/filters`, postsFiltersAndSort);
        console.log("POSTS FILTRADOS", "Se recibe data de la API");
        return dispatch({ type: ActionType.GET_POSTS_BY_ID, payload: data });
    }catch (error) {
        console.log(error);
    }
    
}

export const createPost = (dataPost: any) => async (dispatch: Dispatch<Action>) => {

    try {
        await axios.post(``, dataPost);
        console.log("CREATE POST", "Se envió la data a la API");
        return dispatch({ type: ActionType.SET_IS_MODAL_OPEN,
            payload: {
              val: true,
              msg: `The job post ${dataPost.title} was created successfully!`,
            }});
    }catch (error) {
        console.log(error);
        return dispatch({ type: ActionType.SET_IS_MODAL_OPEN,
            payload: {
              val: true,
              msg: `The job post ${dataPost.title}, couldn't be created!`,
            }});
    }
    
}

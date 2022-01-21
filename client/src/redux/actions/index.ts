import { ActionType } from "./actionTypes";


interface getPosts {
    type: ActionType.GET_POSTS
    payload: Object[]
}

interface getPostsById {
    type: ActionType.GET_POSTS_BY_ID,
    payload: Object
}

interface filterAndSort {
    type: ActionType.FILTER_AND_SORT,
    payload: Object[]
}

interface setIsModalOpen {
    type: ActionType.SET_IS_MODAL_OPEN,
    payload: {
        val: Boolean,
        msg: String
    }
}

export type Action = getPosts | filterAndSort  | getPostsById | setIsModalOpen;
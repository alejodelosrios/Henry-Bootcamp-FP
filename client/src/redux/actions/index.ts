import { ActionType } from "./actionTypes";


interface getPosts {
    type: ActionType.GET_POSTS
}

interface filterPosts {
    type: ActionType.FILTER_POSTS,
    payload: string
}

interface orderPosts {
    type: ActionType.ORDER_POSTS,
    payload: string
}

export type Action = getPosts | filterPosts | orderPosts;
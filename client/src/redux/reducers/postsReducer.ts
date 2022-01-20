import { Action } from "../actions";
import { ActionType } from "../actions/actionTypes";


const initialState = {
    posts: [],
};

//This is just Test Data, don't forget to delete it!!!
const testData = [{
    name: 'pirulo',
    id:'pirulo',
  },{
    name: 'rosita',
    id:'rosita'
}]

const reducer = (state/*:typeofstate*/ = initialState, action: Action) =>{

    switch (action.type) {
        case ActionType.GET_POSTS:
            return {...state, posts: testData}
    
        default:
            return state;
    }

}

export default reducer;
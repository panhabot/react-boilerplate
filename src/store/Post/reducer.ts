

import { PayloadAction } from "@reduxjs/toolkit";
import { GET_POSTS_SUCCESS, Post } from "./type"


interface PostObject {
    posts: Post[];
}
const initialState: PostObject = {
    posts: []
}

const postReducer = (state: PostObject = initialState, action: PayloadAction) => {
    switch(action.type) {
        case GET_POSTS_SUCCESS:
            return {
              ...state,
                posts: action.payload
            }

             default:
  return state

    }

}
export default postReducer

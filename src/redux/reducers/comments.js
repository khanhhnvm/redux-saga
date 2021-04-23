import { createSlice } from "@reduxjs/toolkit";

const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    errMess: null,
    comments: [],
  },
  reducers: {
    getComments() {},
    setComments(state, action) {
      return { ...state, comments: action.payload, errMess:null };
    },
    commentsFailed(state, action) {
      return { ...state, errMess: action.payload};
    },
    addComment(state, action){
      return { ...state, comments: state.comments.concat(action.payload)}
    }
  }
});

export const { getComments, setComments, commentsFailed } = commentsSlice.actions;

export default commentsSlice.reducer;

import { call, put, takeLatest} from "redux-saga/effects";
import { addComment } from "../../ActionCreators";
import { commentsFailed, setComments, getComments } from "../../reducers/comments";
import { getRequest, postComment } from "../api";

export function* handleGetComments(action) {
  try {
    const {data} = yield call(getRequest, 'comments');
    // console.log(data)
    //pass the payload into dispatch function
    if (data) yield put(setComments( [...data] ))
    else {
      throw new Error('No results');
    }
  } catch (error) {
    console.log(error);
    yield put(commentsFailed(error));
  }
}
export default function* fetchCommentsWatcher() {
  yield takeLatest(getComments.type, handleGetComments);
}

export function* handlePostComment() {
try {
  const res = yield call(postComment)
} catch (error) {
  
}
}

export function* postCommentsWatcher() {
  yield takeLatest(addComment.type, handlePostComment);
}
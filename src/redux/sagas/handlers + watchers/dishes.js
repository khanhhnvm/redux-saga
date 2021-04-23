import { call, put, takeEvery, takeLatest} from "redux-saga/effects";
import { dishesFailed, setDishes, getDishes } from "../../reducers/dishes";
import { getRequest } from "../api";

export function* handleGetDishes() {
  // console.log("begin running handleGetDishes request")
  try {
    const {data} = yield call(getRequest, 'dishes');
    // console.log(data)
    //pass the payload into dispatch function
    if (data) yield put(setDishes( [...data] ))
    else {
      throw new Error('No results');
    }
  } catch (error) {
    console.log(error);
    yield put(dishesFailed(error));
  }
}
export default function* fetchDishesWatcher() {
  // console.log("begin running fetchDishesWatcher function")
  yield takeEvery(getDishes.type, handleGetDishes);
  // console.log("begin running fetchDishesWatcher function end")
}

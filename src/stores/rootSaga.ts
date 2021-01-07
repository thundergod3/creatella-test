import { fork, all } from "redux-saga/effects";
import productSaga from "./saga/productSaga";

export default function* rootSaga() {
	yield all([fork(productSaga)]);
}

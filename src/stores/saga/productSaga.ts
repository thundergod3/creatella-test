import {
	takeEvery,
	takeLatest,
	call,
	put,
	delay,
	select,
} from "redux-saga/effects";

import * as types from "../../constants/types";
import { RootReducerI } from "../rootReducer";

import productService from "../../services/productService";

import productAction from "../redux/actions/productAction";

function* fetchProductListPerPage({ page, loadMore }: any) {
	try {
		if (!loadMore) {
			const { data }: any = yield call(productService.fetchProductListPerPage, {
				page,
			});
			const { data: dataLoadMore }: any = yield call(
				productService.fetchProductListPerPage,
				{
					page: page + 1,
				}
			);

			yield put(productAction.fetchProductListPerPageSucceeded(data));
			yield put(productAction.fetchProductListLoadMore(dataLoadMore));
		} else {
			const {
				productReducer: { productList, dataLoadMore },
				utilReducer: { loadMore },
			} = yield select((state: RootReducerI) => state);

			yield put(
				productAction.fetchProductListPerPageSucceeded([
					...productList,
					...dataLoadMore,
				])
			);
			const { data: dataMore }: any = yield call(
				productService.fetchProductListPerPage,
				{
					page: page + 1,
				}
			);
			yield put(productAction.fetchProductListLoadMore(dataMore));
		}
	} catch (error) {
		console.log(error);
	}
}

export default function* productSaga() {
	yield takeLatest(
		types.FETCH_PRODUCT_LIST_PER_PAGE_REQUEST,
		fetchProductListPerPage
	);
}

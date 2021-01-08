import { takeEvery, takeLatest, call, put, delay, select } from "redux-saga/effects";

import * as types from "../../constants/types";
import { RootReducerI } from "../rootReducer";

import productService from "../../services/productService";

import productAction from "../redux/actions/productAction";
import utilAction from "../redux/actions/utilAction";

function* fetchProductListPerPage({ page, loadMore }: any) {
	try {
		if (!loadMore) {
			const { data }: any = yield call(productService.fetchProductListPerPage, {
				page,
			});
			const { data: dataLoadMore }: any = yield call(productService.fetchProductListPerPage, {
				page: page + 1,
			});

			yield put(productAction.fetchProductListPerPageSucceeded(data));
			yield put(productAction.fetchProductListLoadMore(dataLoadMore));
		} else {
			const {
				productReducer: { productList, dataLoadMore },
				utilReducer: { loadMore },
			} = yield select((state: RootReducerI) => state);

			yield put(productAction.fetchProductListPerPageSucceeded([...productList, ...dataLoadMore]));
			const { data: dataMore }: any = yield call(productService.fetchProductListPerPage, {
				page: page + 1,
			});
			yield put(productAction.fetchProductListLoadMore(dataMore));
		}
	} catch (error) {
		console.log(error);
	}
}

function* fetchProductListSort({ sortName }: any) {
	try {
		const { data }: any = yield call(productService.fetchProductListSort, { sortName });

		yield put(productAction.fetchProductListSortSucceeded(data));
		yield put(utilAction.loadedUI());
	} catch (error) {
		console.log(error);
	}
}

export default function* productSaga() {
	yield takeLatest(types.FETCH_PRODUCT_LIST_PER_PAGE_REQUEST, fetchProductListPerPage);
	yield takeLatest(types.FETCH_PRODUCT_LIST_SORT_REQUEST, fetchProductListSort);
}

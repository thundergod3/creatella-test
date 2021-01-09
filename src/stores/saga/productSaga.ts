import { takeLatest, call, put, select } from "redux-saga/effects";

import * as types from "../../constants/types";
import { RootReducerI } from "../rootReducer";

import productService from "../../services/productService";

import productAction from "../redux/actions/productAction";
import utilAction from "../redux/actions/utilAction";
import { ProductItemI, ProductListI } from "../redux/reducers/productReducer";

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
				productReducer: { productList, dataLoadMore, listRandomNumber },
			} = yield select((state: RootReducerI) => state);

			let tempRandomNumber: number = Math.floor(Math.random() * 1000);

			while (true) {
				if (listRandomNumber.includes(tempRandomNumber)) {
					tempRandomNumber = Math.floor(Math.random() * 1000);
				} else {
					break;
				}
			}

			const productListAfterInsertAds: ProductListI = [...productList, ...dataLoadMore].map(
				(product: ProductItemI, index: number) => {
					if (index !== 0 && index % 20 === 0 && !product.image) {
						return {
							...product,
							image: `https://unsplash.it/320/200?image=${tempRandomNumber}`,
						};
					} else return product;
				}
			);
			yield put(productAction.fetchProductListPerPageSucceeded(productListAfterInsertAds, tempRandomNumber));
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

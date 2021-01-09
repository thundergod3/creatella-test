import * as types from "../../../constants/types";

import { ProductListI } from "../reducers/productReducer";

class productAction {
	fetchProductListPerPageRequest = (page: number, loadMore: boolean): types.FetchProductListPerPageI => {
		return {
			type: types.FETCH_PRODUCT_LIST_PER_PAGE_REQUEST,
			page,
			loadMore,
		};
	};
	fetchProductListPerPageSucceeded = (
		productList: ProductListI,
		randomNumber?: number
	): types.FetchProductListPerPageI => {
		return {
			type: types.FETCH_PRODUCT_LIST_PER_PAGE_SUCCEEDED,
			productList,
			randomNumber,
		};
	};

	fetchProductListLoadMore = (dataLoadMore: ProductListI): types.FetchProductListLoadMore => {
		return {
			type: types.FETCH_PRODUCT_LIST_LOAD_MORE,
			dataLoadMore,
		};
	};

	fetchProductListSortRequest = (sortName: string): types.FetchProductListSort => {
		return {
			type: types.FETCH_PRODUCT_LIST_SORT_REQUEST,
			sortName,
		};
	};
	fetchProductListSortSucceeded = (productList: ProductListI): types.FetchProductListSort => {
		return {
			type: types.FETCH_PRODUCT_LIST_SORT_SUCCEEDED,
			productList,
		};
	};
}

export default new productAction();

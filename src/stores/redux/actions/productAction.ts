import * as types from "../../../constants/types";

import { ProductListI } from "../reducers/productReducer";

class productAction {
	fetchProductListPerPageRequest = (
		page: number,
		loadMore: boolean
	): types.FetchProductListPerPageI => {
		return {
			type: types.FETCH_PRODUCT_LIST_PER_PAGE_REQUEST,
			page,
			loadMore,
		};
	};
	fetchProductListPerPageSucceeded = (
		productList: ProductListI
	): types.FetchProductListPerPageI => {
		return {
			type: types.FETCH_PRODUCT_LIST_PER_PAGE_SUCCEEDED,
			productList,
		};
	};

	fetchProductListLoadMore = (
		dataLoadMore: ProductListI
	): types.FetchProductListLoadMore => {
		return {
			type: types.FETCH_PRODUCT_LIST_LOAD_MORE,
			dataLoadMore,
		};
	};
}

export default new productAction();

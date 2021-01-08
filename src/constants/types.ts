import { ProductListI } from "../stores/redux/reducers/productReducer";

// PRODUCT TYPES
export const FETCH_PRODUCT_LIST_PER_PAGE_REQUEST: string = "FETCH_PRODUCT_LIST_PER_PAGE_REQUEST";
export const FETCH_PRODUCT_LIST_PER_PAGE_SUCCEEDED: string = "FETCH_PRODUCT_LIST_PER_PAGE_SUCCEEDED";

export const FETCH_PRODUCT_LIST_LOAD_MORE: string = "FETCH_PRODUCT_LIST_LOAD_MORE";

export const FETCH_PRODUCT_LIST_SORT_REQUEST: string = "FETCH_PRODUCT_LIST_SORT_REQUEST";
export const FETCH_PRODUCT_LIST_SORT_SUCCEEDED: string = "FETCH_PRODUCT_LIST_SORT_SUCCEEDED";

// UTIL TYPES
export const LOADING_UI: string = "LOADING_UI";
export const LOADED_UI: string = "LOADED_UI";

export const LOADING_MORE_UI: string = "LOADING_MORE_UI";
export const LOADED_MORE_UI: string = "LOADED_MORE_UI";

// PRODUCT ACTION TYPES
interface FetchProductListPerPageRequestI {
	type: typeof FETCH_PRODUCT_LIST_PER_PAGE_REQUEST;
	page: number;
	loadMore: boolean;
}
interface FetchProductListPerPageSucceededI {
	type: typeof FETCH_PRODUCT_LIST_PER_PAGE_SUCCEEDED;
	productList: ProductListI;
}

interface FetchProductListLoadMore {
	type: typeof FETCH_PRODUCT_LIST_LOAD_MORE;
	dataLoadMore: ProductListI;
}

interface FetchProductListSortRequest {
	type: typeof FETCH_PRODUCT_LIST_SORT_REQUEST;
	sortName: string;
}
interface FetchProductListSortSucceeded {
	type: typeof FETCH_PRODUCT_LIST_SORT_SUCCEEDED;
	productList: ProductListI;
}

// UTIL ACTION TYPES
interface LoadingUII {
	type: typeof LOADING_UI;
}
interface LoadedUII {
	type: typeof LOADED_UI;
}

interface LoadingMoreUII {
	type: typeof LOADING_MORE_UI;
}
interface LoadedMoreUII {
	type: typeof LOADED_MORE_UI;
}

export type FetchProductListPerPageI = FetchProductListPerPageRequestI | FetchProductListPerPageSucceededI;
export type { FetchProductListLoadMore };
export type FetchProductListSort = FetchProductListSortRequest | FetchProductListSortSucceeded;

export type LoadMoreUII = LoadingMoreUII | LoadedMoreUII;
export type LoadUII = LoadingUII | LoadedUII;

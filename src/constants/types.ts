import { ProductListI } from "../stores/redux/reducers/productReducer";

// PRODUCT TYPES
export const FETCH_PRODUCT_LIST_PER_PAGE_REQUEST: string =
	"FETCH_PRODUCT_LIST_PER_PAGE_REQUEST";
export const FETCH_PRODUCT_LIST_PER_PAGE_SUCCEEDED: string =
	"FETCH_PRODUCT_LIST_PER_PAGE_SUCCEEDED";

export const FETCH_PRODUCT_LIST_LOAD_MORE: string =
	"FETCH_PRODUCT_LIST_LOAD_MORE";

// UTIL TYPES
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

// UTIL ACTION TYPES
interface LoadingMoreUII {
	type: typeof LOADING_MORE_UI;
}
interface LoadedMoreUII {
	type: typeof LOADED_MORE_UI;
}

export type FetchProductListPerPageI =
	| FetchProductListPerPageRequestI
	| FetchProductListPerPageSucceededI;

export type { FetchProductListLoadMore };

export type LoadMoreUII = LoadingMoreUII | LoadedMoreUII;

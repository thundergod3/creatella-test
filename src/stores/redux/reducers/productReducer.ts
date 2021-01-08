import * as types from "../../../constants/types";

import produce from "immer";

interface ProductItemI {
	id: number;
	size: number;
	price: number;
	face: string;
	date: Date;
}

type ProductListI = Array<ProductItemI>;

interface ProductReducerI {
	productList: ProductListI;
	dataLoadMore: ProductListI;
	statusSort: boolean;
	pageNumberSort: number;
}

const initalState: ProductReducerI = {
	productList: [],
	dataLoadMore: [],
	statusSort: false,
	pageNumberSort: 1,
};

const productReducer = (state: ProductReducerI = initalState, action: any) =>
	produce(state, (draft: ProductReducerI) => {
		switch (action.type) {
			case types.FETCH_PRODUCT_LIST_PER_PAGE_SUCCEEDED: {
				draft.productList = action.productList;
				break;
			}

			case types.FETCH_PRODUCT_LIST_LOAD_MORE: {
				draft.dataLoadMore = action.dataLoadMore;
				break;
			}

			case types.FETCH_PRODUCT_LIST_SORT_SUCCEEDED: {
				draft.productList = action.productList;
				draft.statusSort = true;
				draft.pageNumberSort = 1;
				break;
			}

			default:
				break;
		}
	});

export default productReducer;
export type { ProductListI, ProductItemI };

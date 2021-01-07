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
}

const initalState: ProductReducerI = {
	productList: [],
	dataLoadMore: [],
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

			default:
				break;
		}
	});

export default productReducer;
export type { ProductListI, ProductItemI };

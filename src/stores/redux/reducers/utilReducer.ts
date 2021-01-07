import * as types from "../../../constants/types";

import produce from "immer";

interface InitalStateI {
	loadMore: boolean;
}

const initalState: InitalStateI = {
	loadMore: false,
};

const utilReducer = (state: InitalStateI = initalState, action: any) =>
	produce(state, (draft: InitalStateI) => {
		switch (action.type) {
			case types.LOADING_MORE_UI: {
				draft.loadMore = true;
				break;
			}
			case types.LOADED_MORE_UI: {
				draft.loadMore = false;
				break;
			}

			default:
				break;
		}
	});

export default utilReducer;

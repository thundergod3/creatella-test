import { type } from "os";
import * as types from "../../../constants/types";

class utilAction {
	loadingUI = (): types.LoadUII => {
		return {
			type: types.LOADING_UI,
		};
	};
	loadedUI = (): types.LoadUII => {
		return {
			type: types.LOADED_UI,
		};
	};

	loadingMoreUI = (): types.LoadMoreUII => {
		return {
			type: types.LOADING_MORE_UI,
		};
	};
	loadedMoreUI = (): types.LoadMoreUII => {
		return {
			type: types.LOADED_MORE_UI,
		};
	};
}

export default new utilAction();

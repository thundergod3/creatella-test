import { type } from "os";
import * as types from "../../../constants/types";

class utilAction {
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

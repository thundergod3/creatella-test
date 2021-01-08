import HTTPMethod from "./index";

interface ProductServiceI {
	page?: number;
	sortName?: string;
}

class productService {
	fetchProductListPerPage = ({ page }: ProductServiceI): Promise<any> =>
		HTTPMethod.get(`/products?_page=${page}&_limit=15`);

	fetchProductListSort = ({ sortName }: ProductServiceI): Promise<any> =>
		HTTPMethod.get(`/products?_sort=${sortName}`);
}

export default new productService();

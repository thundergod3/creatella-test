import HTTPMethod from "./index";

interface ProductServiceI {
	page?: number;
}

class productService {
	fetchProductListPerPage = ({ page }: ProductServiceI): Promise<any> =>
		HTTPMethod.get(`/products?_page=${page}&_limit=15`);
}

export default new productService();

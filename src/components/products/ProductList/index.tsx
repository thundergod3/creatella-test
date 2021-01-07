import React, { useEffect, useRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import productAction from "../../../stores/redux/actions/productAction";
import utilAction from "../../../stores/redux/actions/utilAction";

import { ProductItemI } from "../../../stores/redux/reducers/productReducer";
import { RootReducerI } from "../../../stores/rootReducer";

import "./style.scss";
import loadingGif from "../../../assets/loading.gif";

import ProductItem from "../ProductItem";

const ProductList = (): JSX.Element => {
	const {
		productReducer: { productList, dataLoadMore },
	} = useSelector((state: RootReducerI) => state);
	// const [pageNumber, setPageNumber] = useState<number>(1);
	const productListRef = useRef<any>(null);
	const { fetchProductListPerPageRequest } = productAction;
	const { loadingMoreUI } = utilAction;
	const dispatch = useDispatch();

	let pageNumber: number = 1;

	useEffect(() => {
		dispatch(fetchProductListPerPageRequest(pageNumber, false));
	}, []);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (
				productListRef.current.clientHeight +
					productListRef.current.offsetTop -
					(window.scrollY + window.innerHeight) <=
				50
			) {
				dispatch(loadingMoreUI());
				dispatch(fetchProductListPerPageRequest(++pageNumber, true));
			}
		});
	}, []);

	return (
		<div className="product-list" ref={productListRef}>
			<h3>Product List</h3>
			{!productList.length ? (
				<img src={loadingGif} alt="...Loading" style={{ width: "100%" }} />
			) : (
				productList.map(
					(product: ProductItemI): JSX.Element => (
						<ProductItem product={product} />
					)
				)
			)}
			{!dataLoadMore.length && (
				<p style={{ textAlign: "center", marginTop: 30 }}>
					~ end of catalogue ~
				</p>
			)}
		</div>
	);
};

export default ProductList;

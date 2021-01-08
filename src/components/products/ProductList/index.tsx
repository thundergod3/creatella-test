import React, { useEffect, useRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import productAction from "../../../stores/redux/actions/productAction";
import utilAction from "../../../stores/redux/actions/utilAction";

import { ProductItemI } from "../../../stores/redux/reducers/productReducer";
import { RootReducerI } from "../../../stores/rootReducer";

import "./style.scss";
import loadingGif from "../../../assets/loading.gif";

import ProductItem from "../ProductItem";
import ButtonSort from "../../utils/ButtonSort";

const ProductList = (): JSX.Element => {
	const {
		productReducer: { productList, dataLoadMore },
		utilReducer: { loading },
	} = useSelector((state: RootReducerI) => state);
	const productListRef = useRef<any>(null);
	const { fetchProductListPerPageRequest, fetchProductListSortRequest } = productAction;
	const { loadingMoreUI, loadingUI } = utilAction;
	const dispatch = useDispatch();

	let pageNumber: number = 1;

	const handleSortProductList = (sortName: string): void => {
		dispatch(loadingUI());
		dispatch(fetchProductListSortRequest(sortName));
	};

	const handleScroll = () => {
		if (
			productListRef.current.clientHeight +
				productListRef.current.offsetTop -
				(window.scrollY + window.innerHeight) <=
			50
		) {
			dispatch(loadingMoreUI());
			dispatch(fetchProductListPerPageRequest(++pageNumber, true));
		}
	};

	useEffect(() => {
		dispatch(fetchProductListPerPageRequest(pageNumber, false));
	}, []);

	useEffect(() => {
		if (productList.length !== 500) window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, [productList]);

	return (
		<div className="product-list" ref={productListRef}>
			<h3>Product List</h3>
			<div className="product-list__buttonSort">
				<h4>Sort product list by</h4>
				<div className="product-list__buttonSortContainer">
					<ButtonSort title="id" handleChange={handleSortProductList} />
					<ButtonSort title="price" handleChange={handleSortProductList} />
					<ButtonSort title="size" handleChange={handleSortProductList} />
				</div>
			</div>
			{!productList.length || loading ? (
				<img src={loadingGif} alt="...Loading" style={{ width: "100%" }} />
			) : (
				productList.map((product: ProductItemI): JSX.Element => <ProductItem product={product} />)
			)}
			{!dataLoadMore.length ||
				(productList.length === 500 && (
					<p style={{ textAlign: "center", marginTop: 35 }}>~ end of catalogue ~</p>
				))}
		</div>
	);
};

export default ProductList;

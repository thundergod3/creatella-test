import React from "react";

import "./App.scss"

import ProductList from "./components/products/ProductList";

const App = (): JSX.Element => {
	return <div className="app__container">
		<ProductList />
	</div>;
};

export default App;

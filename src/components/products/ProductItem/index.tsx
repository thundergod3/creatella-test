import React from "react";

import timeDifference from "../../../helpers/relativeTimFormat";

import { ProductItemI } from "../../../stores/redux/reducers/productReducer";

import "./style.scss";

interface Props {
	product: ProductItemI;
}

const ProductItem = ({ product: { price, id, face, date, size } }: Props): JSX.Element => {
	return (
		<div className="product-item" key={id}>
			<p style={{ fontSize: size }}>{face}</p>
			<p>
				$
				{price > 9
					? (price + "").substring(0, (price + "").length - 1) +
					  "." +
					  (price + "").substring(1, (price + "").length)
					: "0." + (price + "").substring(0, 1)}
			</p>
			<p>{timeDifference(new Date(date))}</p>
		</div>
	);
};

export default ProductItem;

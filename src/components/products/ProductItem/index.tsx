import React from "react";

import timeDifference from "../../../helpers/relativeTimeFormat";

import { ProductItemI } from "../../../stores/redux/reducers/productReducer";

import "./style.scss";

interface Props {
	product: ProductItemI;
	index: number;
}

const ProductItem = ({ product: { price, id, face, date, size, image }, index }: Props): JSX.Element => {
	return (
		<>
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
			{image && (
				<div style={{ display: "flex", margin: "20px 0" }}>
					<p style={{ marginRight: 20 }}>A word from our sponsors:</p>
					<img className="ad" src={image} alt="Image broken" />
				</div>
			)}
		</>
	);
};

export default ProductItem;

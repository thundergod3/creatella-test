import React from "react";

import "./style.scss";

interface Props {
	title: string;
	handleChange: any;
}

const ButtonSort = ({ title, handleChange }: Props): JSX.Element => {
	return (
		<button className="button-sort" onClick={() => handleChange(title)}>
			{title}
		</button>
	);
};

export default ButtonSort;

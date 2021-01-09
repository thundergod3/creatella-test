import React from "react";

import "./style.scss";

interface Props {
	id: number;
	title: string;
	handleChange: any;
}

const ButtonSort = ({ id, title, handleChange }: Props): JSX.Element => {
	return (
		<button key={id} className="button-sort" onClick={() => handleChange(title)}>
			{title}
		</button>
	);
};

export default ButtonSort;

import React from "react";
import { Key } from "./Key";

export const KeysContainer = ({ keyHandle }) => {
	const keys = [
		"7",
		"8",
		"9",
		"+",
		"4",
		"5",
		"6",
		"-",
		"1",
		"2",
		"3",
		"*",
		"0",
		".",
		"=",
		"/",
		"AC",
	];
	return (
		<div className='keys-container'>
			{keys.map((key) => (
				<div className='key' key={key} onClick={keyHandle}>
					{key}
				</div>
			))}
		</div>
	);
};

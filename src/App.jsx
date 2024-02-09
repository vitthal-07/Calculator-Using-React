import React, { useState } from "react";
import Display from "./Components/Display";
import { KeysContainer } from "./Components/KeysContainer";
import "./App.css";

export default function App() {
	const [value, setValue] = useState("");
	const keyHandle = (evt) => {
		let keyValue = evt.target.innerText;
		if (keyValue === "=") {
			if (value === "Error") {
				setValue("Error");
			} else {
				try {
					setValue(eval(value));
				} catch {
					setValue("Error");
				}
			}
		} else if (keyValue === "AC") {
			setValue("");
		} else {
			setValue(value + keyValue);
		}
	};
	return (
		<div className='calculator'>
			<Display value={value} />
			<KeysContainer keyHandle={keyHandle} />
		</div>
	);
}

import React from "react";

export const Key = ({ Key, keyHandle }) => {
	return (
		<div className='key' onClick={keyHandle}>
			{Key}
		</div>
	);
};

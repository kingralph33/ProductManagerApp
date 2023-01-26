import axios from 'axios';
import React, { useEffect, useState } from 'react';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default () => {
	const [message, setMessage] = useState('Loading...');
	useEffect(() => {
		axios
			.get('http://localhost:8000/api')
			.then((res) => setMessage(res.data.message));
	}, []);
	return (
		<div>
			<h2>Message from the backend: {message}</h2>
		</div>
	);
};

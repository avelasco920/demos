import React from 'react';
import ReactDOM from 'react-dom';
import Stock from './frontend/stock.jsx';

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
	ReactDOM.render(<Stock/>, root);
});

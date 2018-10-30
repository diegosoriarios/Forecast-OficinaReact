import React from 'react';
import '../style/TempList.css';

const TempListItem = ({temp}) => {
	let data = temp[2].split(' ');
	data = data[0].split('-');
	data = data[2] + '-' + data[1] + '-' + data[0];
	return(
		<li className="col-sm-3 item">
			<h1 className="temperatura">{temp[0]}ºC</h1>
			<h3 className="descricao">{temp[1]}</h3>
			<h5 className="data">{data}</h5>
		</li>
	);
};

export default TempListItem;
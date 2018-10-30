import React from 'react';
import TempListItem from './TempListItem';
import '../style/TempList.css';

const TempList = (props) => {
	const TempItem = props.temp.map((t, i) => {
		return (
			<TempListItem
				key={i}
				temp={t}
			/>
		);
	});
	if(props.temp.length != 0){
		return (
			<ul  className="list-group-item">
				{TempItem}
			</ul>
		);
	}else{
		return <p className="else">Digite a cidade</p>
	}
};

export default TempList;
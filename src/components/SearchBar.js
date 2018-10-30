import React, {Component} from 'react';

class SearchBar extends Component{
	constructor(props){
		super(props);
		this.state = {
			cidade: '',
			pais: '',
		}
	}

	render(){
		return(
			<div className="input-group container">
				<div className="row col-sm-12">
					<input
						className="form-control col col-lg-5"
						value={this.state.cidade}
						placeholder="Cidade"
						onChange={e => this.setState({cidade: e.target.value})}
					/>
					<input
						className="form-control col col-lg-5"
						value={this.state.pais}
						placeholder="Pais"
						onChange={e => this.setState({pais: e.target.value})}
					/>
					<button className="btn btn-dark btn-sm col col-lg-2" onClick={() => this.changed(this.state.cidade, this.state.pais)}>Pesquisar</button>
				</div>
			</div>
		);
	}

	changed(cidade, pais){
		if (typeof this.props.onChangeCityCountry === 'function') {
			this.props.onChangeCityCountry(cidade, pais);
		}else{
			console.log(typeof this.props.onChangeCityCountry)
		}
	}
}

export default SearchBar;
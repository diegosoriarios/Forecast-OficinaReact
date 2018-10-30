import React, { Component } from 'react';
import SearchBar from './SearchBar';
import TempList from './TempList';

class App extends Component {
  constructor(props){
    super(props);

      this.state = {
        temperaturas: [],
      };
  }

  callApi(city, country){
    console.log(city);
    console.log(country);
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&lang=pt&units=metric&mode=json&appid=5325907441644570670df6cdec3acd5a`)
    .then((result) => {
      return result.json();
    }).then((dados) => {
      let len = dados.list.length;
      dados.list.map((dado, i) => {
        if(i % Math.ceil(len / 5) === 0){
          this.setState({
            temperaturas: this.state.temperaturas.concat([
                [dado.main.temp,
                dado.weather[0].description,
                dado.dt_txt]
            ])
          })
        }
      })
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBar onChangeCityCountry={(cidade, pais) => this.callApi(cidade, pais)} />
        <TempList temp={this.state.temperaturas} />
      </div>
    );
  }
}

export default App;

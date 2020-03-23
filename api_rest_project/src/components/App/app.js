import React from 'react';

import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import PeoplePage from '../people-page/people-page'
import ErrorIndicator from '../error-indicator/error-indicator'

import './app.css';

class App extends React.Component {

    state = { 
        showRandomPlanet: true,
        hasError: false
    }

    showPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };


    componentDidCatch(){
        console.log("componentDidCatch")
        this.setState({
            hasError: true
        })
    }

render (){

    if(this.state.hasError){
        return <ErrorIndicator/>
    }

    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    return (
    <div className="stardb-app">  
        <Header />
        {planet}
        <button 
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.showPlanet}>
        Show Planet
        </button>
        <PeoplePage/>     
    </div>
)
}
}

export default App;
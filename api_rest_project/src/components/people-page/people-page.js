import React from 'react'
import './people-page.css'
import ItemList from '../item-list/item-list'
import PersonDetails from '../person-details/person-details'
import ErrorIndicator from '../error-indicator/error-indicator'

export default class PeoplePage extends React.Component {
    
    state={
        selectedPerson: 5,
        hasError: false
    }

    onPersonSelected = (selectedPerson) => {
        this.setState ({
            selectedPerson
        })
    }

    componentDidCatch(error, info){ // error та самая ошибка которая привела к методу, а info детали того в каком компоненте эта ошибка произошла 
        this.setState({
            hasError: true
        })
    }

    render(){
        
        if(this.state.hasError){
            return <ErrorIndicator/>
        }

        return(
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList onItemSelected={this.onPersonSelected} />
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={this.state.selectedPerson}/>
                </div>
            </div>
        )
    }
}
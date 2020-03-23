import React from 'react';

import './item-list.css';
import SwapiService from '../../services/swapi-service'
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator'

export default class ItemList extends React.Component {

    swapiService = new SwapiService()

    state = { 
        peopleList: [],
        loading: true,
        error: false
    }
    
    componentDidMount() {
        this.swapiService
            .getAllPeople()
            .then((peopleList)=>{
                this.setState({
                    peopleList,
                    loading: false
                })
            })
            .catch(this.onError)
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    renderItems(arr) {
        return arr.map(({id, name}) => {
            return (
                <li className="list-group-item"
                    key={id}
                    onClick={()=>this.props.onItemSelected(id)}>
                    {name}
                </li>
            )
        })
    }

  render() {
    
    const {peopleList, loading, error} = this.state
    const items = this.renderItems(peopleList)


    const errorMesage = error ? <ErrorIndicator/> : null
    const spinner = loading ? <Spinner/> : null
    const content = !(loading || error) ? items : null

    return (
    <ul className="item-list list-group">
        {errorMesage}
        {spinner}
        {content}
    </ul>
    );
  }
}
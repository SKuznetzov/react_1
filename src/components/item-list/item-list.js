import React, { Component } from 'react'
import './item-list'
import SwapiService from '../../services/swapi-service'
export default class ItemList extends Component {

    swapiService = new SwapiService()

    state = {
        peopleList: null
    }
    componentDidMount() {
        this.swapiService
        .then((peopleList) => {
            this.setState({
                peopleList
            })
        })
    }
    render() {
        return (
           <ul className="item-list list-group">
               <li className="list-group-item">
                   Luke Skywalker
               </li>
               <li className="list-group-item">
                   Darth Vader
               </li>
               <li className="list-group-item">
                   R2-D2
               </li>
           </ul>        
        )
    }
}
import React, { Component } from 'react'
import ItemList from '../item-list/item-list'
import PersonDetails from '../person-details/person-details'
import './people-page.css'
export default class PeoplePage extends Component {
    state = {
        selectedPerson: 3,
        hasError: false
    }
    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }
    onPersonSelected = (selectPerson) => {
        this.setState({
            selectedPerson
        })
    }
    render() {
        return (
            <div className="row md2">
                <div className="col-md-6">
                    <ItemList onItemSelected ={this.onPersonSelected}/>
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={this.state.selectedPerson} />
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class PeoplePage extends Component {
    
    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }
    render() {
        return (
            <div>
                <p>People page</p>
            </div>
        )
    }
}

import React,{Component} from 'react'
import Header from '../header'
import RandomPlanet from '../random-planet'
import ItemList from '../item-list'
import PersonDetails from '../person-details'
import ErrorIndicator from '../error-indicator'
import './app.css'


class App extends Component {

    state = {
        selectedPerson: null,
        hasError: false
    }


    componentDidCatch() {
        this.setState({hasError: true})
    }
    render(){

        if ( this.state.hasError) {
            return <ErrorIndicator />
        }
    return (
        <div>
            <Header />
            <RandomPlanet />
        </div>
    )
}}
export default App
    

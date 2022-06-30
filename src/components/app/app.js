import React,{Component} from 'react'
import Header from '../header'
import RandomPlanet from '../random-planet'
import ErrorIndicator from '../error-indicator'
import './app.css'
import PeoplePage from '../people-page/people-page'


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
            <PeoplePage />
        </div>
    )
}}
export default App
    

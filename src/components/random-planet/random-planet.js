import React, { Component } from 'react'
import SwapiService from '../../services/swapi-service'
import './random-planet.css'
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'
export default class RandomPlanet extends Component {

    swapiService = new SwapiService()
    state = {
        planet: {},
        loading: true
    }
    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 500)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    onPlanetLoaded =(planet) =>{
        this.setState({
            planet,
            loading: false,
            error: false
        })
    }
    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updatePlanet = () => {
        const id = Math.floor(Math.random()*25) + 2
      this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError)
    }
    render() {
        const { planet,loading,error }= this.state;
        const errorMessage = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner /> : <PlanetView planet={planet} />;
        return (
        <div className="random-planet jumbotron rounded">
            {errorMessage}
            {spinner}
        </div>
        )
    }
}

const PlanetView = ({planet})=>{
    const {id,name,population,rotationPeriod,diameter } = planet;
    return (
        <React.Fragment>
                <img className="planet-image"
                src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="" />
            <div>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                     <li className="list-group-item">
                         <span className="term">Population</span>
                         <span>{population}</span>
                     </li>
                     <li className="list-group-item">
                         <span className="term">RotationPeriod</span>
                         <span>{rotationPeriod}</span>
                     </li>
                     <li className="list-group-item">
                         <span className="term">Diameter</span>
                         <span>{diameter}</span>
                     </li>
                </ul>
            </div>
        </React.Fragment>
    )
}
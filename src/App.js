// create your App component here
import React from 'react'

export default class App extends React.Component {
    
        state = {
            people: []
    }
    
    
    componentDidMount(){
        fetch("http://api.open-notify.org/astros.json")
        .then(res => res.json())
        .then(peopleInSpace => {
            console.log(peopleInSpace)
            this.setState({
                people: peopleInSpace.people
            })
        })
    }
    
    render(){
        return(
            <div>
                {this.state.people.map((person, id) => <h1 key={id}>{person.name}</h1>)}
            </div>
        )
    }
}
import React, {Component} from 'react'


export default class App extends Component {
    state = {
        peopleInSpace: []
    }

    render(){
        return(
            <div>

                {this.state.peopleInSpace.map((person, index) =>
                    <h1 key={index}>{person.name}</h1>
                )}
            </div>
        )
    }


    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(({people}) => this.setState({peopleInSpace: people}))
    }
    }


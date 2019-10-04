import React, { Component } from 'react';

export default class App extends Component {
   state = {
    peopleInSpace: []
   }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(data => {
            this.setState({
                peopleInSpace: data.people
            })
        })
    }
    
    render() {
        return (
            <div>
              <h2>People in Space:</h2>
              {this.state.peopleInSpace.map(person => 
                <p>{person.name}</p>
                )}
            </div>
          )
    }
}
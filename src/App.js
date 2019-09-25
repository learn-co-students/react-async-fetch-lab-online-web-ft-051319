import React from 'react';

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            people: []
        }
    }
    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(data => {
            this.setState({
                people: data.people
            }, () => console.log(this.state))
        })
    }

    render(){
        return(
            this.state.people.map(person => <div>{person.name}</div>)
        )
    }
}

export default App
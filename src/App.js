import React from 'react';

class App extends React.Component {
    state = {
        peopleInSpace: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(r => r.json())
            .then(data => this.setState({peopleInSpace: data.people}))
    }

    render() {
        const people = this.state.peopleInSpace.map(p => <p key={p.name} >{p.name}</p>)
        return (
            <div>
                <h1>People in Space</h1>
                {people}
            </div>
        )
    }
}

export default App;
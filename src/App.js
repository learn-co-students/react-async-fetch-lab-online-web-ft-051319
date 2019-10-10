// create your App component here
import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      peopleInSpace: ""
    }
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(data=> {this.setState({
        peopleInSpace: data.people})})
      }

    render() {
      return (<div>{console.log(this.state.peopleInSpace)}</div>)
    }
}
export default App;

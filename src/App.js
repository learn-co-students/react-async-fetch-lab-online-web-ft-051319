// create your App component here
import React, {Component} from 'react';

export default class App extends Component {

  constructor(){
    super()

    this.state={
      people: []
    }
  }

  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
    .then(resp=>resp.json())
    .then(json=>this.setState({people: json.people}))
    // .then(json=>console.log(json))
  }

  renderPeople = () => {
    console.log(this.state)
    this.state.people.map(p=><p>p.name</p>)
  }

  render(){
    return(
      <div className='people'>
      {this.renderPeople()}
      </div>
    )
  }

}

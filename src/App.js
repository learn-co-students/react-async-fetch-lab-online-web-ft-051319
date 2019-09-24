// create your App component here
import React, { Component } from 'react';

export default class App extends Component {
    

    componentDidMount() {
        let url = 'http://api.open-notify.org/astros.json'
        fetch(url)
    }

    render() {
        return "data";
    }
};
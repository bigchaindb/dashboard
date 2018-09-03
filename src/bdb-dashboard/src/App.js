import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import AppHeader from './components/header/AppHeader'
import Timeline from './containers/Timeline'
import AppFooter from './components/footer/AppFooter'
import './App.css';

class App extends Component {

  render() {
    return (
      <Container fluid={true} className="App" >
      <AppHeader/>
      <Container fluid={true}>
      <Timeline/>
      </Container>
      <AppFooter/>
      </Container>
    );
  }
}

export default App;

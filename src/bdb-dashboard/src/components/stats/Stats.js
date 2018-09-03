import React, { Component }  from 'react'
import { Menu, Container } from 'semantic-ui-react'
import './Stats.css';

export default class Stats extends Component {
    activeIndex = 0;
    render() {
        return(
        <Menu  inverted={true} pointing={true} secondary={true} size='small'>
        <Container fluid={true}>
          <Menu.Item as='div' active>
            {this.props.name}
          </Menu.Item>
          <Menu.Item as='div' >
            {'Source:' }
            <span>{this.props.context}</span>
          </Menu.Item>
          <Menu.Item as='div' >
            {'Block Height: '}
            <span>{this.props.state.lastBlock}</span>
          </Menu.Item>
         <div className="connected">
          <Menu.Item as='div' className="connRight">
            <span>{this.props.state.connected}</span>
          </Menu.Item>
          </div> 
        </Container>
      </Menu>
        )
    }
}
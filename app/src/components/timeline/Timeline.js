import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react'
import Stats from '../../containers/Stats'
import Block from '../../containers/Block'
import AppModal from '../../containers/AppModal';
import './Timeline.css';

class Timeline extends Component {
  render() {
    return (
      <Container fluid={true} className='timeline'>
      <div id="dash"><Stats name='Dashboard'/></div>
      <div  id="blockDisplay" className='blockDisplay'>
      <Grid className="letOverflow">
      {
        this.props.state.map((blockNo) => {
            return <Block key={blockNo} block={blockNo} prevBlock={this.props.state[this.getPrevBlock(blockNo)]}></Block>
        })
      }
      </Grid>
      </div>
      <AppModal/>
      </Container>
    );
  }
  
  getPrevBlock(blockNo){
    let result = this.props.state.indexOf(blockNo)+1;
    if(result === this.props.state.length) return -1;
    return result;
  }
}

export default Timeline;

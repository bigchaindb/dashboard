import React, { Component }  from 'react'
import Transaction from '../../containers/Transaction';
import './Block.css';
import * as utils from '../../services/utils'; 

export default class Block extends Component {
    maxTxWidth = 324;
    maxTitleHeight = 20;
    maxTxHeight = 300;
    headerHeight = utils.getPosition('appHeader').height;
    menuHeight = utils.getPosition('dash').height;
    viewPortHeight = utils.getViewportHeight();
    heightRemainig = this.viewPortHeight - this.headerHeight - this.menuHeight;
    
    handleClick(){
        this.props.onBlockClick(this.props.block);
    }

    render() {
        const calc = this.predictBlockSize();
        const blockTitleStyle = {
            minWidth: calc.maxWidth+'px',
            maxWidth: calc.maxWidth+'px',
        }
        const blockStyle = {
            minWidth: calc.maxWidth+'px',
            maxWidth: calc.maxWidth+'px'
        }
        blockStyle['maxHeight'] = calc.maxHeight + 'px';
        
        return(
            <div className="parent">
            <div className="blockTitle"  style={blockTitleStyle} onClick={this.handleClick.bind(this)}>
                <span id='title'>Block</span>
                <span className="blockNo" id={'title-'+this.props.block}>#{this.props.block}</span>
            </div>
            <div id={this.props.block} style={blockStyle} className="four wide column bgreen cards box">
            <span id={'back-'+this.props.block} className={this.props.block+' dot back'}>
            {this.props.prevBlock && (<div className="line"></div>)}
            </span>
            <span id={'front-'+this.props.block} className={this.props.block+' dot front'}></span>
            {   this.props.state.map((value, index) => {
                return <Transaction key={value} txId={value} block={this.props.block}></Transaction>
                })
            }
            
            </div>
            </div>
        )
    }

    predictBlockSize(){
        const maxTx = Math.floor(this.heightRemainig/this.maxTxHeight);
        const maxCol = Math.ceil(this.props.state.length / maxTx);
        const maxRow = Math.ceil(this.props.state.length/ maxCol);
        const maxHeight = maxRow*this.maxTxHeight;
        let maxWidth = 0;
        if(this.props.state.length < maxTx){
            maxWidth = this.maxTxWidth;
        }else{
         maxWidth = maxCol*this.maxTxWidth
        }
        return {maxWidth, maxHeight};
    }
}
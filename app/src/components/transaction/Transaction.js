import React, { Component }  from 'react'
import { Card } from 'semantic-ui-react'
import './Transaction.css';

 
export default class Transaction extends Component {
    handleClick(){
        this.props.onTxClick(this.props.state)
    }

    render() {
        return(
            <Card className={this.props.state.operation.toLowerCase()+" payloadShadow"} raised={true} centered={true} onClick={this.handleClick.bind(this)}>
                <Card.Content className="cardHeader">
                    <span className="left floated"><i className="circle icon"></i></span>
                    <span className="right floated trim">{this.props.txId}</span>
                </Card.Content>
            <Card.Content className="cardBody">
                <Card.Meta className="greenColor">{this.props.state.operation}</Card.Meta>
                <Card.Description className="font17">
                { this.props.state.operation==='TRANSFER' &&
                (<div>
                <span className="left floated upperCase">Asset Id:</span>
                <span className="right floated trim">{this.props.state.asset.id}</span>
                </div>
                )
                }
                <div className={this.props.state.operation.toLowerCase()+"Desc left floated marginTop4 mb10 wordWrap"}>
                {this.props.desc}</div>
            </Card.Description>
            </Card.Content>
        </Card>
        )
    }
}
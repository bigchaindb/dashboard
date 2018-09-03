import { connect } from 'react-redux'
import { setModal } from '../actions/actions'
import * as bdb from '../services/bdb';
import Block from '../components/block/Block'


export default connect(
    (state, ownProps) => {
        if(state.Transaction[ownProps.block]){
            return {state: Object.keys(state.Transaction[ownProps.block])}
        }else{
            return {state: []}
        }
    },
    dispatch => ({
        onBlockClick: data =>{
            bdb.getBlock(data).then(result => {
             dispatch(setModal('Block Details', result, true));
            })
        }
    })

)(Block)

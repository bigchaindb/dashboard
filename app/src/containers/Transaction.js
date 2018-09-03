import { connect } from 'react-redux'
import { setModal } from '../actions/actions'
import Transaction from '../components/transaction/Transaction'
import UIMap from '../configs/ui-mapper.config.json';

export default connect(
    (state, ownProps) => {
        const rawTx = state.Transaction[ownProps.block][ownProps.txId];
        const desc = rawTx.operation==='CREATE'?JSON.stringify(extractValue('create.description', rawTx)):JSON.stringify(extractValue('transfer.description', rawTx));
        return {state: rawTx, desc: desc};
    },
    dispatch => ({
        onTxClick: data =>{
             dispatch(setModal('Transaction Details', data, true));
        }
    })

)(Transaction)


function extractValue(mapKey, state) {
    let result  = state; // eslint-disable-next-line
    UIMap[mapKey].split('.').map( val => {
        result = result[val];
    });
    return result;
}
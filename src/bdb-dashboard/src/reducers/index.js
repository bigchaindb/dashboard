import { combineReducers } from 'redux'
import Transaction from './Transaction'
import Modal from './Modal'
import Stats from './Stats'
import Blocks from './Blocks'

const appReducer = combineReducers({
    Transaction,
    Modal,
    Stats,
    Blocks
})

export default appReducer

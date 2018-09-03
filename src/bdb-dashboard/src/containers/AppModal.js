import { connect } from 'react-redux'
import AppModal from '../components/modal/AppModal'
import { setModal } from '../actions/actions'

export default connect(
  (state) => ({
          state: state.Modal
      }
  ),
  dispatch => ({
      onClose: () =>{
           dispatch(setModal('', '', false))
      }
  }))(AppModal)
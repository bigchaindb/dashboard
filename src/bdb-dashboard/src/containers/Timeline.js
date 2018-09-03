import { connect } from 'react-redux'
import Timeline from '../components/timeline/Timeline'
const mapStateToProps = state => ({
  state: state.Blocks
});

export default connect(mapStateToProps)(Timeline);
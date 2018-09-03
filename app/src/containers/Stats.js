import { connect } from 'react-redux'
import Stats from '../components/stats/Stats'
import UIMap from '../configs/ui-mapper.config.json';

export default connect(
  (state) => {
    const stats = state.Stats;
    const context = UIMap.contextName
    return {state: stats, context: context};
  })(Stats)
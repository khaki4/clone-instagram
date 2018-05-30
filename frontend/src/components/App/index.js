import { connect } from 'react-redux';
import container from './container';

const mapStateToProps = (state, ownProps) => {
  const { user } = state;
  return {
    isLogedin: user.isLogedin
  }
};

export default connect(mapStateToProps)(container);
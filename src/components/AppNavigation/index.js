import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppNavigation from './AppNavigation';

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

const mapStateToProps = state => { 
	return ({});
};

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigation);

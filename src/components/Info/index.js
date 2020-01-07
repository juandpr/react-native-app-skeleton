import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Info from './Info';

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

const mapStateToProps = state => { 
	return ({});
};

export default connect(mapStateToProps, mapDispatchToProps)(Info);

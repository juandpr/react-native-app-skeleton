import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Tab2 from './Tab2';

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

const mapStateToProps = state => { 
	return ({});
};

export default connect(mapStateToProps, mapDispatchToProps)(Tab2);

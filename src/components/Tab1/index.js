import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Tab1 from './Tab1';


const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

const mapStateToProps = state => { 
	console.log('state', state);
	return ({});
};

export default connect(mapStateToProps, mapDispatchToProps)(Tab1);

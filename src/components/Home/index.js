import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setLanguage } from 'redux-i18n'
import Home from './Home';

const mapDispatchToProps = dispatch => bindActionCreators({
	setLanguage
}, dispatch);

const mapStateToProps = state => {
	return ({
		language: state.language.language
	});
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

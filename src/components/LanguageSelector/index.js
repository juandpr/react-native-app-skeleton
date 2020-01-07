import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LanguageSelector from './LanguageSelector';
import { setLanguage } from 'redux-i18n'
import { changeLanguage } from '../../redux/modules/language/actions';

const mapDispatchToProps = dispatch => bindActionCreators({
	setLanguage, changeLanguage
}, dispatch);

const mapStateToProps = state => { 
	return ({});
};

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelector);

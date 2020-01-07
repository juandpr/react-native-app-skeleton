import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './Home.styles.js';

import {
  View, Text
} from 'react-native';

class Home extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', 'title'),
    };
  };

  componentDidMount() {
    const { t } = this.context;
    const { language, setLanguage, navigation } = this.props;
  
    if (language === null) {
      navigation.navigate('LanguageSelector');
    } else {
      setLanguage(language);
    }

    navigation.setParams({ title: t('app.title') });
  }

  render() {
    const { t } = this.context;

    return (
      <View style={styles.home}>
        <Text>{t('pages.home.title')}</Text>
      </View>
    );
  }
}

Home.propTypes = {
  language: PropTypes.string,
  setLanguage: PropTypes.func
};

Home.contextTypes = {
  t: PropTypes.func
}

export default Home;

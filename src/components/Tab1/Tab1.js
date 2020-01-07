import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './Tab1.styles.js';

import {
  View, Text
} from 'react-native';

class Tab1 extends React.Component {
  render() {
    const { t } = this.context;

    return (
      <View style={styles.tab1}>
        <Text>{t('pages.tab1.title')}</Text>
      </View>
    );
  }
}

Tab1.propTypes = {
  setLanguage: PropTypes.func
};

Tab1.contextTypes = {
  t: PropTypes.func
}

export default Tab1;

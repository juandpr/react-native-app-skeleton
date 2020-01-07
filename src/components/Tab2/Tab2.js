import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './Tab2.styles.js';

import {
  View, Text
} from 'react-native';

class Tab2 extends React.Component {
  render() {
    const { t } = this.context;

    return (
      <View style={styles.tab2}>
        <Text>{t('pages.tab2.title')}</Text>
      </View>
    );
  }
}

Tab2.propTypes = {};

Tab2.contextTypes = {
  t: PropTypes.func
}

export default Tab2;

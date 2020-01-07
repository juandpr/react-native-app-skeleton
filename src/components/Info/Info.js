import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './Info.styles.js';

import {
  View, Text
} from 'react-native';

class Info extends React.Component {
  render() {
    return (
      <View style={styles.info}>
        <Text>This is the info page</Text>
      </View>
    );
  }
}

Info.propTypes = {};

export default Info;

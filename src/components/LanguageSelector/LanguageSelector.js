import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './LanguageSelector.styles.js';
import { languages } from '../../i18n/languages';

import {
  View, Text, FlatList, TouchableOpacity
} from 'react-native';

class LanguageSelector extends React.Component {
  onPress = (language) => {
    this.props.setLanguage(language);
    this.props.changeLanguage(language);
    this.props.navigation.goBack();
  }

  render() {
    const { onPress } = this;
    return (
      <View style={styles.languageSelector}>
        <Text style={styles.title}>Select Language</Text>
        <View style={styles.languagesContainer}>
          <FlatList
            data={languages}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <TouchableOpacity style={styles.languageButton} onPress={() => onPress(item.id)}>
                <Text style={styles.languageButtonText}>{item.name}</Text>
              </TouchableOpacity>
            )}
            horizontal={false}
            numColumns={2}
          />
        </View>
      </View>
    );
  }
}

LanguageSelector.propTypes = {
  setLanguage: PropTypes.func,
  changeLanguage: PropTypes.func
};

export default LanguageSelector;

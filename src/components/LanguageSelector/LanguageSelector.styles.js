import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  languageSelector: {
    backgroundColor: '#EFEFEF',
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 10
  },
  title: {
    alignSelf: 'center',
    fontSize: 32,
    fontWeight: 'bold'
  },
  languagesContainer: {
    marginTop: 10
  },
  languageButton: {
    flex: 1,
    padding: 20,
    margin: 10,
    borderWidth: 1,
    borderColor: '#000000',
    alignSelf: 'stretch',
  },
  languageButtonText: {
    alignSelf: 'center'
  }
});

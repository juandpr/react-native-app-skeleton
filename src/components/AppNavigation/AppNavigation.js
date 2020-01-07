import React from 'react';

import { PropTypes } from 'prop-types';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from '../Home';
import Tab1 from '../Tab1';
import Tab2 from '../Tab2';
import Info from '../Info';
import LanguageSelector from '../LanguageSelector';

const HomeNavigator = createStackNavigator(
  {
    Home: Home,
    Info: Info
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#0066CC',
        color: '#FFF'
      },
      headerTintColor: '#FFF',
      headerTitleStyle: {
        color: '#FFF'
      }
    }
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    HomeTab: HomeNavigator,
    Tab1: Tab1,
    Tab2: Tab2
  },
  {
    initialRouteName: 'HomeTab',
    defaultNavigationOptions: ({ navigation }) => {
      return {
        tabBarIcon: ({ tintColor }) => {
          const route = navigation.state.routeName;

          const iconName = {
            'HomeTab': 'home',
            'Tab1': 'list',
            'Tab2': 'list'
          }[route];

          return <Icon name={iconName} color={tintColor} size={22} />
        },
        tabBarOptions: {
          activeBackgroundColor: '#E6F0FA'
        }
      }
    }
  }
)

const BaseAppNavigator = createStackNavigator(
  {
    Tabs: TabNavigator,
    LanguageSelector: LanguageSelector
  }, {
    mode: 'modal',
    headerMode: 'none'
  }
);

const Navigation = createAppContainer(BaseAppNavigator);

class AppNavigation extends React.Component {
  render() {
    return (
      <Navigation />
    );
  }
}

AppNavigation.propTypes = {};

export default AppNavigation;

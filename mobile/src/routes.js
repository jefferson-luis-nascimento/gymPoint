import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigation } from 'react-native-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import SignIn from '~/pages/SignIn';

import Checkins from '~/pages/Checkins';
import HelpOrder from '~/pages/HelpOrder';
import NewHelpOrder from '~/pages/HelpOrder/NewHelpOrder';
import Answer from '~/pages/HelpOrder/Answer';

export default (isSignedIn = false) => {
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn
        }),
        App: createBottomTabNavigation(
          {
            Checkins,
            HelpOrder: {
              screen: createStackNavigator(
                {
                  HelpOrder,
                  NewHelpOrder,
                  Answer
                },
                {
                  defaultNavigationOptions: {
                    headerTransparent: true,
                    headerTintColor: '#fff',
                    headerLeftContainerStyle: {
                      marginLeft: 20
                    }
                  }
                }
              ),
              navigationOptions: {
                tabBarVisible: false,
                tabBarLabel: 'Pedir ajuda',
                tabBarIcon: (
                  <Icon name="comment-question" size={20} color="#999" />
                )
              }
            }
          },
          {
            resetOnBlur: true,
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#ee4e62',
              inactiveTintColor: '#999',
              style: {
                backgroundColor: '#fff'
              }
            }
          }
        )
      },
      {
        initialRouteName: isSignedIn ? 'App' : 'Sign'
      }
    )
  );
};

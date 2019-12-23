// import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import SignIn from '~/pages/SignIn';

import Checkins from '~/pages/Checkins';
import HelpOrder from '~/pages/HelpOrders/HelpOrder';
import NewHelpOrder from '~/pages/HelpOrders/NewHelpOrder';
import Answer from '~/pages/HelpOrders/Answer';

export default (isSignedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
        }),
        App: createBottomTabNavigator(
          {
            Checkins,
            HelpOrder,
          },
          {
            resetOnBlur: true,
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#ee4e62',
              inactiveTintColor: '#999',
              style: {
                backgroundColor: '#fff',
              },
            },
          }
        ),
        New: {
          screen: createStackNavigator(
            {
              NewHelpOrder,
              Answer,
            },
            {
              defaultNavigationOptions: {
                headerTransparent: true,
                headerTintColor: '#999',
                headerLeftContainerStyle: {
                  marginLeft: 20,
                },
              },
            }
          ),
        },
      },
      {
        initialRouteName: isSignedIn ? 'App' : 'Sign',
      }
    )
  );

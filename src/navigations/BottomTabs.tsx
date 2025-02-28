import React from 'react';
import {StyleSheet, Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Route} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {ScreenNames} from '../constants/screensName';

// Import screens
import HomeScreen from '../screens/mainScreen/home';
import Benefits from '../screens/mainScreen/Benefits';
import PlaynMove from '../screens/mainScreen/PlayNMove';
import Help from '../screens/mainScreen/help';
import Profile from '../screens/mainScreen/profile';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}: {route: Route<string>}) => ({
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabLabel,
        tabBarIcon: ({focused, color, size}) => {
          let IconComponent;
          let iconName;

          switch (route.name) {
            case ScreenNames.Home:
              IconComponent = MaterialCommunityIcons;
              iconName = 'home-outline';
              break;
            case ScreenNames.Benefits:
              IconComponent = Ionicons;
              iconName = 'diamond-outline';
              break;
            case ScreenNames.PlaynMove:
              IconComponent = FontAwesome6;
              iconName = 'running';
              break;
            case ScreenNames.Help:
              IconComponent = MaterialCommunityIcons;
              iconName = 'lifebuoy';
              break;
            case ScreenNames.Profile:
              IconComponent = MaterialCommunityIcons;
              iconName = 'account-circle-outline';
              break;
            default:
              return null;
          }

          return (
            <IconComponent
              name={iconName}
              size={focused ? 28 : 24} // Bigger icon when focused
              color={focused ? '#0071A8' : 'grey'}
              style={styles.iconSpacing}
            />
          );
        },
        tabBarActiveTintColor: '#0071A8',
        tabBarInactiveTintColor: 'grey',
        headerShown: false,
      })}>
      <Tab.Screen name={ScreenNames.Home} component={HomeScreen} />
      <Tab.Screen name={ScreenNames.Benefits} component={Benefits} />
      <Tab.Screen name={ScreenNames.PlaynMove} component={PlaynMove} />
      <Tab.Screen name={ScreenNames.Help} component={Help} />
      <Tab.Screen name={ScreenNames.Profile} component={Profile} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'white',
    height: Platform.OS === 'android' ? 70 : 90,
    position: 'absolute',
    paddingVertical: 5,
    borderTopWidth: 0.5,
    borderTopColor: '#ccc',
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 6,
  },
  iconSpacing: {
    marginTop: 5,
  },
});

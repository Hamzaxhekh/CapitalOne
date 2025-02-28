import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenNames } from '../constants/screensName';
import CapitalOneLogin from '../screens/mainScreen/Login';
import { BottomTabsNavigator } from './BottomTabs';
import CardDetailScreen from '../screens/mainScreen/CardDetailScreen';
import TransactionScreen from '../screens/mainScreen/transactions';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name={ScreenNames.CapitalOneLogin}
          component={CapitalOneLogin}
        />
        {/* Use BottomTabsNavigator instead of HomeScreen */}
        <Stack.Screen name={ScreenNames.Home} component={BottomTabsNavigator} />
        <Stack.Screen name={ScreenNames.CardDetailScreen} component={CardDetailScreen} />
        <Stack.Screen name={ScreenNames.TransactionScreen} component={TransactionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

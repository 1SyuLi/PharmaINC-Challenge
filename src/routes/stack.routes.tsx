import React from 'react';

import { Home } from '../screens/Home';
import { User } from '../screens/User';

import { createStackNavigator } from '@react-navigation/stack';
const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
    return (
        <Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
                headerShown: false,
            }}
        >

            <Screen
                name="HomeScreen"
                component={Home}
            />

            <Screen
                name="User"
                component={User}
            />

        </Navigator>
    );
}
import React from 'react';
import { Platform } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Home } from '../screens/Home';
import { CustomTabBarButton } from './CustomTabBarButton';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const { Navigator, Screen } = createBottomTabNavigator();


export function TabRoutes() {
    const theme = useTheme();

    return (
        <Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarActiveTintColor: theme.colors.white,
                tabBarInactiveTintColor: theme.colors.white,
                tabBarStyle: {
                    backgroundColor: theme.colors.placeholder,
                    borderTopWidth: 0,
                    height: 75,
                    paddingVertical: Platform.OS === "ios" ? 20 : 0,
                },
            }}
        >


            <Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <CustomTabBarButton name="home" size={40} color={color} />
                    ),
                    tabBarActiveTintColor: "#fff",
                }}
            />

        </Navigator>
    );
}
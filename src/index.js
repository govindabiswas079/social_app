import { View, Text } from 'react-native'
import React from 'react'
import { Fragment } from 'react'
import { HomeScreen, ChatScreen, SeetingScreen } from './Screens'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

export const App = () => {
  return (
    <Fragment>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="ChatScreen" component={ChatScreen} />
          <Stack.Screen name="SeetingScreen" component={SeetingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Fragment>
  )
}

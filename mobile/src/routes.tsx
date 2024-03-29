import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './pages/Home'
import Detail from './pages/Detail'
import Points from './pages/Points'

const AppStack = createStackNavigator()

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator 
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: '#f0f0f0'
          }
        }}
      >
        <AppStack.Screen component={Home} name="Home" />
        <AppStack.Screen component={Detail} name="Detail" />
        <AppStack.Screen component={Points} name="Points" />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
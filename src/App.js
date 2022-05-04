import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TodoListQueryRenderer from './TodoListQueryRenderer';
import { Home } from './screens/Home';
import PersonRenderer from './PersonRenderer';


import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="To do" component={TodoListQueryRenderer} />
      <Drawer.Screen name="Person" component={PersonRenderer} />
      
    </Drawer.Navigator>
    </NavigationContainer>
  );
}
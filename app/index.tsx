import React from 'react'
import {
  StatusBar, 
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native'
import { Text, Card, Button, Icon } from '@rneui/themed'
import { NavigationContainer, } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Cards from '../components/Cards/cards'
import Actions from '../components/Actions/actions'
import Fundos from '../components/Fundos/fundos'


const Stack = createNativeStackNavigator()


export default function  App () {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name='Desafio'
          options={{
          
            headerTintColor: '#7759c2',
            headerBackVisible: false,
          }}
          component={Cards}
        />
        <Stack.Screen
          name='Actions'
          
          component={Actions}
        />
        <Stack.Screen
          name='Fundos'
          
          component={Fundos}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}



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

const Stack = createNativeStackNavigator()

export default function  App () {
  return (
    <NavigationContainer independent={true}>
      
      <Stack.Navigator>
        <Stack.Screen
          name='Desafio'
          options={{
            headerStyle: {
              backgroundColor: '#ffff',
            },
            headerTintColor: '#7759c2',
            headerBackVisible: false,
          }}
          component={Cards}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}



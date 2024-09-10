
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
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Cards from '../../components/Cards/cards'
import Actions from '../../components/Actions/actions'
import Fundos from '../../components/Fundos/fundos'

import Previdencias from '../../components/Previdencias/previdencias'
import arrow from '../../assets/images/arrow-back.png'

const Stack = createNativeStackNavigator()

export default function  AppRoutes () {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name='Desafio'
          options={{
            headerTintColor: '#7759c2',
          }}
          component={Cards}
        />
        <Stack.Screen
          name='Actions'
          options={{
            headerBackVisible: true,
            headerTintColor: 'blank',

            title: 'Ações',

            headerTitleStyle: {
              color: '#7759c2',
              fontWeight: 'bold',
              fontSize: 24,
            },

            headerBackImageSource: require('../../assets/images/arrow.png'),
          }}
          component={Actions}
        />
        <Stack.Screen
          name='Fundos'
          component={Fundos}
          options={{
            headerBackVisible: true,
            headerTintColor: '#7759c2',
            title: 'Fundos',
          }}
        />

        <Stack.Screen
          name='Previdencias'
          component={Previdencias}
          options={{
            headerBackVisible: true,
            headerTintColor: 'blank',
            title: 'Previdências',

            headerTitleStyle: {
              color: '#7759c2',
              fontWeight: 'bold',
              fontSize: 24,
            },

            headerBackImageSource: require('../../assets/images/arrow.png'),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )



  
}


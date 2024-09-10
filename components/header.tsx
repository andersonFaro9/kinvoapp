
import React from 'react'
import {View, StyleSheet} from 'react-native'
const Stack = createNativeStackNavigator()
import { Text, Card, Button, Icon } from '@rneui/themed'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Cards from '../components/Cards/cards'
import Actions from './Actions/actions'
import Fundos from '../components/Fundos/fundos'

export default function Header() {
    return (
      <>
        <View style = { styles.header}></View>
      </>
    )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 30,

    flexDirection: 'row',
    justifyContent: 'center',
  },

  challenge: {
    color: 'red'
  }
})
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Header from '../components/header'
const Stack = createNativeStackNavigator()
const {Navigator, Screen}  = createNativeStackNavigator()
import Routes from './routes/app.routes'


export default function  App () {
  return (
    <>
      <Header />
     
      <Routes />
    </>
  )
}



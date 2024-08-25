import React from 'react'
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native'
import { Text, Card, Button, Icon } from '@rneui/themed'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const users = [
  {
    id: 'actions',
    title: 'Ações',
    subtitle: 'Nacionais',
    avatar: require('../../assets/images/action1.png'),
  },
  {
    id: 'fundos',
    title: 'Fundos',
    subtitle: 'De investimentos',
    avatar: require('../../assets/images/investimento.png'),
  },

  {
    id: 'previdencias',
    title: 'Previdências',
    subtitle: 'Privadas',
    avatar: require('../../assets/images/previdencias.png'),
  },
]


const onUsersPress = (title: string) => {
  console.warn(title)
}
const Cards = () => {

  return (
    
      <View style={styles.container}>
        {users.map((users) => {
          return (
            <TouchableOpacity
              key={users.id}
              onPress={() => onUsersPress(users.title)}
            >
              <View key={users.id} style={styles.user}>
                <Image
                  style={styles.image}
                  resizeMode='cover'
                  source={users.avatar}
                />
                <View style={styles.info}>
                  <Text style={styles.title}>{users.title} </Text>
                  <Text style={styles.subTitle}>{users.subtitle} </Text>
                </View>

                {users.title == 'Fundos' && (
                  <Image source={require('../../assets/images/new.png')} />
                )}
              </View>
            </TouchableOpacity>
          )
        })}
      </View>
    
  )
}

const styles = StyleSheet.create({
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 14,
    borderColor: '#1111',
    backgroundColor: 'white',
    borderWidth: 2,
    width: 351,
    marginRight: 2,
    marginTop: 22,
    height: 160,
    lineHeight: 4,
  },

  title: {
    color: '#7759c2',
    fontWeight: 'bold',
  },

  subTitle: {
    color: '#000000d3',
  },

  container: {
    alignItems: 'center',
    
    justifyContent: 'center',
  },
  image: {
    width: 70,
    height: 70,
    marginLeft: 15,
  },
  info: {
    flexDirection: 'column',
    fontSize: 16,
    gap: 3,
    width: 170,
    paddingLeft: 12,
    paddingTop: 1,
  },
})

export default Cards

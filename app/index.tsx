import React from 'react'
import { View, ScrollView, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'
import { Text, Card, Button, Icon } from '@rneui/themed'

const users = [
  {
    id: 'actions',
    title: 'Ações',
    subtitle: 'Nacionais',
    avatar: require('../assets/images/action.png'),
  },
  {
    id: 'fundos',
    title: 'Fundos',
    subtitle: 'Nacionais',
    avatar: require('../assets/images/investimento.png'),
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
                <Text>{users.title} </Text>
                <Text>{users.subtitle} </Text>
              </View>
              
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
    borderWidth: 1.1,
    width: 330,
    marginTop: 22,
    height: 160,
    lineHeight: 4,
    
    
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
    fontSize: 16,
    paddingLeft: 12,
    paddingTop: 1,
  },
})

export default Cards

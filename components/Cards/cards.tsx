import React from 'react'
import {
  View,

  StyleSheet,
  Image,
  TouchableOpacity,

} from 'react-native'
import { Text, Card, Button, Icon } from '@rneui/themed'
import {useNavigation} from '@react-navigation/native'


const users = [
  {
    id: 'actions',
    title: 'Ações',
    subtitle: 'Nacionais',
    avatar: require('../../assets/images/actions.png'),
  },
  {
    id: 'fundos',
    title: 'Fundos',
    subtitle: 'De investimentos',
    avatar: require('../../assets/images/funds.png'),
  },

  {
    id: 'previdencias',
    title: 'Previdências',
    subtitle: 'Privadas',
    avatar: require('../../assets/images/pension.png'),
  },
]


const Cards = () => {
  const navigation = useNavigation()
    return (
      <View style={styles.container}>
        
        {users.map((users) => {
          return (
            <TouchableOpacity
              key={users.id}
              onPress={() => {
                switch (users.id) {
                  case 'actions':
                    return navigation.navigate({ name: 'Actions' })

                  case 'previdencias':
                    return navigation.navigate({ name: 'Previdencias' })
                }
              }}
            >
              <View key={users.id} style={styles.user}>
                <View style={styles.avatar}>
                  <Image style={styles.icon} source={users.avatar} />
                </View>
                <View style={styles.info}>
                  <Text style={styles.title}>{users.title} </Text>
                  <Text style={styles.subtitle}>{users.subtitle} </Text>
                </View>

                {users.title == 'Fundos' && (
                  
                  <Text style={styles.new}> Novo </Text>
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
    width: 371,
    marginRight: 2,
    marginTop: 22,
    height: 160,
    lineHeight: 4,
  },

  title: {
    color: '#7759c2',
    fontWeight: 'bold',
  },

  subtitle: {
    color: '#000000d3',
  },

  container: {
    alignItems: 'center',
    backgroundColor: '#ECF0F2',
    justifyContent: 'center',
  },
  icon: {
    width: 32,
    height: 32,
    margin: 17,
    borderRadius: 2,
    
  },
  avatar: {
    width: 70,
    height: 70,
    marginLeft: 10,
    borderRadius: 92,
    backgroundColor: '#707B811A',
  },

  new: {
    backgroundColor: '#36C4D6',
    borderRadius: 23,
    width: 92,
    margin: 10,
    color: 'white',
    padding: 8,
    textAlign: 'center',
    height: 36,
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

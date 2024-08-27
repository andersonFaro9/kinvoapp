import React from 'react'
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native'
import { Text, Card, Button, Icon, Divider } from '@rneui/themed'
import { NavigationContainer } from '@react-navigation/native'
import { useRoute } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'
import ImageButton from 'react-native-img-button'

const users = [
  {
    id: 'actions',
    title: 'Ações',
    subtitle: 'Nacionais',
    avatar: require('../../assets/images/heart.png'),
  },
 
]

const Actions = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      {users.map((users) => {
        return (
          <TouchableOpacity key={users.id} onPress={() => {}}>
            <View key={users.id} style={styles.user}>
              <View style={styles.info}>
                <View>
                  <Text style={styles.title}>Magazine Luiza</Text>
                  <Text style={styles.subtitle}>MGLU3</Text>
                </View>
                

                <Image
                  style={styles.image}
                  resizeMode='cover'
                  source={users.avatar}
                />
              </View>
              {/* <View style={styles.title2}>
                <Text numberOfLines={1}>________________</Text>
              </View> */}

              
            </View>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 16,
    gap: 46,
    width: 350,
    paddingTop: 12,
    paddingLeft: 12,
  },

  title2: {
    flexDirection: 'column',
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  user: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: 371,
    gap: 92,

    alignItems: 'center',
    borderRadius: 14,
    borderColor: '#1111',
    backgroundColor: 'white',
    borderWidth: 2,
    marginTop: 22,
    height: 160,
  },

  title: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 17,
  },
  subtitle: {
    color: '#000000',
    fontWeight: '700',
    paddingTop: 2,
    paddingBottom: 32,
  },

  container: {
    alignItems: 'center',

    justifyContent: 'center',
  },
  image: {
    width: 40,
    height: 40,
  },
})

export default Actions

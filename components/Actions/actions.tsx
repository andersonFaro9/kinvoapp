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
            <View style={styles.success}>
              <View>
                <Text style={styles.name}>Magazine Luiza</Text>
                <Text style={styles.horizontalText}>MGLU3</Text>

                <Divider />
                <View style={styles.valor}>
                  <Text>Valor minimo</Text>
                  <Text>R$24,17</Text>
                </View>

                <View style={styles.valor}>
                  <Text>Rentabilidade</Text>
                  <Text style={styles.minimum}>27%</Text>
                </View>
                
              </View>

              <Image style={styles.image} source={users.avatar} />
            </View>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  success: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    fontSize: 16,
    width: 350,
    paddingTop: 12,
    paddingLeft: 28,
    borderRadius: 14,
    borderColor: '#1111',
    backgroundColor: 'white',
    borderWidth: 2,
    marginTop: 22,
    height: 160,
  },

  horizontalText: {
    textAlign: 'left',
    fontSize: 16,
    borderEndWidth: 250,
    marginVertical: 10,
  },
  value: {
    flexDirection: 'column',
    paddingTop: 42,
  },
  valor: {
    width: 120,

    flexDirection: 'row',
    gap: 162,
    paddingTop: 12,
    justifyContent: 'space-between',
  },
  name: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 17,
    paddingLeft: 2,
  },

  image: {
    width: 40,
    marginRight: 22,
    height: 40,
  },
  ticker: {
    color: '#000000',
    fontWeight: '700',
    paddingTop: 0,

    marginBottom: 11,
    paddingBottom: 32,
  },

  minimum: {
    letterSpacing: 1,
    paddingLeft: 21,
  },

  minimumValue: {
    color: '#000000',
    fontWeight: 'normal',
    fontSize: 17,
  },
  container: {
    alignItems: 'center',

    justifyContent: 'center',
  },
})

export default Actions

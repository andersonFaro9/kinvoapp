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
              <View style = {styles.line}>
                <Text style={styles.name}>Magazine Luiza</Text>
                <Text style={styles.ticker}>MGLU3</Text>
                <Text style={styles.minimum}>Valor minimo</Text>
                <Text style={styles.minimum}>Rentabilidade</Text>
              </View>

              <View>
                <Image
                  style={styles.image}
                  resizeMode='cover'
                  source={users.avatar}
                />
                
                <Text style={styles.value}>R$24,17</Text>
                <Text>-27%</Text>
              </View>
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
    justifyContent: 'flex-start',
    gap: 142,
    
    fontSize: 16,
    width: 350,
    paddingTop: 12,
    paddingLeft: 12,
    borderRadius: 14,
    borderColor: '#1111',
    backgroundColor: 'white',
    borderWidth: 2,
    marginTop: 22,
    height: 160,
  },

  line : {
    borderCurve:'circular' ,
    
  },
  value: {
    flexDirection: 'column',
    paddingTop: 42,
    
  },
  name: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 17,
  },

  image: {
    width: 40,
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
    gap: 222,
    
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

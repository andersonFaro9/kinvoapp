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
import { useEffect, useState } from 'react'

import {api} from '../../app/api/api'
const users = [
  {
    id: 'actions',
    title: 'Ações',
    subtitle: 'Nacionais',
    avatar: require('../../assets/images/heart_selected.png'),
  },
 
]

interface IActions {
  id: number, 
  name: string,
  ticker: string,
  minimumValue: number,
  profitability:number,
}

const Actions = () => {
  const navigation = useNavigation()

  const [actions,setActions] = useState<IActions[]>([])

  const [loading,setLoading] = useState(false)
  
  
   useEffect(() => {
    getActions()
  }, [actions])
  

  async function getActions() {
    setLoading(true)
    try {
      const actions = await api
        .get('/stocks')
        .then((response) => {
          setActions(response.data)
          console.log('everything okay', actions)
        })
      setLoading(false)
      
    } catch (err) {
      console.log('fail', actions)
    }
  }
 
  return (
    <View style={styles.container}>
      {loading ? (
        <Text>carregando...</Text>
      ) : (
        <View>
          {actions.map((details) => {
            return (
              <TouchableOpacity key={details.id} onPress={() => {}}>
                <View style={styles.success}>
                  <View>
                    <Text style={styles.name}>{details.name}</Text>
                    <Text style={styles.ticker}>{details.ticker}</Text>

                    <Divider />
                    <View style={styles.minimumValue}>
                      <Text>Valor minimo: {details.minimumValue}</Text>
                    </View>

                    <View style={styles.profitability}>
                      <Text>
                        Rentabilidade:{details.profitability}
                      
                      </Text>
                      
                    </View>
                  </View>

                  <Image style={styles.image} source={users.avatar} />
                </View>
              </TouchableOpacity>
            )
          })}
        </View>
      )}
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
  name: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 17,
    paddingLeft: 2,
  },
  ticker: {
    textAlign: 'left',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000e5',
    borderEndWidth: 250,
    marginVertical: 10,
  },
  value: {
    flexDirection: 'column',
    paddingTop: 42,
  },
  minimumValue: {
    width: 120,

    flexDirection: 'row',
    gap: 162,
    paddingTop: 12,
    justifyContent: 'space-between',
  },

  profitability: {
    width: 120,

    flexDirection: 'row',
    gap: 162,
    paddingTop: 12,
    justifyContent: 'space-between',
  },

  image: {
    width: 40,
    marginRight: 22,
    height: 40,
  },

  minimum: {
    letterSpacing: 1,
    paddingLeft: 21,
  },

  container: {
    alignItems: 'center',

    justifyContent: 'center',
  },
})

export default Actions

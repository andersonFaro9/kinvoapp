import React, {FC} from 'react'
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  Switch,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Pressable,
  
} from 'react-native'
import { Text, Card, Button, Icon, Divider } from '@rneui/themed'

import { useEffect, useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import Ionicons from '@expo/vector-icons/Ionicons'
interface IActions {
  id?: number, 
  name: string,
  ticker: string,
  minimumValue: number,
  profitability:number,
  heart: string,
  
}


interface IHeart {
  id: number
  name: string
}


const Actions = () => {
  const [actions, setActions] = useState<IActions[]>([])
  const [loading, setLoading] = useState(false)
  const [favoriteList, setFavoriteList] = useState<IHeart[]>([])

  const currencyBRL = (value: number) => value.toLocaleString('pt-BR')

  // Função para adicionar à lista de favoritos
  const onFavorite = (heart: IHeart) => {
    setFavoriteList([...favoriteList, heart])
    console.log(favoriteList)
  }

  // Função para remover da lista de favoritos
  const onRemoveFavorite = (heart: IHeart) => {
    const filteredList = favoriteList.filter((item) => item.id !== heart.id)
    setFavoriteList(filteredList)
  }

  // Verifica se a ação já foi favoritada
  const ifExists = (heart: IHeart): boolean => {
    return favoriteList.some((item) => item.id === heart.id)
  }

  
  async function getActions() {
    setLoading(true)
    try {
      const response = await fetch(
        'https://6266f62263e0f382568936e4.mockapi.io/stocks'
      )
      const json = await response.json()
      setActions(json.data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  
  useEffect(() => {
    getActions()
  }, [])

  // Ordenação: favorita primeiro e depois alfabeticamente
  const sortedActions = actions.map((action) => ({
      ...action,
      favorite: favoriteList.some((heart) => heart.id === action.id), // Marca se a ação é favorita
    })).sort((a, b) => {
      // Coloca os favoritos primeiro
      if (a.favorite && !b.favorite) return -1
      if (!a.favorite && b.favorite) return 1
      
      return a.name.localeCompare(b.name)
    })

  return (
    <ScrollView>
      <View>
        {loading ? (
          <View style={styles.loading}>
            <Image source={require('../../assets/images/load.png')} />
          </View>
        ) : (
          <View>
            {sortedActions.map((details) => {
              return (
                <TouchableWithoutFeedback
                  key={details.id}
                  onPress={() =>
                    ifExists(details)
                      ? onRemoveFavorite(details)
                      : onFavorite(details)
                  }
                >
                  <View style={styles.success}>
                    <View style={styles.details} key={details.id}>
                      <Text style={styles.name}>{details.name}</Text>
                      <View style={styles.heart}>
                        <MaterialCommunityIcons
                          name={ifExists(details) ? 'heart' : 'heart-outline'}
                          size={32}
                          color={'#6f4dbf'}
                        />
                      </View>
                    </View>
                    <View style={styles.ticker}>
                      <Text style={styles.details}>{details.ticker}</Text>
                    </View>
                    <Divider style={styles.divider} />
                    <View style={styles.minimumValue}>
                      <Text style={styles.minimumValueText}>Valor minimo:</Text>

                      <Text style={styles.details}>
                        R$ {currencyBRL(details.minimumValue)}
                      </Text>
                    </View>

                    <View style={styles.profitability}>
                      <Text>Rentabilidade:</Text>

                      <Text style={styles.profitabilityText}>
                        <Ionicons name='arrow-down' size={15} />
                        {details.profitability}%
                      </Text>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              )
            })}
          </View>
        )}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  success: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: 380,
    paddingTop: 5,
    paddingLeft: 22,
    paddingRight: 42,
    borderRadius: 14,
    borderColor: '#1111',
    backgroundColor: 'white',
    borderWidth: 2,
    margin: 12,
    height: 160,
  },

  heart: {
    justifyContent: 'center',
    alignItems: 'flex-end'
  },

  loading : {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 100,
    alignItems: 'center'
  },
  details: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    fontWeight: 'bold',
  },
  name: {
    fontWeight: 'bold',
  },
  ticker: {
    marginTop: -12,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  divider: {
    marginTop: 10,
  },

  minimumValue: {
    marginTop: 2,

    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  minimumValueText: {
    
  },
  profitability: {
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  profitabilityText: {
    color: '#E85D1F',
    fontWeight: 'bold',
  },
})


export default Actions
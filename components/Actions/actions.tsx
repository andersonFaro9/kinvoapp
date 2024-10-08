import React from 'react'
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  
} from 'react-native'
import { Text, Card, Button, Icon, Divider } from '@rneui/themed'

import { useEffect, useState } from 'react'

import Ionicons from '@expo/vector-icons/Ionicons'

interface IActions {
  id: number, 
  name: string,
  ticker: string,
  minimumValue: number,
  profitability:number,
  heart: string,
}

const Actions = () => {

  const [actions,setActions] = useState<IActions[]>([])

  const [loading,setLoading] = useState(false)
  
  async function getActions() {
    setLoading(true)
     try {

      const response = await fetch(
        'https://6266f62263e0f382568936e4.mockapi.io/stocks'
        
      ) 
      const json = await response.json()

      setActions(json.data)
     
    } catch(error) {
      console.log(error)
    } finally {
      setLoading(false);
    }
       

  }

  useEffect(() => {
    getActions()
  }, [])
 
  return (
    <ScrollView>
      <View>
        {loading ? (
          <View style={styles.loading}>
            <Image source={require('../../assets/images/load.png')} />
          </View>
        ) : (
          <View>
            {actions.map((details) => {
              return (
                <TouchableOpacity key={details.id} onPress={() => {}}>
                  <View style={styles.success}>
                    <View style={styles.details}>
                      <Text style={styles.name}>{details.name}</Text>
                      <TouchableOpacity key={details.id} onPress={() => {}}>
                        <Ionicons
                          name='heart-outline'
                          size={32}
                          color='#7759c2'
                        />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.ticker}>
                      <Text style={styles.details}>{details.ticker}</Text>
                    </View>
                    <Divider style={styles.divider} />
                    <View style={styles.minimumValue}>
                      <Text style={styles.minimumValueText}>Valor minimo:</Text>
                      
                      <Text style={styles.details}>
                        R$ {details.minimumValue}
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
                </TouchableOpacity>
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

  loading : {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 100,
    alignItems: 'center'
  },
  details: {
    flexDirection: 'row',
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
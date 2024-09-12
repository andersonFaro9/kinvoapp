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
  type: string,
  tax: number,
  redemptionTerm: number,
  minimumValue: number,
  profitability:number,
  
}


export default function Previdencias() {
     const [actions,setActions] = useState<IActions[]>([])

  const [loading,setLoading] = useState(false)
  
  async function getActions() {
    setLoading(true)
     try {

      const response = await fetch(
        'https://6266f62263e0f382568936e4.mockapi.io/pension'
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
      <View style={styles.containerfilter}>
        <TouchableOpacity >
          <Text style={styles.taxTag}> SEM TAXA </Text>
          
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}} style={styles.filter}>
          <Text style = {styles.minimumValueFilter}> R$ 100,00 </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}} style={styles.filter}>
          <Text style = {styles.dPlus}> D+1 </Text>
        </TouchableOpacity>
      </View>
      <Divider style={styles.divider} />
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
                        {details.name == 'Adam XP Seg Prev I FIC FIM' && (
                          <Text style={styles.new}> Novo </Text>
                        )}
                      </TouchableOpacity>
                    </View>
                    <View style={styles.ticker}>
                      <Text style={styles.details}>{details.type}</Text>
                    </View>
                    <Divider style={styles.dividerValue} />
                    <View style={styles.minimumValue}>
                      <Text>Valor minimo:</Text>

                      <Text style={styles.details}>
                        R$ {details.minimumValue}
                      </Text>
                    </View>

                    <View style={styles.tax}>
                      <Text>Taxa:</Text>
                      <Text>{details.tax  <= 0 && details.tax } %</Text>
                    </View>

                    <View style={styles.redemptionTerm}>
                      <Text>Rentabilidade:</Text>
                      <Text style = {styles.textRedemptionTerm}>
                        
                        <Ionicons
                          color={'#E85D1F'}
                          name='arrow-down'
                          size={15}
                        />
                        {details.profitability}
                      </Text>
                    </View>
                    <View style={styles.redemptionTerm}>
                      <Text>Resgate:</Text>
                      <Text>D+ {details.redemptionTerm}</Text>
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
  containerfilter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },

  filter: {
    backgroundColor: 'white',
    borderRadius: 43,
    width: 110,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    fontWeight: 'bold',
    height: 42,
  },

  taxTag: {
    backgroundColor: '#7759c2',
    borderRadius: 43,
    width: 110,
    fontWeight: '700',
    padding: 10,
    color: 'white',
    height: 42,
  },
  tax: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },

  colorTextTax: {
    color: '#E85D1F',
    fontWeight: 'bold',
  },

  minimumValueFilter: {
    fontWeight: '700',
  },
  dPlus: {
    fontWeight: '700',
  },

  new: {
    backgroundColor: '#36C4D6',
    borderRadius: 23,
    width: 92,
    color: 'white',
    padding: 8,
    marginLeft: 72,
    textAlign: 'center',
    height: 36,
  },

  loading: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 100,
    alignItems: 'center',
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
    margin: 20,
  },
  dividerValue: {
    width: 330,
  },
  minimumValue: {
    marginTop: 2,

    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  profitability: {
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  redemptionTerm: {
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textRedemptionTerm: {
    color: '#E8251F',
    fontWeight: 'bold',
  },

  profitabilityText: {
    color: '#E85D1F',
    fontWeight: 'bold',
  },
})
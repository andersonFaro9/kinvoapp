import React from 'react'
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native'
import { Text, Card, Button, Icon, Divider } from '@rneui/themed'

import { useEffect, useState } from 'react'

import Ionicons from '@expo/vector-icons/Ionicons'

interface IActions {
  id: number
  name: string
  type: string
  tax: number
   redemptionTerm: number
  minimumValue: number
  profitability: number
  
}

export default function Previdencias() {
  const [actions, setActions] = useState<IActions[]>([])

  const [loading, setLoading] = useState(false)
  
  const currencyBRL = (value: number) => value.toLocaleString('pt-BR' )
  
  
  const [taxFilter, setTaxFilter] = useState('')
  const [cem, setCem] = useState('')
  const [redemption, setRedemption] = useState('')


  function showFilterTaxZero(_filter:string) {
    setTaxFilter(_filter)
  }

  function addTaxZeroFilter() {
    if (taxFilter === 'tax') {
      return actions.filter((action) => action.tax === 0)
    }
  }
  
  function showFilterMiniumCem(_cem: string) {
    setCem(_cem)
  }
  
  function addMinimumValue() {
    if (cem === 'minimumValue') {
      return actions.filter((action) => action.minimumValue === 100)
    }
  }

  function showRedemptionTerm(redemption: string) {
    setRedemption(redemption)
    console.log(redemption)
  }

  function addRedemptionFilterDUm() {
    if (redemption === 'redemptionTerm') {
      return actions.filter((action) => action.redemptionTerm == 1)
    }
  }

  function applyFilters() {
    let filteredActions = actions

    if (taxFilter === 'tax') {
      filteredActions = filteredActions.filter((action) => action.tax === 0)
    }

    if (cem === 'minimumValue') {
      filteredActions = filteredActions.filter(
        (action) => action.minimumValue === 100
      )
    }

    if (redemption === 'redemptionTerm') {
      filteredActions = filteredActions.filter(
        (action) => action.redemptionTerm === 1
      )
    }

    return filteredActions
  }
  
  async function getActions() {
    setLoading(true)
    try {
      const response = await fetch(
        'https://6266f62263e0f382568936e4.mockapi.io/pension'
      )
      
     

      if (taxFilter === 'tax') {
        return actions.filter((action) => action.tax === 0)
        
      }
      

      if (cem === 'minimumValue') {
        return actions.filter((action) => action.minimumValue === 100)
      }

      if (redemption === 'redemptionTerm') {
        return actions.filter((action) => action.redemptionTerm == 1)
        
      }
      
      
      
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
    setActions(applyFilters())

    const random = addTaxZeroFilter()

    random != null && setActions(random)

    const addCem = addMinimumValue()

    addCem != null && setActions(addCem)

    const addDUm = addRedemptionFilterDUm()

    addDUm != null && setActions(addDUm)
    
  }, [taxFilter, cem, redemption])


  return (
    <ScrollView>
      <View style={styles.containerfilter}>
        <TouchableOpacity onPress={()=>{showFilterTaxZero('tax')}}>
          <Text style={styles.taxTag}> SEM TAXA </Text>
          
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { showFilterMiniumCem('minimumValue') }} style={styles.filter}>
          <Text style={styles.minimumValueFilter}> R$ 100,00 </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {showRedemptionTerm('redemptionTerm')}} style={styles.filter}>
          <Text style={styles.dPlus}> D+1 </Text>
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
                    <View style={styles.detailsName}>
                      <Text style={styles.name}>{details.name}</Text>
                      <TouchableOpacity key={details.id} onPress={() => {}}>
                        {details.name == 'Adam XP Seg Prev I FIC FIM' && (
                          <View style={styles.detailsNew}>
                            <Text style={styles.new}> Novo </Text>
                          </View>
                        )}
                      </TouchableOpacity>
                    </View>

                    <View style={styles.typeDetails}>
                      <Text style={styles.typeDetails}>{details.type}</Text>
                    </View>
                    <Divider style={styles.dividerValue} />

                    <TouchableWithoutFeedback
                      onPress={() => {
                        showFilterMiniumCem('minimumValue')
                      }}
                    >
                      <View style={styles.minimumValue}>
                        <Text>Valor minimo:</Text>

                        <Text style={styles.valueBold}>
                          R$ {currencyBRL(details.minimumValue)}
                        </Text>
                      </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback
                      onPress={() => {
                        showFilterTaxZero('tax')
                      }}
                    >
                      <View style={styles.tax}>
                        <Text>Taxa:</Text>

                        <Text style={styles.valueBold}>
                          {currencyBRL(details.tax)} %
                        </Text>
                      </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback
                      onPress={() => {
                        showRedemptionTerm('redemptionTerm')
                      }}
                    >
                      <View style={styles.redemptionTerm}>
                        <Text>Resgate:</Text>
                        <Text style={styles.textRedemptionTerm}>
                          <Text style={styles.valueBold}>
                            D+ {details.redemptionTerm}
                          </Text>
                        </Text>
                      </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback>
                      <View style={styles.profitability}>
                        <Text>Rentabilidade:</Text>

                        <Text style={styles.valueBold}>
                          <Ionicons
                            color={'#E85D1F'}
                            name='arrow-down'
                            size={15}
                          />

                          <Text style={styles.profitabilityText}>
                            {currencyBRL(details.profitability)} %
                          </Text>
                        </Text>
                      </View>
                    </TouchableWithoutFeedback>
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
  },
  containerfilter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  divider: {
    margin: 20,
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
    marginTop: 10,
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
    paddingTop: 8,
    marginBottom: 1,
    marginLeft: 62,
    textAlign: 'center',
    height: 36,
  },

  detailsNew: {
    marginBottom: -12,
  },
  loading: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 100,
    alignItems: 'center',
  },
  detailsName: {
    flexDirection: 'row',
    marginTop: 12,
    justifyContent: 'space-between',
    fontWeight: 'bold',
    lineHeight: 44,
  },
  name: {
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  typeDetails: {
    marginTop: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    fontWeight: '500',
    textTransform: 'uppercase',
  },

  dividerValue: {
    width: 330,
    marginTop: 10,
  },
  minimumValue: {
    marginTop: 22,

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  valueBold: {
    fontWeight: 'bold',
  },
  profitability: {
    marginTop: 15,

    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  redemptionTerm: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textRedemptionTerm: {
    color: '#E8251F',
    fontWeight: 'bold',
  },

  profitabilityText: {
    fontWeight: 'bold',
    color: '#E85D1F',
  },
})
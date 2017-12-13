import React from 'react'
import { Text, StyleSheet, Button, Platform, ScrollView } from 'react-native'
import { DrawerNavigator, SafeAreaView } from 'react-navigation'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import One from './App/Scene/One'
import Two from './App/Scene/Two'
import Three from './App/Scene/Three'

const Screen = ({ navigation }) => (
  <One title={'Тесла'} navigation={navigation} />
)

const Screen2 = ({ navigation }) => (
  <Two title={'Bmw'} navigation={navigation} />
)

const Screen3 = ({ navigation }) => (
  <Three title={'Мереседес'} navigation={navigation} />
)

const App = DrawerNavigator(
  {
    Screen: {
      path: '/',
      screen: Screen,
      navigationOptions: {
        drawerLabel: 'Tesla',
        drawerIcon: ({ tintColor }) => (
          <MaterialIcons name="grade" size={24} style={{ color: tintColor }} />
        ),
      }
    },
    Screen2: {
      path: '/',
      screen: Screen2,
      navigationOptions: {
        drawerLabel: 'BMW',
        drawerIcon: ({ tintColor }) => (
          <MaterialIcons name="favorite" size={24} style={{ color: tintColor }} />
        ),
      }
    },
    Screen3: {
      path: '/sent',
      screen: Screen3,
      navigationOptions: {
        drawerLabel: 'Мерседес',
        drawerIcon: ({ tintColor }) => (
          <MaterialIcons name="pets" size={24} style={{ color: tintColor }} />
        ),
      }
    },
  },
  {
    initialRouteName: 'Screen',
    contentOptions: {
      activeTintColor: '#e91e63',
    },
  }
)

export default App 

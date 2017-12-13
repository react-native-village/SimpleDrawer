/* @flow */

import React, { Component } from 'react'
import { Button, StyleSheet, Text, View, Image } from 'react-native'
import { Header } from '../Components'

const Two = ({ navigation, title }) => (
  <View style={styles.container}>
    <Header 
        title={title}
        leftButton
        leftIcon='md-menu'
        colorLeft='black'
        rightButton
        rightIcon='md-add'
        colorRight='black'
        navigation={navigation} 
        screen='DrawerOpen'
      />
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{ fontSize: 80 }}>2</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

export default Two 

import React, { useEffect, useState } from 'react';
import { Input, Text, View, Alert, StyleSheet, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Test from "./components/Test"
import SearchDetails from "./components/SearchDetails.js"
import CheckInSearch from './components/CheckInSearch.js';


import CheckIn from './components/CheckIn.js';
import CheckInConfirm from './components/CheckInConfirm.js';

import CheckOutSearch from './components/CheckOutSearch.js';
import CheckOut from './components/CheckOut.js';
import CheckOutConfirm from './components/CheckOutConfirm.js';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 24 }}>

      <Text style={styles.title}>
        Snipe-IT inventor Management system
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('CheckInSearch')} style={styles.button}>
        <Text style={styles.buttonText}>Check In</Text>
        { }
      </TouchableOpacity>

      <TouchableOpacity  title="Go to Details... again" onPress={() => navigation.navigate('CheckOutSearch')} style={styles.button}>
        <Text style={styles.buttonText}>Check Out</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SearchDetails')} style={styles.button}>
        <Text style={styles.buttonText}>Asset Details</Text>
      </TouchableOpacity>


      <TouchableOpacity onPress={() => navigation.navigate('Test')} style={styles.button}>
        <Text style={styles.buttonText}>Delete me please </Text>
      </TouchableOpacity>
  
      <TouchableOpacity onPress={() => alert('Hello, world!')} style={styles.button}>
        <Text style={styles.buttonText}>Test 2</Text>
      </TouchableOpacity>
      
      
      

    </View>
  );
}





const Stack = createNativeStackNavigator();

const YourApp = () => {
/*
var test = 'snipeit-test'
//var prod = 'vminventar.schnupp.de'

  const USER_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMzhmMTYwMDhlMGQ2NDZlNzQxMDAzMGQxNTM3ZWI1MWU2MmIzZDk3NzVlZmU1OTZlMTZiMzA3YWM3Y2Y2NDNkY2ZkYTIxZTJmNjdmOTgyMzQiLCJpYXQiOjE2NjE0MjYxNjEsIm5iZiI6MTY2MTQyNjE2MSwiZXhwIjoyMTM0ODExNzYwLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.pWF14zSaBslu3FFTRXPFosJkN1y-cERRwljZNYCPbg3jRCOgThVz0dldLVehu9tDNllzi6jQqhplcN5HlpIWuz0Jp__5JUKXBNrU782JqZadoChuxRNILAkzT7EJwOXuOtjS9Ij0zO5GMfKUc01I5RsDqD2ljcaQFFt_Mjn0lE6OGopj64JBl921BoS05i_TEty2n6kPxkWlQVt3HNGhs-f_RlHMaBlWQpOTf5_oFowjD3SwtH2ERw_E_oJIpS_RH_5fCbeRDvTZYr4tCPzRUYXoA4q4-hEpTH9newbKxATzwhZ9IB-9UXsnwVfe8owuY79okYkrTo4KYj2ynk1Se6tCT0tdwaqNwqYDzwzS3P3jmmneUmCrwXeyinX05KtIslK02e6q_Zud9Q7NSJq58hTy86HDIlMX2shhagVqZ0UchhSUbeCaM8Kc27zLC54KIJE_R25izBACw0wZLVYp2-OU9rgSK0OPl33DZ8VykHQtyXTVArV1bUoJxZHZqcpnUKmb2cG90K83CYZJFQ3rI_bPRfH1aIdqDM8MYAfDwxgtRBzp8tPF5uMUSKAifbFHMpC-Si90sF0uvVpYaKg9Ag8rqLXSQdFESwDim6149VFCzSJES9hh_X0S738PRShSCQDK-wJXN7M5-vP-XxezoB07ZGxpJJzeo9lAiyLC58Q'
  const AuthStr = 'Bearer '.concat(USER_TOKEN);
  console.log('AuthStr', AuthStr)
  axios.get('http://test/api/v1/hardware/725', { headers: { Authorization: AuthStr, Accept: 'application/json', "Content-Type": 'application/json' } })
    .then(response => {
      // If request is good...
      console.log("APP CONSOLE",response.data);
    })
    .catch((error) => {
      console.log('error produced' + error);
    });*/

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SearchDetails" component={SearchDetails} />
       
        <Stack.Screen name="CheckInSearch" component={CheckInSearch} />
        <Stack.Screen name="Test" component={Test} />
        <Stack.Screen name="CheckIn" component={CheckIn} />
        <Stack.Screen name="CheckInConfirm" component={CheckInConfirm} />
        <Stack.Screen name="CheckOutSearch" component={CheckOutSearch} />
        <Stack.Screen name="CheckOut" component={CheckOut} />
        <Stack.Screen name="CheckOutConfirm" component={CheckOutConfirm} />
        
      </Stack.Navigator>
    </NavigationContainer>

  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: "#80BDE3",
    padding: 20,
    margin: 10,
    borderRadius: 5,

    height: "auto",
    width: "auto",

  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});
export default YourApp;
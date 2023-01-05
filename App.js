<script src="http://192.168.11.3:8097"></script>
import React, { useEffect, useState } from 'react';
import { ScrollView, Input, Text, View, Alert, StyleSheet, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome';
import { Icon } from 'react-native-elements'
import { Divider, Button } from '@rneui/themed';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateNewAsset from "./components/Test"
import SearchDetails from "./components/SearchDetails.js"
import DataDetails from './components/DataDetails';
import CheckInSearch from './components/CheckInSearch.js';


import CheckIn from './components/CheckIn.js';
import CheckInConfirm from './components/CheckInConfirm.js';

import CheckOutSearch from './components/CheckOutSearch.js';
import CheckOut from './components/CheckOut.js';
import CheckOutConfirm from './components/CheckOutConfirm.js';

import EditAssetSearch from './components/EditAssetSearch';
import EditAssetDetails from './components/EditAssetDetails';
import EditAssetConfirm from './components/EditAssetConfirm';

import CloneAssetSearch from './components/CloneAssetSearch';
import CloneAsset from './components/CloneAsset';

import { NetworkInfo } from "react-native-network-info";
 
// Get Local IP
NetworkInfo.getIPAddress().then(ipAddress => {
  console.log(ipAddress);
});


console.log("hello world")
/*
var request = new XMLHttpRequest();
request.onreadystatechange = e => {
  if (request.readyState !== 4) {
    return;
  }

  if (request.status === 200) {
    console.log('success', request.responseText);
    
    
  } else {
    console.warn('i am error');
  }
};

request.open('GET', 'http://vmadmin01.schnupp.de/');
request.send();

*/


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 24 }}>
      <ScrollView>
        <Text style={styles.title}>
          Snipe-IT inventor Management system
        </Text>

        <Button
          onPress={() => navigation.navigate('CheckInSearch')}
          icon={
            <Icon
              name="login"
              size={40}
              color="white"
            />
          }
          iconRight
          title="Check In"
        />
        <Divider width={15} />
        <Button
          onPress={() => navigation.navigate('CheckOutSearch')}
          icon={
            <Icon
              name="logout"
              size={40}
              color="white"
            />
          }
          iconRight
          title="Check Out"
        />

        <Divider width={15} />
        <Button
          onPress={() => navigation.navigate('SearchDetails')}
          icon={
            <Icon
              name="list"
              size={40}
              color="white"
            />
          }
          iconRight
          title="Asset Details"
        />

        <Divider width={15} />
        <Button
          onPress={() => navigation.navigate('CreateNewAsset')}
          icon={
            <Icon
              name="arrow-right"
              size={40}
              color="white"
            />
          }
          iconRight
          title="Neues Asset erstellen"
        />

        <Divider width={15} />
        <Button
          onPress={() => navigation.navigate('EditAssetSearch')}
          icon={
            <Icon
              name="arrow-right"
              size={40}
              color="white"
            />
          }
          iconRight
          title="Edit Asset"
        />
<Divider width={15} />
<Button
          onPress={() => navigation.navigate('CloneAssetSearch')}
          icon={
            <Icon
              name="content-copy"
              size={40}
              color="white"
            />
          }
          iconRight
          title="Clone Asset"
        />







      </ScrollView>
    </View>
  );
}



const Stack = createNativeStackNavigator();
const YourApp = () => {
 
return (

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" options={{ title: 'Startseite' }} component={HomeScreen} />
          <Stack.Screen name="SearchDetails" options={{ title: 'Asset Details' }} component={SearchDetails} />
          <Stack.Screen name="DataDetails" options={{ title: 'Asset Details' }} component={DataDetails} />
          <Stack.Screen name="CheckInSearch" options={{ title: 'Check In' }} component={CheckInSearch} />
          <Stack.Screen name="CreateNewAsset" options={{ title: 'Neue Asset' }} component={CreateNewAsset} />
          <Stack.Screen name="CheckIn" options={{ title: 'Check In' }} component={CheckIn} />
          <Stack.Screen name="CheckInConfirm" options={{ title: 'Check In' }} component={CheckInConfirm} />
          <Stack.Screen name="CheckOutSearch" options={{ title: 'Check Out' }} component={CheckOutSearch} />
          <Stack.Screen name="CheckOut" options={{ title: 'Check Out' }} component={CheckOut} />
          <Stack.Screen name="CheckOutConfirm" options={{ title: 'Check Out' }} component={CheckOutConfirm} />
          <Stack.Screen name="EditAssetSearch" options={{ title: 'Edit Asset' }} component={EditAssetSearch} />
          <Stack.Screen name="EditAssetDetails" options={{ title: 'Edit Asset' }} component={EditAssetDetails} />
          <Stack.Screen name="EditAssetConfirm" options={{ title: 'Edit Asset' }} component={EditAssetConfirm} />
          <Stack.Screen name="CloneAssetSearch" options={{ title: 'Clone Asset' }} component={CloneAssetSearch} />
          <Stack.Screen name="CloneAsset" options={{ title: 'Clone Asset' }} component={CloneAsset} />
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
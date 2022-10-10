import { Button, TextInput, Text, Image, View, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import React from "react"

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenContainer } from "react-native-screens";

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

function SearchDetails({ navigation }) {
  const [number, onChangeNumber] = React.useState(null);  

  return (
    
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>Details Screen</Text>
    <TextInput
      onChangeText={onChangeNumber}
      value={number}
    />
    <Button title="Submit" onPress={() => navigation.push('DataDetails', {
      number: number
    })} />
    
</View>
   
  );
}







const deviceWidth= Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
  cardContainer: { width: deviceWidth, backgroundColor: '#a29bfe'},

  ImageBackground: {
    width: "50%",
    alignItems: "center",
  },
})


export default SearchDetails;

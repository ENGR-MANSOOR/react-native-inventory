import {  TextInput, Image, View, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Input, Icon, Button, Card } from '@rneui/themed';
import React from "react"


function SearchDetails({ navigation }) {
  const [number, onChangeNumber] = React.useState(null);  

  return (
    
    <View >
    <Card>
          <Card.Title>Check In</Card.Title>
      <Text style={styles.subHeader} h3>Bitte schreiben Sie die beschriftete Nummer auf, um den Bestand zu überprüfen.</Text>
      <Input
        onChangeText={onChangeNumber}
        value={number}
        placeholder='Labelled Nummer'
      />
      <Button
        onPress={() =>{
          if(!number){
           alert("Fehlende Eingabe")
          }
          else{
          navigation.push('DataDetails', {
          number: number
        })
        }
        }}
        title="CHECK IN"
        iconContainerStyle={{ marginRight: 10 }}
        titleStyle={{ fontWeight: '700' }}
        buttonStyle={{
          backgroundColor: '#1E90FF',
          borderColor: 'transparent',
          borderWidth: 0,
          borderRadius: 30,
        }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        icon={{
          name: 'arrow-right',
          type: 'font-awesome',
          size: 15,
          color: 'white',
        }}
        iconRight
        iconContainerStyle={{ marginLeft: 10, marginRight: -10 }}
      />
    </Card>
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
  subHeader: {
    color: "blue",
    textAlign: "center",
    paddingVertical: 10
  }
})


export default SearchDetails;

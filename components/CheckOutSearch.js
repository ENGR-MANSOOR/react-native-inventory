import { TextInput, Image, View, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Input, Icon, Button } from '@rneui/themed';
import React from "react"

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenContainer } from "react-native-screens";

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

function CheckOutSearch({ navigation }) {
  const [number, onChangeNumber] = React.useState(null);

  return (

    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.subHeader} h3>Bitte schreiben Sie die beschriftete Nummer auf, um den Bestand zu überprüfen.</Text>
      <Input
        onChangeText={onChangeNumber}
        value={number}
        placeholder='Labelled Nummer'
      />
      <Button
        onPress={() => navigation.push('CheckOut', {
          number: number
        })}
        title="CHECK OUT"
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

    </View>

  );
}







const deviceWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
  cardContainer: { width: deviceWidth, backgroundColor: '#a29bfe' },

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


export default CheckOutSearch;

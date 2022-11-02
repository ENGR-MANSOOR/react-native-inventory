import React, { useEffect } from "react";
import { View, ScrollView, StyleSheet, Image,Button, Alert } from 'react-native';
import { Akira } from 'react-native-textinput-effects';
import { Fumi } from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
var axios = require('axios');

const CreateNewAsset = ({navigation}) => {
  const [serial, setSerial] = React.useState("");
  const [model, setModel] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [purchaseDate, setPurchaseDate] = React.useState("");
  const [supplier, setSupplier] = React.useState("");
  const [order, setOrder] = React.useState("");
  const [purchaseCost, setPurchaseCost] = React.useState("");
  const [warranty, setWarranty] = React.useState("");
  const [note, setNote] = React.useState("");
console.log("serial",serial)
console.log("model",model)
console.log("status",status)


const CreateNewAssetConfirmation = async () => {
var data = JSON.stringify({
  "serials[1]": serial,
  "model_id": model,
  "status_id": status,
  "name": name,
  "purchase_date": purchaseDate,
  "supplier_id": supplier,
  "order_number": order,
  "purchase_cost": purchaseCost,
  "warranty_months": warranty,
  "notes": note
});

var config = {
  method: 'post',
  url: 'http://vmadmin01.schnupp.de/api/v1/hardware',
  headers: { 
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMzJiYWRlMDk3YTNkMmI5ZjM2ODRjMjUzN2JlZmZiZmQ0MzgwOTU3OWRjZDYwOGJkMDM5ZjQ1N2FjNDYyYjViYTBkNWRlZGRhNDM3ZDRmODIiLCJpYXQiOjE2NjYwNzIyMzcsIm5iZiI6MTY2NjA3MjIzNywiZXhwIjoyMTM5NDU3ODM3LCJzdWIiOiIyNDgiLCJzY29wZXMiOltdfQ.P1BI29MVtyTZMrbcL5CAj7O0nIpIP9Abvtk7QJtPMoXJXlYR9zWrAbeKGojnwKGFi6_wz98t66q4q74TchZLWUhiurF2iJ497mbU3LEJvgzzFg50J6eJpVfJ9PHM7g-a6r5cPhqoqG9vQFdrDmcV0kY6B6AWkgCpHZBMy5b0Uztm7Fr9zBRwqYZm5hiIzhlr6p3JUx2knm2oaiyM1QLplrdMtf1tlokexPNfP8dUGFSyHJ0hDCud0ZpWDZqIA42K6lsjhSOER2thW9z4oLF42dJYIQNOFAq3fsGrJqpdpIkX0zRvgqlxlBcfuEITKX3_uy2nLhhjITW94ilHUZXjrfSmfNrtJ-FWbWzEAoCNas9b_P4qBOSURlvwCXjxS2gi89lvEUwVjrjYl-U6YilVpKuoS4UsAmTJeM_isx3wjd1hguOzRO_Drq4wcCzue2JS4eUcNP3M9nwXmAfvKh4GKY0_vg6lyJ44dKh9ARWnp4lOmB5D-2emZWrTbGWaSNt553arUZCTu-p1QapSaiW7GO5AeQRODx-MSjlXJRseTOVMx5wt7GcI1To0vTA5S3tfR9KjQVElGLeUTzwsUUvj2uXMbPNmo3dCUtKKUZiVO5qj1bgMqb45HUcXjBqLRAuhGM7io7qpL23BUDLXn5927fFV4KOHxHGbI55SkiBVCuw', 
    'Content-Type': 'application/json', 
    'Cookie': 'XSRF-TOKEN=eyJpdiI6ImlLRnhCelRvQ2Njd3ppemxxNTAzaHc9PSIsInZhbHVlIjoiSWQ4a0sweG10UUFQbmI0SFgzRU5Fbm9kN3FvcnZsbDY0WHkrQk10RERXMlpkTGcxSVVwOGQwSjhXSEpkdlAyQ0Z5YkJSc252bVFaQmt2TEFNbHBJeEsyUzZudWZJNGVIQmRaaHkyRlRQMkdOQ2FkYzBhMXZyOGltU1wvQmttWDd1IiwibWFjIjoiMTZkZWFiZjk2ZTgzOWIzNWIzYmZhY2NmYjM3YWQ5MDgwZTk2NDYxZDE3ZmUzNTEzNzJkMzU1MWNlYTUxNDc3MCJ9; snipeit_session=f22tTIjwOr41TYicYVmT8lzIa0hxFVoyBaY2xyCB'
  },
  data : data
};
console.log("url", config.url)
axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data.messages));
  console.log(JSON.stringify(response.data));
  Alert.alert(
    "Erfolgreich",
    response.data.messages,
    [
      
      { text: "OK", onPress: () => navigation.push('Home', {
      }) }
    ]
  );
})
.catch(function (error) {
  console.log(error);
  Alert.alert(
    "Fehlgeschlagen",
    error,
    [
      
      { text: "OK", onPress: () => navigation.push('Home', {
      }) }
    ]
  );
});

}





return (
  <>
    <ScrollView>
      <View >
      <Fumi
    label={'Serial Nr.'}
    value={serial}
    onChangeText={setSerial}
    iconClass={FontAwesomeIcon}
    iconName={'barcode'}
    iconColor={'#f95a25'}
    iconSize={20}
    iconWidth={40}
    inputPadding={16}
    textColor={'#f95a25'}
  />
  <Fumi
    label={'Model'}
    value={model}
    onChangeText={setModel}
    iconClass={FontAwesomeIcon}
    iconName={'cubes'}
    iconColor={'#f95a25'}
    iconSize={20}
    iconWidth={40}
    inputPadding={16}
  />
  <Fumi
    label={'Status'}
    value={status}
    onChangeText={setStatus}
    iconClass={FontAwesomeIcon}
    iconName={'heartbeat'}
    iconColor={'#f95a25'}
    iconSize={20}
    iconWidth={40}
    inputPadding={16}
  />
  <Fumi
    label={'Name'}
    value={name}
    onChangeText={setName}
    iconClass={FontAwesomeIcon}
    iconName={'user'}
    iconColor={'#f95a25'}
    iconSize={20}
    iconWidth={40}
    inputPadding={16}
  />
  <Fumi
    label={'Kaufdatum'}
    value={purchaseDate}
    onChangeText={setPurchaseDate}
    iconClass={FontAwesomeIcon}
    iconName={'calendar'}
    iconColor={'#f95a25'}
    iconSize={20}
    iconWidth={40}
    inputPadding={16}
  />
  <Fumi
    label={'Lieferanten-ID'}
    value={supplier}
    onChangeText={setSupplier}
    iconClass={FontAwesomeIcon}
    iconName={'truck'}
    iconColor={'#f95a25'}
    iconSize={20}
    iconWidth={40}
    inputPadding={16}
  />
  <Fumi
    label={'Bestellung Nr.'}
    value={order}
    onChangeText={setOrder}
    iconClass={FontAwesomeIcon}
    iconName={'list-ol'}
    iconColor={'#f95a25'}
    iconSize={20}
    iconWidth={40}
    inputPadding={16}
  />
  <Fumi
    label={'Einkaufspreis'}
    value={purchaseCost}
    onChangeText={setPurchaseCost}
    iconClass={FontAwesomeIcon}
    iconName={'money'}
    iconColor={'#f95a25'}
    iconSize={20}
    iconWidth={40}
    inputPadding={16}
  />
  <Fumi
    label={'Garantie'}
    value={warranty}
    onChangeText={setWarranty}
    iconClass={FontAwesomeIcon}
    iconName={'certificate'}
    iconColor={'#f95a25'}
    iconSize={20}
    iconWidth={40}
    inputPadding={16}
  />
  <Fumi
    label={'Notes'}
    value={note}
    onChangeText={setNote}
    iconClass={FontAwesomeIcon}
    iconName={'sticky-note-o'}
    iconColor={'#f95a25'}
    iconSize={20}
    iconWidth={40}
    inputPadding={16}
  />
<Button
        title="Senden"
        onPress={() => CreateNewAssetConfirmation()}
      />
      </View>
    </ScrollView>
  </>
);

};




export default CreateNewAsset;
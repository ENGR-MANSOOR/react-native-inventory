import React, { useState } from "react";
import { Alert, View, Dimensions, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Text, Input, Card, Icon, Button } from '@rneui/themed';
var axios = require('axios');

const EditAssetConfirm = ({ event, navigation, route }) => {

  const [EditedName, setEditedName] = useState("");
  const [serial, setSerial] = useState("");
  const [datev, setDatev] = useState("");
  const [pruf, setPruf] = useState("");
  const [note, setNote] = useState("");
  console.log("name", EditedName)


  var Asset_Tag = route.params.assetTag
  console.log("Asset tag", Asset_Tag)


  const EditAssetConfirmFunction = async () => {


    var data = JSON.stringify({

      "name": EditedName || route.params.name,
      "serial": serial || route.params.serial,
      "_snipeit_datev_nummer_6": datev || route.params.datev ,
      "_snipeit_pruefnummer_elektrogeraete_14": pruf || route.params.checkNumber ,
      "notes": note || route.params.note
    });

    var config = {
      method: 'patch',
      url: `http://vmadmin01.schnupp.de/api/v1/hardware/${Asset_Tag}`,
      headers: {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMzJiYWRlMDk3YTNkMmI5ZjM2ODRjMjUzN2JlZmZiZmQ0MzgwOTU3OWRjZDYwOGJkMDM5ZjQ1N2FjNDYyYjViYTBkNWRlZGRhNDM3ZDRmODIiLCJpYXQiOjE2NjYwNzIyMzcsIm5iZiI6MTY2NjA3MjIzNywiZXhwIjoyMTM5NDU3ODM3LCJzdWIiOiIyNDgiLCJzY29wZXMiOltdfQ.P1BI29MVtyTZMrbcL5CAj7O0nIpIP9Abvtk7QJtPMoXJXlYR9zWrAbeKGojnwKGFi6_wz98t66q4q74TchZLWUhiurF2iJ497mbU3LEJvgzzFg50J6eJpVfJ9PHM7g-a6r5cPhqoqG9vQFdrDmcV0kY6B6AWkgCpHZBMy5b0Uztm7Fr9zBRwqYZm5hiIzhlr6p3JUx2knm2oaiyM1QLplrdMtf1tlokexPNfP8dUGFSyHJ0hDCud0ZpWDZqIA42K6lsjhSOER2thW9z4oLF42dJYIQNOFAq3fsGrJqpdpIkX0zRvgqlxlBcfuEITKX3_uy2nLhhjITW94ilHUZXjrfSmfNrtJ-FWbWzEAoCNas9b_P4qBOSURlvwCXjxS2gi89lvEUwVjrjYl-U6YilVpKuoS4UsAmTJeM_isx3wjd1hguOzRO_Drq4wcCzue2JS4eUcNP3M9nwXmAfvKh4GKY0_vg6lyJ44dKh9ARWnp4lOmB5D-2emZWrTbGWaSNt553arUZCTu-p1QapSaiW7GO5AeQRODx-MSjlXJRseTOVMx5wt7GcI1To0vTA5S3tfR9KjQVElGLeUTzwsUUvj2uXMbPNmo3dCUtKKUZiVO5qj1bgMqb45HUcXjBqLRAuhGM7io7qpL23BUDLXn5927fFV4KOHxHGbI55SkiBVCuw',
        'Content-Type': 'application/json',
      },
      data: data
    };
    console.log("url", config.url)
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        Alert.alert(
          "Erfolgreich",
          response.data.messages,
          [

            {
              text: "OK", onPress: () => navigation.push('Home', {
              })
            }
          ]
        );
      })
      .catch(function (error) {
        console.log(error);
        Alert.alert(
          "Fehlgeschlagen",
          error,
          [

            { text: "OK", onPress: () => console.log("OK Pressed") }
          ]
        );
      });

  }







  return (
    
    <View>
      <ScrollView>
        <Card>
          <Text>Das ist {route.params.Ownedby}'s profile</Text>
          <Text style={style.subHeader}>
            Name :
          </Text>
          <Input
            onChangeText={setEditedName || route.params.name}
            value={EditedName || route.params.name}
            
          />
          <Text style={style.subHeader}>
            Serial Nummer :
          </Text>
          <Input
            value={serial == null ? '' : serial || route.params.serial}
            onChangeText={setSerial || route.params.serial}
            
          />
          <Text style={style.subHeader}>
            Datev Nummer :
          </Text>
          <Input
            value={datev || route.params.datev}
            onChangeText={setDatev || route.params.datev}
            
          />
          <Text style={style.subHeader}>
            Pruefnummer_Elektrogeraete :
          </Text>
          <Input
            value={pruf || route.params.checkNumber}
            onChangeText={setPruf || route.params.checkNumber}
        
          />
          <Text style={style.subHeader}>
            Note :
          </Text>
          <Input
            value={note || route.params.note}
            onChangeText={setNote || route.params.note}
        
          />
          <Button
            title="Edit Asset Confirm"
            onPress={() => EditAssetConfirmFunction()}
          />

        </Card>
      </ScrollView>
    </View>
   
  );



};


const deviceWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
  cardContainer: { width: deviceWidth, backgroundColor: '#a29bfe' },

  ImageBackground: {
    width: "50%",
    alignItems: "center",
  },
})


const style = StyleSheet.create({
  subHeader: {
    backgroundColor: "#2089dc",
    color: "white",
    textAlign: "center",
    paddingVertical: 5,
    marginBottom: 10
  }
});
export default EditAssetConfirm;
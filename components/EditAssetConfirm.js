import {useState} from "react";
import { Alert,TextInput, Image, View, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Input, Icon, Button } from '@rneui/themed';
var axios = require('axios');

const EditAssetConfirm = ({ event,navigation, route }) => {

    const [name, setName] = useState("");
    const [serial, setSerial] = useState("");
    const [datev, setDatev] = useState("");
    const [pruf, setPruf] = useState("");
    const [note, setNote] = useState("");
    console.log("name", name)


  var Asset_Tag = route.params.assetTag
  console.log("Asset tag", Asset_Tag)


  const EditAssetConfirmFunction = async () => {

    
var data = JSON.stringify({
  "name": name,
  "serial": serial,
  "notes": note,
  "_snipeit_datev_nummer_6": datev,
  "_snipeit_pruefnummer_elektrogeraete_14":pruf 
});

var config = {
  method: 'patch',
  url: 'http://vmadmin01.schnupp.de/api/v1/hardware/1',
  headers: { 
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMzJiYWRlMDk3YTNkMmI5ZjM2ODRjMjUzN2JlZmZiZmQ0MzgwOTU3OWRjZDYwOGJkMDM5ZjQ1N2FjNDYyYjViYTBkNWRlZGRhNDM3ZDRmODIiLCJpYXQiOjE2NjYwNzIyMzcsIm5iZiI6MTY2NjA3MjIzNywiZXhwIjoyMTM5NDU3ODM3LCJzdWIiOiIyNDgiLCJzY29wZXMiOltdfQ.P1BI29MVtyTZMrbcL5CAj7O0nIpIP9Abvtk7QJtPMoXJXlYR9zWrAbeKGojnwKGFi6_wz98t66q4q74TchZLWUhiurF2iJ497mbU3LEJvgzzFg50J6eJpVfJ9PHM7g-a6r5cPhqoqG9vQFdrDmcV0kY6B6AWkgCpHZBMy5b0Uztm7Fr9zBRwqYZm5hiIzhlr6p3JUx2knm2oaiyM1QLplrdMtf1tlokexPNfP8dUGFSyHJ0hDCud0ZpWDZqIA42K6lsjhSOER2thW9z4oLF42dJYIQNOFAq3fsGrJqpdpIkX0zRvgqlxlBcfuEITKX3_uy2nLhhjITW94ilHUZXjrfSmfNrtJ-FWbWzEAoCNas9b_P4qBOSURlvwCXjxS2gi89lvEUwVjrjYl-U6YilVpKuoS4UsAmTJeM_isx3wjd1hguOzRO_Drq4wcCzue2JS4eUcNP3M9nwXmAfvKh4GKY0_vg6lyJ44dKh9ARWnp4lOmB5D-2emZWrTbGWaSNt553arUZCTu-p1QapSaiW7GO5AeQRODx-MSjlXJRseTOVMx5wt7GcI1To0vTA5S3tfR9KjQVElGLeUTzwsUUvj2uXMbPNmo3dCUtKKUZiVO5qj1bgMqb45HUcXjBqLRAuhGM7io7qpL23BUDLXn5927fFV4KOHxHGbI55SkiBVCuw', 
    'Content-Type': 'application/json', 
    'Cookie': 'XSRF-TOKEN=eyJpdiI6ImlLRnhCelRvQ2Njd3ppemxxNTAzaHc9PSIsInZhbHVlIjoiSWQ4a0sweG10UUFQbmI0SFgzRU5Fbm9kN3FvcnZsbDY0WHkrQk10RERXMlpkTGcxSVVwOGQwSjhXSEpkdlAyQ0Z5YkJSc252bVFaQmt2TEFNbHBJeEsyUzZudWZJNGVIQmRaaHkyRlRQMkdOQ2FkYzBhMXZyOGltU1wvQmttWDd1IiwibWFjIjoiMTZkZWFiZjk2ZTgzOWIzNWIzYmZhY2NmYjM3YWQ5MDgwZTk2NDYxZDE3ZmUzNTEzNzJkMzU1MWNlYTUxNDc3MCJ9; snipeit_session=f22tTIjwOr41TYicYVmT8lzIa0hxFVoyBaY2xyCB'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

  }






  return (
    <View>
      <Text>This is {route.params.Ownedby}'s profile</Text>
      <Input
        onChangeText={setName}
        value={name}
        placeholder='Asset Name'
      />
      <Input
        value={serial == null ? '' : serial}
        onChangeText={setSerial}
        placeholder='Serial'
      />
      <Input
       value={datev}
        onChangeText={setDatev}
        placeholder='Datev Nummer'
      />
      <Input
        value={pruf}
        onChangeText={setPruf}
        placeholder='Pruf Nummer'
      />
      <Input
        value={note}
        onChangeText={setNote}
        placeholder='Note'
      />
      <Button
        title="Edit Asset Confirm"
        onPress={() => EditAssetConfirmFunction()}
      />


    </View>
  );



};

export default EditAssetConfirm;
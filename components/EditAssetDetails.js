import React, { useEffect } from "react";
import { View, Dimensions, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Text, Card, Button, Image } from '@rneui/themed';
import { Icon } from 'react-native-elements'
//import { Image } from "@rneui/themed";



import axios from "axios"

const EditAssetDetails = ({ route }) => {
  const [name, setName] = React.useState("");
  const [serial, setSerial] = React.useState("");
  const [createdAt, setCreatedAt] = React.useState("");
  const [assetTag, setAssetTag] = React.useState("");
  const [modelNumber, setModelNumber] = React.useState("");
  const [Image, setImage] = React.useState("");
  const [modelID, setModelID] = React.useState("");
  const [modelName, setModelName] = React.useState("");
  const [Ownedby, setOwnedby] = React.useState("");
  const [datev, setDatev] = React.useState("");
  const [checkNumber, setCheckNumber] = React.useState("");
  const [note, setNote] = React.useState("");



  const handleSubmit = async (number, filtered_barcode) => {

    const USER_TOKEN =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMzJiYWRlMDk3YTNkMmI5ZjM2ODRjMjUzN2JlZmZiZmQ0MzgwOTU3OWRjZDYwOGJkMDM5ZjQ1N2FjNDYyYjViYTBkNWRlZGRhNDM3ZDRmODIiLCJpYXQiOjE2NjYwNzIyMzcsIm5iZiI6MTY2NjA3MjIzNywiZXhwIjoyMTM5NDU3ODM3LCJzdWIiOiIyNDgiLCJzY29wZXMiOltdfQ.P1BI29MVtyTZMrbcL5CAj7O0nIpIP9Abvtk7QJtPMoXJXlYR9zWrAbeKGojnwKGFi6_wz98t66q4q74TchZLWUhiurF2iJ497mbU3LEJvgzzFg50J6eJpVfJ9PHM7g-a6r5cPhqoqG9vQFdrDmcV0kY6B6AWkgCpHZBMy5b0Uztm7Fr9zBRwqYZm5hiIzhlr6p3JUx2knm2oaiyM1QLplrdMtf1tlokexPNfP8dUGFSyHJ0hDCud0ZpWDZqIA42K6lsjhSOER2thW9z4oLF42dJYIQNOFAq3fsGrJqpdpIkX0zRvgqlxlBcfuEITKX3_uy2nLhhjITW94ilHUZXjrfSmfNrtJ-FWbWzEAoCNas9b_P4qBOSURlvwCXjxS2gi89lvEUwVjrjYl-U6YilVpKuoS4UsAmTJeM_isx3wjd1hguOzRO_Drq4wcCzue2JS4eUcNP3M9nwXmAfvKh4GKY0_vg6lyJ44dKh9ARWnp4lOmB5D-2emZWrTbGWaSNt553arUZCTu-p1QapSaiW7GO5AeQRODx-MSjlXJRseTOVMx5wt7GcI1To0vTA5S3tfR9KjQVElGLeUTzwsUUvj2uXMbPNmo3dCUtKKUZiVO5qj1bgMqb45HUcXjBqLRAuhGM7io7qpL23BUDLXn5927fFV4KOHxHGbI55SkiBVCuw";
    const AuthStr = "Bearer ".concat(USER_TOKEN);
    console.log("AuthStr", AuthStr);
    axios
      .get(`http://vmadmin01.schnupp.de//api/v1/hardware/${number}` &&  `http://vmadmin01.schnupp.de//api/v1/hardware/${filtered_barcode}`, {
        headers: {
          Authorization: AuthStr,
          Accept: "application/json",

        },
      })
      .then((response) => {
        // If request is good...
        console.log("date from Edit asset details 1", response.data);
        setName(response.data.name)
        setAssetTag(response.data.asset_tag)
        setSerial(response.data.serial)
        setModelID(response.data.model.id)
        setModelName(response.data.model.name)
        setModelNumber(response.data.model_number)
        setNote(response.data.notes)
        setImage(response.data.image)
        setOwnedby(response.data.assigned_to.name)
        setCreatedAt(response.data.created_at.formatted)
        setDatev(response.data.custom_fields.Datev_Nummer.value)
        setCheckNumber(response.data.custom_fields.Pruefnummer_Elektrogeraete.value)
        
       
      })
      .catch((error) => {
        console.log("error produced kabeer" + error);
      });

  };
console.log("image", Image)

  /*const CheckInPost = async (number) => {
    const USER_TOKEN =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMzhmMTYwMDhlMGQ2NDZlNzQxMDAzMGQxNTM3ZWI1MWU2MmIzZDk3NzVlZmU1OTZlMTZiMzA3YWM3Y2Y2NDNkY2ZkYTIxZTJmNjdmOTgyMzQiLCJpYXQiOjE2NjE0MjYxNjEsIm5iZiI6MTY2MTQyNjE2MSwiZXhwIjoyMTM0ODExNzYwLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.pWF14zSaBslu3FFTRXPFosJkN1y-cERRwljZNYCPbg3jRCOgThVz0dldLVehu9tDNllzi6jQqhplcN5HlpIWuz0Jp__5JUKXBNrU782JqZadoChuxRNILAkzT7EJwOXuOtjS9Ij0zO5GMfKUc01I5RsDqD2ljcaQFFt_Mjn0lE6OGopj64JBl921BoS05i_TEty2n6kPxkWlQVt3HNGhs-f_RlHMaBlWQpOTf5_oFowjD3SwtH2ERw_E_oJIpS_RH_5fCbeRDvTZYr4tCPzRUYXoA4q4-hEpTH9newbKxATzwhZ9IB-9UXsnwVfe8owuY79okYkrTo4KYj2ynk1Se6tCT0tdwaqNwqYDzwzS3P3jmmneUmCrwXeyinX05KtIslK02e6q_Zud9Q7NSJq58hTy86HDIlMX2shhagVqZ0UchhSUbeCaM8Kc27zLC54KIJE_R25izBACw0wZLVYp2-OU9rgSK0OPl33DZ8VykHQtyXTVArV1bUoJxZHZqcpnUKmb2cG90K83CYZJFQ3rI_bPRfH1aIdqDM8MYAfDwxgtRBzp8tPF5uMUSKAifbFHMpC-Si90sF0uvVpYaKg9Ag8rqLXSQdFESwDim6149VFCzSJES9hh_X0S738PRShSCQDK-wJXN7M5-vP-XxezoB07ZGxpJJzeo9lAiyLC58Q";
    const AuthStr = "Bearer ".concat(USER_TOKEN);
    console.log("AuthStr", AuthStr);
    axios
      .post(`http://vminventar.schnupp.de/api/v1/hardware/${number}`, {
        headers: {
          Authorization: AuthStr,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      

  };*/

  useEffect(async () => {
    const number = route?.params.number
    console.log('name', name)
    var str_barcode = number;
    var n = str_barcode.lastIndexOf('/');
    var filtered_barcode = str_barcode.substring(n + 1);
    console.log('name', name)
    console.log('BarCode', number)
    console.log('BarCode after filter', filtered_barcode)
    if (number) {
      handleSubmit(number, filtered_barcode)
    }

    // add a loader here
  }, []);
  const navigation = useNavigation();
  return (
    <View>
      <View>

      <ScrollView>
        <Card>
          <Card.Title>Details</Card.Title>
          <Card.Divider />
          <View style={{
              margin: 2,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Card.Image
                style={{
                  padding: 0, width: 100, height: 100,
                }}
                source={{
                  uri: Image,
                }}
              />
            </View>
          

          <Text style={style.subHeader}>
            Name:
          </Text>
          <Text> {name} </Text>
          <Text style={style.subHeader}>
          Serial Number:
        </Text>
        <Text> {serial} </Text>
        <Text style={style.subHeader}>
          Created At:
        </Text>
        <Text>
          {createdAt}
        </Text>
        <Text style={style.subHeader}>
          Asset Tag:
        </Text>
        <Text>
          {assetTag}
        </Text>
        <Text style={style.subHeader}>
          Model Number:
        </Text>
        <Text>
          {modelNumber}
        </Text>
        
        <Text style={style.subHeader}>
          Model with ID :
        </Text>
        <Text>
          {modelID}
        </Text>
        <Text style={style.subHeader}>
          Model with Name :
        </Text>
        <Text>
          {modelName}
        </Text>
        <Text style={style.subHeader}>
          Owned By :
        </Text>
        <Text>
          {Ownedby}
        </Text>
        <Text style={style.subHeader}>
         Datev_Nummer :
        </Text>
        <Text>
          {datev}
        </Text>
        <Text style={style.subHeader}>
        Pruefnummer_Elektrogeraete :
        </Text>
        <Text>
          {checkNumber}
        </Text>
        <Text style={style.subHeader}>
        Note :
        </Text>
        <Text>
          {note}
        </Text>
          <Button
           onPress={() =>
          navigation.navigate('EditAssetConfirm', { assetTag, Ownedby, name, serial, datev, checkNumber, note })
        }
            icon={
              <Icon
                name="login"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
              />
            }
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="Edit Asset"
          />
        </Card>
        </ScrollView>
      </View>
      

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

export default EditAssetDetails;

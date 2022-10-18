import React, { useEffect } from "react";
import {  TextInput, Text, Image, View, Dimensions, StyleSheet, TouchableOpacity, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';



import axios from "axios"

const CheckIn = ({ route }) => {
  const [name, setName] = React.useState("");
  const [serial, setSerial] = React.useState("");
  const [createdAt, setCreatedAt] = React.useState("");
  const [assetTag, setAssetTag] = React.useState("");
  const [modelNumber, setModelNumber] = React.useState("");
  const [image, setImage] = React.useState("");
  const [modelID, setModelID] = React.useState("");
  const [modelName, setModelName] = React.useState("");
  const [Ownedby, setOwnedby] = React.useState("");



  const handleSubmit = async (number) => {
    
    const USER_TOKEN =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMzJiYWRlMDk3YTNkMmI5ZjM2ODRjMjUzN2JlZmZiZmQ0MzgwOTU3OWRjZDYwOGJkMDM5ZjQ1N2FjNDYyYjViYTBkNWRlZGRhNDM3ZDRmODIiLCJpYXQiOjE2NjYwNzIyMzcsIm5iZiI6MTY2NjA3MjIzNywiZXhwIjoyMTM5NDU3ODM3LCJzdWIiOiIyNDgiLCJzY29wZXMiOltdfQ.P1BI29MVtyTZMrbcL5CAj7O0nIpIP9Abvtk7QJtPMoXJXlYR9zWrAbeKGojnwKGFi6_wz98t66q4q74TchZLWUhiurF2iJ497mbU3LEJvgzzFg50J6eJpVfJ9PHM7g-a6r5cPhqoqG9vQFdrDmcV0kY6B6AWkgCpHZBMy5b0Uztm7Fr9zBRwqYZm5hiIzhlr6p3JUx2knm2oaiyM1QLplrdMtf1tlokexPNfP8dUGFSyHJ0hDCud0ZpWDZqIA42K6lsjhSOER2thW9z4oLF42dJYIQNOFAq3fsGrJqpdpIkX0zRvgqlxlBcfuEITKX3_uy2nLhhjITW94ilHUZXjrfSmfNrtJ-FWbWzEAoCNas9b_P4qBOSURlvwCXjxS2gi89lvEUwVjrjYl-U6YilVpKuoS4UsAmTJeM_isx3wjd1hguOzRO_Drq4wcCzue2JS4eUcNP3M9nwXmAfvKh4GKY0_vg6lyJ44dKh9ARWnp4lOmB5D-2emZWrTbGWaSNt553arUZCTu-p1QapSaiW7GO5AeQRODx-MSjlXJRseTOVMx5wt7GcI1To0vTA5S3tfR9KjQVElGLeUTzwsUUvj2uXMbPNmo3dCUtKKUZiVO5qj1bgMqb45HUcXjBqLRAuhGM7io7qpL23BUDLXn5927fFV4KOHxHGbI55SkiBVCuw";
  const AuthStr = "Bearer ".concat(USER_TOKEN);
  console.log("AuthStr", AuthStr);
  axios
    .get(`http://vmadmin01.schnupp.de//api/v1/hardware/${number}`, {
      headers: {
        Authorization: AuthStr,
        Accept: "application/json",
       
      },
    })
      .then((response) => {
        // If request is good...
        console.log("date from dzanmic", response.data);
        setName(response.data.name)
        setSerial(response.data.serial)
        setCreatedAt(response.data.created_at.formatted)
        setAssetTag(response.data.asset_tag)
        setModelNumber(response.data.model_number)
        setImage(response.data.image)
        console.log("date from image", response.data.image);
        setModelID(response.data.model.id)
        setModelName(response.data.model.name)
        setOwnedby(response.data.assigned_to.name)
      })
      .catch((error) => {
        console.log("error produced kabeer" + error);
      });

  };



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
    if (number) {
       handleSubmit(number)
    }
    
// add a loader here
  }, []);
  const navigation = useNavigation();
  return (
    <View>
      <Text>
        Try display me ! 🎉
      </Text>

      <View>
        <Text style={styles.cardContainer}>
          Name:
        </Text>
        <Text> {name} </Text>
        <Text style={styles.cardContainer}>
          Serial Number:
        </Text>
        <Text> {serial} </Text>
        <Text style={styles.cardContainer}>
          Created At:
        </Text>
        <Text>
          {createdAt}
        </Text>
        <Text style={styles.cardContainer}>
          Asset Tag:
        </Text>
        <Text>
          {assetTag}
        </Text>
        <Text style={styles.cardContainer}>
          Model Number:
        </Text>
        <Text>
          {modelNumber}
        </Text>
        <Text style={styles.cardContainer}>
          Image:
        </Text>
        <Image source={image} />
        <Text style={styles.cardContainer}>
          Model with ID :
        </Text>
        <Text>
          {modelID}
        </Text>
        <Text style={styles.cardContainer}>
          Model with Name :
        </Text>
        <Text>
          {modelName}
        </Text>
        <Text style={styles.cardContainer}>
          Owned By :
        </Text>
        <Text>
          {Ownedby}
        </Text>
      </View>
      <Button
  onPress={() =>
          navigation.navigate('CheckInConfirm', { assetTag, Ownedby })
        }
  title="Check In"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
      
    </View>
  );
};

const deviceWidth= Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
  cardContainer: { width: deviceWidth, backgroundColor: '#a29bfe'},

  ImageBackground: {
    width: "50%",
    alignItems: "center",
  },
})

export default CheckIn;

import React, { useEffect, useState } from "react";
import { View, Dimensions, StyleSheet, ScrollView, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Text, Input, Card, Icon, Button } from '@rneui/themed';

import DatePicker from '@react-native-community/datetimepicker';


import SearchableDropdown from 'react-native-searchable-dropdown';


import { Akira } from 'react-native-textinput-effects';
import { Fumi } from 'react-native-textinput-effects';




import axios from "axios"

const CloneAsset = ({ route }) => {
  const [name, setName] = React.useState("");
  const [serial, setSerial] = React.useState("");
  const [assetTag, setAssetTag] = React.useState("");
  const [modelNumber, setModelNumber] = React.useState("");
  const [Image, setImage] = React.useState("");
  const [modelID, setModelID] = React.useState("");
  const [modelName, setModelName] = React.useState("");
  const [Ownedby, setOwnedby] = React.useState("");
  const [datev, setDatev] = React.useState("");
  const [createdAt, setCreatedAt] = React.useState("");
  const [checkNumber, setCheckNumber] = React.useState("");
  const [note, setNote] = React.useState();
  const [warranty, setWarranty] = useState();
  const [order, setOrder] = React.useState("");


  const [status, setStatus] = React.useState();
  const [statusLabel, setStatusLabel] = React.useState();
  const [supplier, setSupplier] = React.useState();
  const [supplierID, setSupplierID] = React.useState();
  const [purchaseCost, setPurchaseCost] = React.useState("");
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("Datum auswählen");

  const onChange = (selectedDate) => {
    setShow(Platform.OS === 'ios');
    const currentDate = selectedDate || date;

    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getFullYear() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getDate();
    console.log("fDate", fDate)

    setTitle(fDate.toString())
    console.log("title", title)
  }

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  }


  console.log("date on top", createdAt)










  const handleSubmit = async (number, filtered_barcode) => {

    const USER_TOKEN =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMzJiYWRlMDk3YTNkMmI5ZjM2ODRjMjUzN2JlZmZiZmQ0MzgwOTU3OWRjZDYwOGJkMDM5ZjQ1N2FjNDYyYjViYTBkNWRlZGRhNDM3ZDRmODIiLCJpYXQiOjE2NjYwNzIyMzcsIm5iZiI6MTY2NjA3MjIzNywiZXhwIjoyMTM5NDU3ODM3LCJzdWIiOiIyNDgiLCJzY29wZXMiOltdfQ.P1BI29MVtyTZMrbcL5CAj7O0nIpIP9Abvtk7QJtPMoXJXlYR9zWrAbeKGojnwKGFi6_wz98t66q4q74TchZLWUhiurF2iJ497mbU3LEJvgzzFg50J6eJpVfJ9PHM7g-a6r5cPhqoqG9vQFdrDmcV0kY6B6AWkgCpHZBMy5b0Uztm7Fr9zBRwqYZm5hiIzhlr6p3JUx2knm2oaiyM1QLplrdMtf1tlokexPNfP8dUGFSyHJ0hDCud0ZpWDZqIA42K6lsjhSOER2thW9z4oLF42dJYIQNOFAq3fsGrJqpdpIkX0zRvgqlxlBcfuEITKX3_uy2nLhhjITW94ilHUZXjrfSmfNrtJ-FWbWzEAoCNas9b_P4qBOSURlvwCXjxS2gi89lvEUwVjrjYl-U6YilVpKuoS4UsAmTJeM_isx3wjd1hguOzRO_Drq4wcCzue2JS4eUcNP3M9nwXmAfvKh4GKY0_vg6lyJ44dKh9ARWnp4lOmB5D-2emZWrTbGWaSNt553arUZCTu-p1QapSaiW7GO5AeQRODx-MSjlXJRseTOVMx5wt7GcI1To0vTA5S3tfR9KjQVElGLeUTzwsUUvj2uXMbPNmo3dCUtKKUZiVO5qj1bgMqb45HUcXjBqLRAuhGM7io7qpL23BUDLXn5927fFV4KOHxHGbI55SkiBVCuw";
    const AuthStr = "Bearer ".concat(USER_TOKEN);
    console.log("AuthStr", AuthStr);
    console.log("filtered_barcode", filtered_barcode);
    var config = {
      method: 'get',
      url: `http://vmadmin01.schnupp.de//api/v1/hardware/${number}` && `http://vmadmin01.schnupp.de//api/v1/hardware/${filtered_barcode}`,
      headers: {
        Authorization: AuthStr,
        Accept: "application/json",

      },
    };


    console.log("url", config.url)

    axios(config)
      .then((response) => {

        console.log("data from dyanmic in checkin.js now", response.data);

        setName(response.data.name)
        setSerial(response.data.serial)
        setModelID(response.data.model.id)
        setModelName(response.data.model.name)
        setSupplierID(response.data.supplier.id)
        setNote(response.data.notes)
        setImage(response.data.image)
        setOrder(response.data.order_number)
        setStatusLabel(response.data.status_label.name)
        setStatus(response.data.status_label.id)





      })
      .catch((error) => {
        console.log("error produced kabeer in clone asset" + error);
      });






  };
  console.log("image", Image)
  console.log("supplier is here", supplier)
  console.log("Warranty is here", warranty)
  console.log("Supplier ID", supplierID)
  console.log("Ownedby ", Ownedby)
  console.log("modelID ", modelID)
  console.log("Status ", status)




  useEffect(async () => {
    const number = route?.params.number
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


  const CloneAssetConfirmFunction = async () => {





    var data = JSON.stringify({
      "model_id": modelID,
      "name": name,
      "serial": serial,
      "order_number": order,
      "notes": note,
      "status_id": status,
      "warranty_months": warranty,
      "purchase_cost": purchaseCost,
      "purchase_date": title,
      "supplier_id": supplierID,
      "company_id": "1",



    });
    console.log("json input data", data)
    var config = {
      method: 'post',
      url: `http://vmadmin01.schnupp.de/api/v1/hardware`,
      headers: {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMzJiYWRlMDk3YTNkMmI5ZjM2ODRjMjUzN2JlZmZiZmQ0MzgwOTU3OWRjZDYwOGJkMDM5ZjQ1N2FjNDYyYjViYTBkNWRlZGRhNDM3ZDRmODIiLCJpYXQiOjE2NjYwNzIyMzcsIm5iZiI6MTY2NjA3MjIzNywiZXhwIjoyMTM5NDU3ODM3LCJzdWIiOiIyNDgiLCJzY29wZXMiOltdfQ.P1BI29MVtyTZMrbcL5CAj7O0nIpIP9Abvtk7QJtPMoXJXlYR9zWrAbeKGojnwKGFi6_wz98t66q4q74TchZLWUhiurF2iJ497mbU3LEJvgzzFg50J6eJpVfJ9PHM7g-a6r5cPhqoqG9vQFdrDmcV0kY6B6AWkgCpHZBMy5b0Uztm7Fr9zBRwqYZm5hiIzhlr6p3JUx2knm2oaiyM1QLplrdMtf1tlokexPNfP8dUGFSyHJ0hDCud0ZpWDZqIA42K6lsjhSOER2thW9z4oLF42dJYIQNOFAq3fsGrJqpdpIkX0zRvgqlxlBcfuEITKX3_uy2nLhhjITW94ilHUZXjrfSmfNrtJ-FWbWzEAoCNas9b_P4qBOSURlvwCXjxS2gi89lvEUwVjrjYl-U6YilVpKuoS4UsAmTJeM_isx3wjd1hguOzRO_Drq4wcCzue2JS4eUcNP3M9nwXmAfvKh4GKY0_vg6lyJ44dKh9ARWnp4lOmB5D-2emZWrTbGWaSNt553arUZCTu-p1QapSaiW7GO5AeQRODx-MSjlXJRseTOVMx5wt7GcI1To0vTA5S3tfR9KjQVElGLeUTzwsUUvj2uXMbPNmo3dCUtKKUZiVO5qj1bgMqb45HUcXjBqLRAuhGM7io7qpL23BUDLXn5927fFV4KOHxHGbI55SkiBVCuw',
        'Content-Type': 'application/json',
        'Cookie': 'XSRF-TOKEN=eyJpdiI6ImlLRnhCelRvQ2Njd3ppemxxNTAzaHc9PSIsInZhbHVlIjoiSWQ4a0sweG10UUFQbmI0SFgzRU5Fbm9kN3FvcnZsbDY0WHkrQk10RERXMlpkTGcxSVVwOGQwSjhXSEpkdlAyQ0Z5YkJSc252bVFaQmt2TEFNbHBJeEsyUzZudWZJNGVIQmRaaHkyRlRQMkdOQ2FkYzBhMXZyOGltU1wvQmttWDd1IiwibWFjIjoiMTZkZWFiZjk2ZTgzOWIzNWIzYmZhY2NmYjM3YWQ5MDgwZTk2NDYxZDE3ZmUzNTEzNzJkMzU1MWNlYTUxNDc3MCJ9; snipeit_session=f22tTIjwOr41TYicYVmT8lzIa0hxFVoyBaY2xyCB'
      },
      data: data
    };
    console.log("url", config.url)
    axios(config)
      .then(function (response) {
        console.log("response",response.data.messages)
        if (!response.data.messages.serial) {
          console.log(response.data.messages);
          console.log(response.data);
          alert(
            "Erfolgreich",
            response.data.messages,
            [

              {
                text: "OK", onPress: () => navigation.push('Home', {
                })
              }
            ]
          );

        }
        else {
          alert("Seriennummer schon Vorhanden, Bitte versuchen Sie es mit einer anderen Seriennummer");

        }
      })
      .catch(function (error) {
        alert("hello")
        alert(
          "Fehlgeschlagen",
          error,
          [

            {
              text: "OK", onPress: () => navigation.push('Home', {
              })
            }
          ]
        );
      });

  }






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
              Model with ID :
            </Text>
            <Text>
              {modelID}
            </Text>
            <Text style={style.subHeader}>
              Model Number:
            </Text>
            <Text>
              {modelNumber}
            </Text>

            <Text style={style.subHeader}>
              Status :
            </Text>
            <Text>
              {statusLabel}
            </Text>
            <Text style={style.subHeader}>
              Supplier:
            </Text>
            <Text>
              {supplier}
            </Text>
            <Text style={style.subHeader}>
              Model with Name :
            </Text>
            <Text>
              {modelName}
            </Text>

            <Text style={style.subHeader}>
              Serial Number:
            </Text>
            <Input
              onChangeText={setSerial}
              value={serial}
            />

            <Text style={style.subHeader}>
              Asset Name:
            </Text>
            <Input
              onChangeText={setName}
              value={name}
            />
            <Text style={style.subHeader}>
              Warranty:
            </Text>
            <Input
              onChangeText={setWarranty}
              value={warranty}
            />

            <Button
              onPress={() => showMode('date')}
              title={title}>
            </Button>

            {show &&
              <DatePicker
                value={date}
                mode={mode}
                display='default'
                onChange={(_, date) => onChange(date)}>
              </DatePicker>
            }

            <Text style={style.subHeader}>
              Einkauf Datum:
            </Text>
            <Input
              onChangeText={setCreatedAt}
              value={title}
            />
            <Text style={style.subHeader}>
              Einkauf Preis:
            </Text>
            <Input
              onChangeText={setPurchaseCost}
              value={purchaseCost}
              label="Bitte Preis Eingeben"
            />

            <Text style={style.subHeader}>
              Bestellung Nr :
            </Text>
            <Input
              onChangeText={setOrder}
              value={order}
            />


            <Text style={style.subHeader}>
              Note :
            </Text>
            <Input
              onChangeText={setNote}
              value={note}
            />
            <Button
              onPress={() => CloneAssetConfirmFunction()}
              icon={
                <Icon
                  name="arrow-right"
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
              title="Speichern"
            />
          </Card>
        </ScrollView>
      </View>


    </View>
  );
};

const deviceWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({



})


const style = StyleSheet.create({
  cardContainer: { width: deviceWidth, backgroundColor: '#a29bfe' },
  subHeader: {
    backgroundColor: "#2089dc",
    color: "white",
    textAlign: "center",
    paddingVertical: 5,
    marginBottom: 10
  },
  ImageBackground: {
    width: "50%",
    alignItems: "center",
  },
  saveArea: {
    backgroundColor: '#62d1bc',
  },
  topBar: {
    height: 50,
    backgroundColor: '#62d1bc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBarTitleText: {
    color: '#ffffff',
    fontSize: 20,
  },
  caption: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  captionTitleText: {
    color: '#121B0D',
    fontSize: 16,
    fontWeight: '600'
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'space-between'
  },
  btn: {
    width: 240,
    borderRadius: 4,
    backgroundColor: '#62d1bc',
    paddingHorizontal: 24,
    paddingVertical: 12,
    marginVertical: 8,
  },
  btnText: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
  },
  rnCamera: {
    width: '100%',
    height: "20%",
    alignSelf: 'center',
  },
  rmCameraResult: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eeeeee',
  },
  rmCameraResultText: {
    fontSize: 200,
    color: '#62d1bc'
  },
  cameraControl: {
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CloneAsset;

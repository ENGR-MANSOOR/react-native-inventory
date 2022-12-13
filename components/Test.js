import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet, Image, Button, Alert, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';


import { Akira } from 'react-native-textinput-effects';
import { Fumi } from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';


import SearchableDropdown from 'react-native-searchable-dropdown';

import { RNCamera } from 'react-native-camera'
import BarcodeMask from 'react-native-barcode-mask';


var axios = require('axios');

const CreateNewAsset = ({ navigation }) => {

  /////////bar code start ////////
  const [barcode, setBarcode] = useState();

  /////////bar code end ////////

  const [serverData, setServerData] = useState([]);
  const [SelectedItems, setSelectedItems] = useState();
  const [SelectedItemsText, setSelectedItemsText] = useState()
  const [StatusResult, setStatusResult] = useState([]);
  const [SelectedStatus, setSelectedStatus] = React.useState("");
  const [SelectedStatusText, setSelectedStatusText] = React.useState("");
  const [SupplierResult, setSupplierResult] = useState([]);
  const [SelectedSupplier, setSelectedSupplier] = useState();
  const [SelectSupplierText, setSelectSupplierText] = useState();

  /////date-time////
  const [SerialError, setSerialError] = React.useState("");
  const [SelectedError, setSelectedError] = React.useState("");
  const [StatusError, setStatusError] = React.useState("");
  const [SupplierError, setSupplierError] = React.useState("");

  ////date-time end///


  const [Serial, setSerial] = React.useState("");

  const [name, setName] = React.useState("");
  const [purchaseDate, setPurchaseDate] = React.useState("");

  const [order, setOrder] = React.useState("");
  const [purchaseCost, setPurchaseCost] = React.useState("");
  const [warranty, setWarranty] = React.useState("");
  const [note, setNote] = React.useState("");
  console.log("serial numer in effects", Serial);
  console.log("model", SelectedSupplier);





  useEffect(() => {
    var config = {
      method: 'get',
      url: 'http://vmadmin01.schnupp.de/api/v1/models/',
      headers: {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMzJiYWRlMDk3YTNkMmI5ZjM2ODRjMjUzN2JlZmZiZmQ0MzgwOTU3OWRjZDYwOGJkMDM5ZjQ1N2FjNDYyYjViYTBkNWRlZGRhNDM3ZDRmODIiLCJpYXQiOjE2NjYwNzIyMzcsIm5iZiI6MTY2NjA3MjIzNywiZXhwIjoyMTM5NDU3ODM3LCJzdWIiOiIyNDgiLCJzY29wZXMiOltdfQ.P1BI29MVtyTZMrbcL5CAj7O0nIpIP9Abvtk7QJtPMoXJXlYR9zWrAbeKGojnwKGFi6_wz98t66q4q74TchZLWUhiurF2iJ497mbU3LEJvgzzFg50J6eJpVfJ9PHM7g-a6r5cPhqoqG9vQFdrDmcV0kY6B6AWkgCpHZBMy5b0Uztm7Fr9zBRwqYZm5hiIzhlr6p3JUx2knm2oaiyM1QLplrdMtf1tlokexPNfP8dUGFSyHJ0hDCud0ZpWDZqIA42K6lsjhSOER2thW9z4oLF42dJYIQNOFAq3fsGrJqpdpIkX0zRvgqlxlBcfuEITKX3_uy2nLhhjITW94ilHUZXjrfSmfNrtJ-FWbWzEAoCNas9b_P4qBOSURlvwCXjxS2gi89lvEUwVjrjYl-U6YilVpKuoS4UsAmTJeM_isx3wjd1hguOzRO_Drq4wcCzue2JS4eUcNP3M9nwXmAfvKh4GKY0_vg6lyJ44dKh9ARWnp4lOmB5D-2emZWrTbGWaSNt553arUZCTu-p1QapSaiW7GO5AeQRODx-MSjlXJRseTOVMx5wt7GcI1To0vTA5S3tfR9KjQVElGLeUTzwsUUvj2uXMbPNmo3dCUtKKUZiVO5qj1bgMqb45HUcXjBqLRAuhGM7io7qpL23BUDLXn5927fFV4KOHxHGbI55SkiBVCuw'
      }
    };
    console.log("SEARCH url", config.url)
    axios(config)
      .then(function (response) {

        let result = response.data.rows.map(({ name, id }) => ({ name, id }))


        console.log("all models list", result)
        setServerData(result);


        //////// All Users End //////////
      })
      .catch(function (error) {
        console.log(error);
      });

  }, []);

  useEffect(() => {
    var config = {
      method: 'get',
      url: 'http://vmadmin01.schnupp.de/api/v1/statuslabels/',
      headers: {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMzJiYWRlMDk3YTNkMmI5ZjM2ODRjMjUzN2JlZmZiZmQ0MzgwOTU3OWRjZDYwOGJkMDM5ZjQ1N2FjNDYyYjViYTBkNWRlZGRhNDM3ZDRmODIiLCJpYXQiOjE2NjYwNzIyMzcsIm5iZiI6MTY2NjA3MjIzNywiZXhwIjoyMTM5NDU3ODM3LCJzdWIiOiIyNDgiLCJzY29wZXMiOltdfQ.P1BI29MVtyTZMrbcL5CAj7O0nIpIP9Abvtk7QJtPMoXJXlYR9zWrAbeKGojnwKGFi6_wz98t66q4q74TchZLWUhiurF2iJ497mbU3LEJvgzzFg50J6eJpVfJ9PHM7g-a6r5cPhqoqG9vQFdrDmcV0kY6B6AWkgCpHZBMy5b0Uztm7Fr9zBRwqYZm5hiIzhlr6p3JUx2knm2oaiyM1QLplrdMtf1tlokexPNfP8dUGFSyHJ0hDCud0ZpWDZqIA42K6lsjhSOER2thW9z4oLF42dJYIQNOFAq3fsGrJqpdpIkX0zRvgqlxlBcfuEITKX3_uy2nLhhjITW94ilHUZXjrfSmfNrtJ-FWbWzEAoCNas9b_P4qBOSURlvwCXjxS2gi89lvEUwVjrjYl-U6YilVpKuoS4UsAmTJeM_isx3wjd1hguOzRO_Drq4wcCzue2JS4eUcNP3M9nwXmAfvKh4GKY0_vg6lyJ44dKh9ARWnp4lOmB5D-2emZWrTbGWaSNt553arUZCTu-p1QapSaiW7GO5AeQRODx-MSjlXJRseTOVMx5wt7GcI1To0vTA5S3tfR9KjQVElGLeUTzwsUUvj2uXMbPNmo3dCUtKKUZiVO5qj1bgMqb45HUcXjBqLRAuhGM7io7qpL23BUDLXn5927fFV4KOHxHGbI55SkiBVCuw'
      }
    };
    console.log("SEARCH url", config.url)
    axios(config)
      .then(function (response) {

        let statusResult = response.data.rows.map(({ name, id }) => ({ name, id }))


        console.log("all status list", statusResult)
        setStatusResult(statusResult);


        //////// All Users End //////////
      })
      .catch(function (error) {
        console.log(error);
      });

  }, []);

  useEffect(() => {
    var config = {
      method: 'get',
      url: 'http://vmadmin01.schnupp.de/api/v1/suppliers/',
      headers: {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMzJiYWRlMDk3YTNkMmI5ZjM2ODRjMjUzN2JlZmZiZmQ0MzgwOTU3OWRjZDYwOGJkMDM5ZjQ1N2FjNDYyYjViYTBkNWRlZGRhNDM3ZDRmODIiLCJpYXQiOjE2NjYwNzIyMzcsIm5iZiI6MTY2NjA3MjIzNywiZXhwIjoyMTM5NDU3ODM3LCJzdWIiOiIyNDgiLCJzY29wZXMiOltdfQ.P1BI29MVtyTZMrbcL5CAj7O0nIpIP9Abvtk7QJtPMoXJXlYR9zWrAbeKGojnwKGFi6_wz98t66q4q74TchZLWUhiurF2iJ497mbU3LEJvgzzFg50J6eJpVfJ9PHM7g-a6r5cPhqoqG9vQFdrDmcV0kY6B6AWkgCpHZBMy5b0Uztm7Fr9zBRwqYZm5hiIzhlr6p3JUx2knm2oaiyM1QLplrdMtf1tlokexPNfP8dUGFSyHJ0hDCud0ZpWDZqIA42K6lsjhSOER2thW9z4oLF42dJYIQNOFAq3fsGrJqpdpIkX0zRvgqlxlBcfuEITKX3_uy2nLhhjITW94ilHUZXjrfSmfNrtJ-FWbWzEAoCNas9b_P4qBOSURlvwCXjxS2gi89lvEUwVjrjYl-U6YilVpKuoS4UsAmTJeM_isx3wjd1hguOzRO_Drq4wcCzue2JS4eUcNP3M9nwXmAfvKh4GKY0_vg6lyJ44dKh9ARWnp4lOmB5D-2emZWrTbGWaSNt553arUZCTu-p1QapSaiW7GO5AeQRODx-MSjlXJRseTOVMx5wt7GcI1To0vTA5S3tfR9KjQVElGLeUTzwsUUvj2uXMbPNmo3dCUtKKUZiVO5qj1bgMqb45HUcXjBqLRAuhGM7io7qpL23BUDLXn5927fFV4KOHxHGbI55SkiBVCuw'
      }
    };
    console.log("SEARCH url", config.url)
    axios(config)
      .then(function (response) {
        ///////// All Users //////////////
        //console.log("Data for flat list",response.data.rows[1].name)
        //let result = response.data.rows.map(a => a.name);
        //console.log("only name list ",result)
        let supplierResult = response.data.rows.map(({ name, id }) => ({ name, id }))


        console.log("all models list", supplierResult)
        setSupplierResult(supplierResult);


        //////// All Users End //////////
      })
      .catch(function (error) {
        console.log(error);
      });

  }, []);



  const CreateNewAssetConfirmation = async () => {

    var serailValid = false;
    if (!SelectedItems) {
      setSelectedError("Bitte Modell wählen!");
    }
    else if (!SelectedStatus) {
      setStatusError("Bitte Status wählen!");
    }
    else if (!SelectedSupplier) {
      setSupplierError("Bitte Lieferant wählen!");
    }
    else {
      setSerialError("submitted")
      serailValid = true


      if (serailValid) {
        alert('Serial: ' + barcode);
      }


      var data = JSON.stringify({
        "model_id": SelectedItems,
        "name": name,
        "serial": barcode,
        "order_number": order,
        "notes": note,
        "status_id": SelectedStatus,
        "warranty_months": warranty,
        "purchase_cost": purchaseCost,
        "purchase_date": purchaseDate,
        "supplier_id": SelectedSupplier,
        "company_id": "1"

      });
      console.log("json input data", data)
      var config = {
        method: 'post',
        url: 'http://vmadmin01.schnupp.de/api/v1/hardware',
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
          if (response.data.messages.serial) {
            alert("Seriennummer schon Vorhanden, Bitte versuchen Sie es mit einer anderen Seriennummer");
          }
          else {
            console.log(JSON.stringify(response.data.messages));
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

  }





  return (
    <>

{barcode == "" ? (
          <RNCamera
            style={styles.rnCamera}


            autoFocus={RNCamera.Constants.AutoFocus.on}
            type={RNCamera.Constants.Type.back}
            googleVisionBarcodeType={RNCamera.Constants.GoogleVisionBarcodeDetection.BarcodeType.ALL}
            //onBarCodeRead={setBarcode}
            //onBarCodeRead={(data) => console.log("data",data.data)} 
            onBarCodeRead={(data) => setBarcode(data.data)}>
            <BarcodeMask
              lineAnimationDuration={1000}
              width="100%"
              height="100%"
              outerMaskOpacity={0.4}
              backgroundColor="#eee"
              edgeColor={'#fff'}
              edgeBorderWidth={4}
              edgeHeight={10}
              edgeWidth={10}
              edgeRadius={5}
              animatedLineColor={'#0097AB'}
              animatedLineThickness={3}
              animatedLineOrientation="horizontal"



            />
          </RNCamera>

        ) : (
          <SafeAreaView style={[styles.rnCamera, styles.rmCameraResult]}>
            <Text style={styles.rmCameraResultText}>{setBarcode.data}</Text>

          </SafeAreaView>


        )}
    

       

<View style={styles.row}>
        

        <Fumi
          value={barcode}
          onChangeText={setBarcode}
          iconClass={FontAwesomeIcon}
          iconName={'barcode'}
          iconColor={'#f95a25'}
          iconSize={20}
          iconWidth={40}
          inputPadding={16}
          textColor={'#f95a25'}
        />
        <SafeAreaView >
          <TouchableOpacity style={styles.btn} onPress={() => setBarcode("")}>
            <Text style={styles.btnText}>QR Scan</Text>
          </TouchableOpacity>
          <Text>{barcode}</Text>
        </SafeAreaView>
        </View>
        {SerialError.length > 0 &&
          <Text style={styles.ErrorValidation}>{SerialError}</Text>
        }
        <SearchableDropdown
     
          multi={true}
          SelectedItems={SelectedItems}
          onItemSelect={(item) => {

            //items.push(item)
            (setSelectedItems(item.id));
            (setSelectedItemsText(item.name));

          }}
          containerStyle={{ padding: 5 }}
          onRemoveItem={(item, index) => {
            const items = this.state.selectedItems.filter((sitem) => sitem.id !== item.id);
            this.setState({ selectedItems: items });
          }}
          itemStyle={{
            padding: 10,
            marginTop: 2,
            backgroundColor: '#ddd',
            borderColor: '#bbb',
            borderWidth: 1,
            borderRadius: 5,
          }}
          itemTextStyle={{ color: '#222' }}
          itemsContainerStyle={{ maxHeight: 140 }}
          items={serverData}
          defaultIndex={2}
          chip={true}
          resetValue={false}
          textInputProps={
            {
              placeholder: "Bitte Modelle auswählen",
              placeholderTextColor: "#080808",
              underlineColorAndroid: "transparent",
              style: {
                padding: 12,
                borderWidth: 1,
                borderColor: '#ccc',
                borderRadius: 5,
              },
              onTextChange: text => (text)
            }
          }
          listProps={
            {
              nestedScrollEnabled: true,
            }
          }
        />
        <Text style={styles.dropdownInput}>{SelectedItemsText}</Text>
        <Text style={styles.ErrorValidation}>{SelectedError}</Text>

        <SearchableDropdown
          onTextChange={(text) => console.log(text)}
          SelectedStatus={SelectedStatus}

          onItemSelect={(item) => {

            //items.push(item)
            (setSelectedStatus(item.id));
            (setSelectedStatusText(item.name));

          }}




          containerStyle={{ padding: 5 }}
          //suggestion container style
          textInputStyle={{
            //inserted text style
            padding: 12,
            borderWidth: 1,
            borderColor: '#ccc',
            backgroundColor: '#FAF7F6',
          }}
          itemStyle={{
            padding: 10,
            marginTop: 2,
            backgroundColor: '#ddd',
            borderColor: '#bbb',
            borderWidth: 1,
            borderRadius: 5,
          }}
          itemTextStyle={{ color: '#222' }}
          itemsContainerStyle={{ maxHeight: 140 }}
          items={StatusResult}
          defaultIndex={2}
          chip={true}
          resetValue={false}
          textInputProps={
            {
              placeholder: "Bitte Status auswählen",
              placeholderTextColor: "#080808",
              underlineColorAndroid: "transparent",
              style: {
                padding: 12,
                borderWidth: 1,
                borderColor: '#ccc',
                borderRadius: 5,
              },
              onTextChange: text => alert(text)
            }
          }
          listProps={
            {
              nestedScrollEnabled: true,
            }
          }
        />

        <Text style={styles.dropdownInput}>{SelectedStatusText}</Text>
        <Text style={styles.ErrorValidation}>{StatusError}</Text>


        <SearchableDropdown
          onTextChange={(text) => console.log(text)}
          SelectedSupplier={SelectedSupplier}
          //onItemSelect={(item) => setSelectSupplier(item.id)}
          onItemSelect={(item) => {

            //items.push(item)
            (setSelectedSupplier(item.id));
            (setSelectSupplierText(item.name));

          }}




          containerStyle={{ padding: 5 }}
          //suggestion container style
          textInputStyle={{
            //inserted text style
            padding: 12,
            borderWidth: 1,
            borderColor: '#ccc',
            backgroundColor: '#FAF7F6',
          }}
          itemStyle={{
            padding: 10,
            marginTop: 2,
            backgroundColor: '#ddd',
            borderColor: '#bbb',
            borderWidth: 1,
            borderRadius: 5,
          }}
          itemTextStyle={{ color: '#222' }}
          itemsContainerStyle={{ maxHeight: 140 }}
          items={SupplierResult}
          defaultIndex={2}
          chip={true}
          resetValue={false}
          textInputProps={
            {
              placeholder: "Bitte Lieferant auswählen",
              placeholderTextColor: "#080808",
              underlineColorAndroid: "transparent",
              style: {
                padding: 12,
                borderWidth: 1,
                borderColor: '#ccc',
                borderRadius: 5,
              },
              onTextChange: text => alert(text)
            }
          }
          listProps={
            {
              nestedScrollEnabled: true,
            }
          }
        />

        <Text style={styles.dropdownInput}>{SelectSupplierText}</Text>
        <Text style={styles.ErrorValidation}>{SupplierError}</Text>

          <ScrollView
        nestedScrollEnabled={true}
        listOptionProps={{nestedScrollEnabled: true}}
        keyboardShouldPersistTaps={'handled'}>
        <Fumi
          label={'Asset Name'}
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

      </ScrollView>
    </>
  );

};





const styles = StyleSheet.create({
  ErrorValidation: {
    padding: 5,
    color: 'red',
    textAlign: 'justify',
  },
  dropdownInput: {
    padding: 5,
    color: 'green',
    textAlign: 'justify',
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
  }
});


export default CreateNewAsset;
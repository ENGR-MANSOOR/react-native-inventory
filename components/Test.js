import React, { useEffect, useState } from "react";
import { Text,View, ScrollView, StyleSheet, Image, Button, Alert, SafeAreaView } from 'react-native';
import { Akira } from 'react-native-textinput-effects';
import { Fumi } from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import SearchableDropdown from 'react-native-searchable-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown'
import SimpleReactValidator from 'simple-react-validator';

var axios = require('axios');

const CreateNewAsset = ({ navigation }) => {

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
 //const [model, setModel] = React.useState("");
 // const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [purchaseDate, setPurchaseDate] = React.useState("");
  //const [supplier, setSupplier] = React.useState("");
  const [order, setOrder] = React.useState("");
  const [purchaseCost, setPurchaseCost] = React.useState("");
  const [warranty, setWarranty] = React.useState("");
  const [note, setNote] = React.useState("");
  console.log("serial numer in effects", Serial)
  console.log("model", SelectedSupplier)
  //console.log("status", status)

  
   
  
    

  

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
        // console.log(JSON.stringify(response.data.rows[0].name));
        ///////// All Users //////////////

        //console.log("Data for flat list",response.data.rows[1].name)
        //console.log("before flat list just",response.data.rows)
        //let result = response.data.rows.map(a => a.name);
        //console.log("only name list ",result)
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
        // console.log(JSON.stringify(response.data.rows[0].name));
        ///////// All Users //////////////

        //console.log("Data for flat list",response.data.rows[1].name)
        //console.log("before flat list just",response.data.rows)
        //let result = response.data.rows.map(a => a.name);
        //console.log("only name list ",result)
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
        // console.log(JSON.stringify(response.data.rows[0].name));
        ///////// All Users //////////////

        //console.log("Data for flat list",response.data.rows[1].name)
        //console.log("before flat list just",response.data.rows)
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
    if(Serial.length == 0){
        setSerialError("Bitte Seriennummer eingeben!");
    }  
    else if(!SelectedItems) {
      setSelectedError("Bitte Modell wählen!");
    } 
    else if(!SelectedStatus) {
      setStatusError("Bitte Status wählen!");
    } 
    else if(!SelectedSupplier) {
      setSupplierError("Bitte Lieferant wählen!");
    }    
    else{
      setSerialError("submitted")
        serailValid = true
   
    if(serailValid ){            
      alert('Serial: ' + Serial ); 
      setSerial("");
    
  }       

    var data = JSON.stringify({
      "model_id": SelectedItems,
      "name": name,
      "serial": Serial,
      "order_number": order,
      "notes": note,
      "status_id": SelectedStatus,
      "warranty_months": warranty,
      "purchase_cost": purchaseCost,
      "purchase_date": purchaseDate,
      "supplier_id": SelectedSupplier, 
      "company_id":"1"
      
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
      })
      .catch(function (error) {
        console.log(error);
        Alert.alert(
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
      
      <ScrollView
                    nestedScrollEnabled={true}
                    keyboardShouldPersistTaps={'handled'}>
        <View>

        

          <Fumi
            label={'Serial Nr.'}
            value={Serial}
            onChangeText={setSerial}
            iconClass={FontAwesomeIcon}
            iconName={'barcode'}
            iconColor={'#f95a25'}
            iconSize={20}
            iconWidth={40}
            inputPadding={16}
            textColor={'#f95a25'}
           

          />
           {SerialError.length > 0 &&
          <Text>{SerialError}</Text>
           }
        <SearchableDropdown
            multi={true}
            SelectedItems={SelectedItems}
            onItemSelect={(item) => {
          
              //items.push(item)
              (setSelectedItems(item.id));
              alert(SelectedItems);
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
                placeholder: "Modelle",
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
           <Text>{SelectedItemsText}</Text>
           <Text>{SelectedError}</Text>

<SearchableDropdown
        onTextChange={(text) =>console.log(text)}
        SelectedStatus={SelectedStatus}
        
        onItemSelect={(item) => {
          
          //items.push(item)
          (setSelectedStatus(item.id));
          alert(SelectedStatus);
          (setSelectedStatusText(item.name));
          
        }}
       
            

            //On text change listner on the searchable input
            //onItemSelect={(items) => alert(JSON.stringify(items.id))}
            //onItemSelect called after the selection from the dropdown
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
              //single dropdown item style
              padding: 10,
              marginTop: 2,
              backgroundColor: '#FAF9F8',
              borderColor: '#bbb',
              borderWidth: 1,
            }}
            itemTextStyle={{
              //text style of a single dropdown item
              color: '#222',
            }}
            itemsContainerStyle={{
              //items container style you can pass maxHeight
              //to restrict the items dropdown hieght
              maxHeight: '60%',
            }}
            items={StatusResult}
            //mapping of item array
            defaultIndex={2}
            //default selected item index
            placeholder="Status"
            //place holder for the search input
            resetValue={false}
            //reset textInput Value with true and false state
            underlineColorAndroid="transparent"
          //To remove the underline from the android input
       />

<Text>{SelectedStatusText}</Text>
<Text>{StatusError}</Text>


<SearchableDropdown
        onTextChange={(text) =>console.log(text)}
        SelectedSupplier={SelectedSupplier}
        //onItemSelect={(item) => setSelectSupplier(item.id)}
        onItemSelect={(item) => {
          
          //items.push(item)
          (setSelectedSupplier(item.id));
          alert(SelectedSupplier);
          (setSelectSupplierText(item.name));
          
        }}
           
            

            //On text change listner on the searchable input
            //onItemSelect={(items) => alert(JSON.stringify(items.id))}
            //onItemSelect called after the selection from the dropdown
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
              //single dropdown item style
              padding: 10,
              marginTop: 2,
              backgroundColor: '#FAF9F8',
              borderColor: '#bbb',
              borderWidth: 1,
            }}
            itemTextStyle={{
              //text style of a single dropdown item
              color: '#222',
            }}
            itemsContainerStyle={{
              //items container style you can pass maxHeight
              //to restrict the items dropdown hieght
              maxHeight: '60%',
            }}
            items={SupplierResult}
            //mapping of item array
            defaultIndex={2}
            //default selected item index
            placeholder="Supplier"
            //place holder for the search input
            resetValue={false}
            //reset textInput Value with true and false state
            underlineColorAndroid="transparent"
          //To remove the underline from the android input
          listOptionProps={{ nestedScrollEnabled: true }}
       />

<Text>{SelectSupplierText}</Text>
<Text>{SupplierError}</Text>
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
        </View>
        </ScrollView>
    </>
  );

};





const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});


export default CreateNewAsset;
import React from "react";
import { TextInput, Text, Image, View, Dimensions, StyleSheet, TouchableOpacity, Button, FlatList } from "react-native";
import { Icon } from 'react-native-elements'
//import SelectDropdown from 'react-native-select-dropdown';
import SearchableDropdown from 'react-native-searchable-dropdown';

var axios = require('axios');

const CheckOutConfirm = ({ navigation, route }) => {
  const [selected, setSelected] = React.useState("");
  const [name, setName] = React.useState([]);
    var Asset_Tag = route.params.assetTag
    const [number, onChangeNumber] = React.useState("eingeben Nutzer ID");
    const [text, onChangeText] = React.useState(null);
    console.log("Text", text)
    var config = {
        method: 'get',
        url: `http://vmadmin01.schnupp.de/api/v1/users?search=${text}&limit=50&offset=0&sort=created_at&order=desc&deleted=false&all=false` && 'http://vmadmin01.schnupp.de/api/v1/users/',
        headers: { 
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMzJiYWRlMDk3YTNkMmI5ZjM2ODRjMjUzN2JlZmZiZmQ0MzgwOTU3OWRjZDYwOGJkMDM5ZjQ1N2FjNDYyYjViYTBkNWRlZGRhNDM3ZDRmODIiLCJpYXQiOjE2NjYwNzIyMzcsIm5iZiI6MTY2NjA3MjIzNywiZXhwIjoyMTM5NDU3ODM3LCJzdWIiOiIyNDgiLCJzY29wZXMiOltdfQ.P1BI29MVtyTZMrbcL5CAj7O0nIpIP9Abvtk7QJtPMoXJXlYR9zWrAbeKGojnwKGFi6_wz98t66q4q74TchZLWUhiurF2iJ497mbU3LEJvgzzFg50J6eJpVfJ9PHM7g-a6r5cPhqoqG9vQFdrDmcV0kY6B6AWkgCpHZBMy5b0Uztm7Fr9zBRwqYZm5hiIzhlr6p3JUx2knm2oaiyM1QLplrdMtf1tlokexPNfP8dUGFSyHJ0hDCud0ZpWDZqIA42K6lsjhSOER2thW9z4oLF42dJYIQNOFAq3fsGrJqpdpIkX0zRvgqlxlBcfuEITKX3_uy2nLhhjITW94ilHUZXjrfSmfNrtJ-FWbWzEAoCNas9b_P4qBOSURlvwCXjxS2gi89lvEUwVjrjYl-U6YilVpKuoS4UsAmTJeM_isx3wjd1hguOzRO_Drq4wcCzue2JS4eUcNP3M9nwXmAfvKh4GKY0_vg6lyJ44dKh9ARWnp4lOmB5D-2emZWrTbGWaSNt553arUZCTu-p1QapSaiW7GO5AeQRODx-MSjlXJRseTOVMx5wt7GcI1To0vTA5S3tfR9KjQVElGLeUTzwsUUvj2uXMbPNmo3dCUtKKUZiVO5qj1bgMqb45HUcXjBqLRAuhGM7io7qpL23BUDLXn5927fFV4KOHxHGbI55SkiBVCuw'
        }
      };
      console.log("SEARCH url",config.url)
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data.rows[0].name));
        ///////// All Users //////////////

       console.log("Data for flat list",response.data.rows[1].name)
        //console.log("before flat list just",response.data.rows)
       //let result = response.data.rows.map(a => a.name);
        //console.log("only name list ",result)
        let result = response.data.rows.map(( {name,id} ) =>  ({name,id}) )
      
        
       console.log("all usernames list",result)
       setName(result)
        console.log("setName", name)
       
        //////// All Users End //////////
      })
      .catch(function (error) {
        console.log(error);
      });
      
/*

      var config = {
        method: 'get',
        url: 'http://vmadmin01.schnupp.de/api/v1/users/',
        headers: { 
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMzJiYWRlMDk3YTNkMmI5ZjM2ODRjMjUzN2JlZmZiZmQ0MzgwOTU3OWRjZDYwOGJkMDM5ZjQ1N2FjNDYyYjViYTBkNWRlZGRhNDM3ZDRmODIiLCJpYXQiOjE2NjYwNzIyMzcsIm5iZiI6MTY2NjA3MjIzNywiZXhwIjoyMTM5NDU3ODM3LCJzdWIiOiIyNDgiLCJzY29wZXMiOltdfQ.P1BI29MVtyTZMrbcL5CAj7O0nIpIP9Abvtk7QJtPMoXJXlYR9zWrAbeKGojnwKGFi6_wz98t66q4q74TchZLWUhiurF2iJ497mbU3LEJvgzzFg50J6eJpVfJ9PHM7g-a6r5cPhqoqG9vQFdrDmcV0kY6B6AWkgCpHZBMy5b0Uztm7Fr9zBRwqYZm5hiIzhlr6p3JUx2knm2oaiyM1QLplrdMtf1tlokexPNfP8dUGFSyHJ0hDCud0ZpWDZqIA42K6lsjhSOER2thW9z4oLF42dJYIQNOFAq3fsGrJqpdpIkX0zRvgqlxlBcfuEITKX3_uy2nLhhjITW94ilHUZXjrfSmfNrtJ-FWbWzEAoCNas9b_P4qBOSURlvwCXjxS2gi89lvEUwVjrjYl-U6YilVpKuoS4UsAmTJeM_isx3wjd1hguOzRO_Drq4wcCzue2JS4eUcNP3M9nwXmAfvKh4GKY0_vg6lyJ44dKh9ARWnp4lOmB5D-2emZWrTbGWaSNt553arUZCTu-p1QapSaiW7GO5AeQRODx-MSjlXJRseTOVMx5wt7GcI1To0vTA5S3tfR9KjQVElGLeUTzwsUUvj2uXMbPNmo3dCUtKKUZiVO5qj1bgMqb45HUcXjBqLRAuhGM7io7qpL23BUDLXn5927fFV4KOHxHGbI55SkiBVCuw', 
          'Accept': 'application/json', 
          'Content-Type': 'application/json'
        }
      };
      console.log("url of Users", config.url)
      axios(config)
      .then(function (response) {
        (JSON.stringify(response.data));
        console.log("Data for flat list",response.data.rows[1].name)
        //console.log("before flat list just",response.data.rows)
       //let result = response.data.rows.map(a => a.name);
        //console.log("only name list ",result)
        let result = response.data.rows.map(( {name,id} ) =>  ({name,id}) )
      
        
       console.log("all usernames list",result)
       setName(result)
        console.log("setName", name)
       
         
      })
      .catch(function (error) {
        console.log(error);
      });
      
*/
      const GetAllUsers = async () => {
        console.log("",)
        var config = {
          method: 'get',
          url: 'http://vmadmin01.schnupp.de/api/v1/users/',
          headers: { 
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMzJiYWRlMDk3YTNkMmI5ZjM2ODRjMjUzN2JlZmZiZmQ0MzgwOTU3OWRjZDYwOGJkMDM5ZjQ1N2FjNDYyYjViYTBkNWRlZGRhNDM3ZDRmODIiLCJpYXQiOjE2NjYwNzIyMzcsIm5iZiI6MTY2NjA3MjIzNywiZXhwIjoyMTM5NDU3ODM3LCJzdWIiOiIyNDgiLCJzY29wZXMiOltdfQ.P1BI29MVtyTZMrbcL5CAj7O0nIpIP9Abvtk7QJtPMoXJXlYR9zWrAbeKGojnwKGFi6_wz98t66q4q74TchZLWUhiurF2iJ497mbU3LEJvgzzFg50J6eJpVfJ9PHM7g-a6r5cPhqoqG9vQFdrDmcV0kY6B6AWkgCpHZBMy5b0Uztm7Fr9zBRwqYZm5hiIzhlr6p3JUx2knm2oaiyM1QLplrdMtf1tlokexPNfP8dUGFSyHJ0hDCud0ZpWDZqIA42K6lsjhSOER2thW9z4oLF42dJYIQNOFAq3fsGrJqpdpIkX0zRvgqlxlBcfuEITKX3_uy2nLhhjITW94ilHUZXjrfSmfNrtJ-FWbWzEAoCNas9b_P4qBOSURlvwCXjxS2gi89lvEUwVjrjYl-U6YilVpKuoS4UsAmTJeM_isx3wjd1hguOzRO_Drq4wcCzue2JS4eUcNP3M9nwXmAfvKh4GKY0_vg6lyJ44dKh9ARWnp4lOmB5D-2emZWrTbGWaSNt553arUZCTu-p1QapSaiW7GO5AeQRODx-MSjlXJRseTOVMx5wt7GcI1To0vTA5S3tfR9KjQVElGLeUTzwsUUvj2uXMbPNmo3dCUtKKUZiVO5qj1bgMqb45HUcXjBqLRAuhGM7io7qpL23BUDLXn5927fFV4KOHxHGbI55SkiBVCuw', 
            'Accept': 'application/json', 
            'Content-Type': 'application/json'
          }
        };
        console.log("url of Users", config.url)
        axios(config)
        .then(function (response) {
          (JSON.stringify(response.data));
          console.log("Data for flat list",response.data.rows[1].name)
          //console.log("before flat list just",response.data.rows)
         //let result = response.data.rows.map(a => a.name);
          //console.log("only name list ",result)
          let result = response.data.rows.map(( {name,id} ) =>  ({name,id}) )
        
          
         console.log("all usernames list",result)
         setName(result)
          console.log("setName", name)
         
           
        })
        .catch(function (error) {
          console.log(error);
        });
        

      }







/*

    const CheckOutConfirmFunction = async () => {
        
        console.log("number", number) 
        //console.log("InputIdforCheckOut", InputIdforCheckOut) 
        
        var data = JSON.stringify({
            "checkout_to_type": "user",
            "assigned_user": number
        });

        var config = {
            method: 'post',
            url: `http://vmadmin01.schnupp.de//api/v1/hardware/${Asset_Tag}/checkout`,
            headers: {
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMzJiYWRlMDk3YTNkMmI5ZjM2ODRjMjUzN2JlZmZiZmQ0MzgwOTU3OWRjZDYwOGJkMDM5ZjQ1N2FjNDYyYjViYTBkNWRlZGRhNDM3ZDRmODIiLCJpYXQiOjE2NjYwNzIyMzcsIm5iZiI6MTY2NjA3MjIzNywiZXhwIjoyMTM5NDU3ODM3LCJzdWIiOiIyNDgiLCJzY29wZXMiOltdfQ.P1BI29MVtyTZMrbcL5CAj7O0nIpIP9Abvtk7QJtPMoXJXlYR9zWrAbeKGojnwKGFi6_wz98t66q4q74TchZLWUhiurF2iJ497mbU3LEJvgzzFg50J6eJpVfJ9PHM7g-a6r5cPhqoqG9vQFdrDmcV0kY6B6AWkgCpHZBMy5b0Uztm7Fr9zBRwqYZm5hiIzhlr6p3JUx2knm2oaiyM1QLplrdMtf1tlokexPNfP8dUGFSyHJ0hDCud0ZpWDZqIA42K6lsjhSOER2thW9z4oLF42dJYIQNOFAq3fsGrJqpdpIkX0zRvgqlxlBcfuEITKX3_uy2nLhhjITW94ilHUZXjrfSmfNrtJ-FWbWzEAoCNas9b_P4qBOSURlvwCXjxS2gi89lvEUwVjrjYl-U6YilVpKuoS4UsAmTJeM_isx3wjd1hguOzRO_Drq4wcCzue2JS4eUcNP3M9nwXmAfvKh4GKY0_vg6lyJ44dKh9ARWnp4lOmB5D-2emZWrTbGWaSNt553arUZCTu-p1QapSaiW7GO5AeQRODx-MSjlXJRseTOVMx5wt7GcI1To0vTA5S3tfR9KjQVElGLeUTzwsUUvj2uXMbPNmo3dCUtKKUZiVO5qj1bgMqb45HUcXjBqLRAuhGM7io7qpL23BUDLXn5927fFV4KOHxHGbI55SkiBVCuw',
                'Content-Type': 'application/json'
            },
            data: data
        };
        console.log("URL Checkout",config.url)
        axios(config)
            .then(function (response) {
              alert("Response Messages", response.data.messages)
                console.log(JSON.stringify(response.data));
                console.log("check out message", response.data.messages)
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
                    
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                  ]
                );
                
            });


    }

*/

    return (
        <View>
        <SearchableDropdown
            onItemSelect={(item) => {
              console.log("name",item)
              const InputIdforCheckOut = item.id;
              console.log("InputIdforCheckOut",InputIdforCheckOut)
              var data = JSON.stringify({
            "checkout_to_type": "user",
            "assigned_user": InputIdforCheckOut
        });

        var config = {
            method: 'post',
            url: `http://vmadmin01.schnupp.de//api/v1/hardware/${Asset_Tag}/checkout`,
            headers: {
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMzJiYWRlMDk3YTNkMmI5ZjM2ODRjMjUzN2JlZmZiZmQ0MzgwOTU3OWRjZDYwOGJkMDM5ZjQ1N2FjNDYyYjViYTBkNWRlZGRhNDM3ZDRmODIiLCJpYXQiOjE2NjYwNzIyMzcsIm5iZiI6MTY2NjA3MjIzNywiZXhwIjoyMTM5NDU3ODM3LCJzdWIiOiIyNDgiLCJzY29wZXMiOltdfQ.P1BI29MVtyTZMrbcL5CAj7O0nIpIP9Abvtk7QJtPMoXJXlYR9zWrAbeKGojnwKGFi6_wz98t66q4q74TchZLWUhiurF2iJ497mbU3LEJvgzzFg50J6eJpVfJ9PHM7g-a6r5cPhqoqG9vQFdrDmcV0kY6B6AWkgCpHZBMy5b0Uztm7Fr9zBRwqYZm5hiIzhlr6p3JUx2knm2oaiyM1QLplrdMtf1tlokexPNfP8dUGFSyHJ0hDCud0ZpWDZqIA42K6lsjhSOER2thW9z4oLF42dJYIQNOFAq3fsGrJqpdpIkX0zRvgqlxlBcfuEITKX3_uy2nLhhjITW94ilHUZXjrfSmfNrtJ-FWbWzEAoCNas9b_P4qBOSURlvwCXjxS2gi89lvEUwVjrjYl-U6YilVpKuoS4UsAmTJeM_isx3wjd1hguOzRO_Drq4wcCzue2JS4eUcNP3M9nwXmAfvKh4GKY0_vg6lyJ44dKh9ARWnp4lOmB5D-2emZWrTbGWaSNt553arUZCTu-p1QapSaiW7GO5AeQRODx-MSjlXJRseTOVMx5wt7GcI1To0vTA5S3tfR9KjQVElGLeUTzwsUUvj2uXMbPNmo3dCUtKKUZiVO5qj1bgMqb45HUcXjBqLRAuhGM7io7qpL23BUDLXn5927fFV4KOHxHGbI55SkiBVCuw',
                'Content-Type': 'application/json'
            },
            data: data
        };
        console.log("URL Checkout",config.url)
        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                console.log("check out message", response.data.messages)
                //alert("Response", response.data.messages)
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
                  response.data.messages,
                  [
                    
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                  ]
                );
            });

            }}
            containerStyle={{ padding: 5 }}
            onRemoveItem={(item, index) => {
              const name = this.state.selectedItems.filter((sitem) => sitem.id !== item.id);
              this.setState({ selectedItems: name });
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
            items={name}
            defaultIndex={2}
            resetValue={false}
            textInputProps={
              {
                placeholder: "placeholder",
                underlineColorAndroid: "transparent",
                style: {
                    padding: 12,
                    borderWidth: 1,
                    borderColor: '#ccc',
                    borderRadius: 5,
                },
                onTextChange: text => console.log("onTextChange",text)
              }
            }
            listProps={
              {
                nestedScrollEnabled: true,
              }
            }
        />
            <Text>This is {route.params.Ownedby}'s profile</Text>
    <TextInput
      onChangeText={onChangeText}
      value={text}
    />

<Button
            onPress={() => navigation.navigate('Home')}
          icon={
            <Icon
              name="arrow-right"
              size={40}
              color="white"
            />
          }
          iconRight
          title="Home Menü"
        />
           


        </View>
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
export default CheckOutConfirm;
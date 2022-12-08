import { View, Dimensions, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import { Text, Input, Card } from '@rneui/themed';
import React from "react"
import AlertBox, { showAlert } from 'react-native-easy-alert';

import { RNCamera } from 'react-native-camera'
import BarcodeMask from 'react-native-barcode-mask';



function CheckInSearch({ navigation }) {
  const [number, onChangeNumber] = React.useState(null);




  return (

    <View >
      <Card>
        <Card.Title>Check In</Card.Title>
        <Text style={styles.subHeader} h3>Bitte schreiben Sie die beschriftete Nummer auf, um den Bestand zu überprüfen.</Text>

        {number == "clicked" ? (
          <RNCamera
            style={styles.rnCamera}


            autoFocus={RNCamera.Constants.AutoFocus.on}
            type={RNCamera.Constants.Type.back}
            googleVisionBarcodeType={RNCamera.Constants.GoogleVisionBarcodeDetection.BarcodeType.ALL}
            //onBarCodeRead={setBarcode}
            //onBarCodeRead={(data) => console.log("data",data.data)} 
            onBarCodeRead={(data) => onChangeNumber(data.data)}>
            <BarcodeMask
              lineAnimationDuration={1000}
              width="100%"
              height="100%"
              outerMaskOpacity={0.4}
              backgroundColor="#eee"
              edgeColor={'#fff'}
              edgeBorderWidth={4}
              edgeHeight={25}
              edgeWidth={25}
              edgeRadius={5}
              animatedLineColor={'#0097AB'}
              animatedLineThickness={3}
              animatedLineOrientation="horizontal"



            />
          </RNCamera>

        ) : (
          <SafeAreaView style={[styles.rnCamera, styles.rmCameraResult]}>
            <Text style={styles.rmCameraResultText}>{onChangeNumber.data}</Text>

          </SafeAreaView>


        )}


        

        <Input
          value={number}
          onChangeText={onChangeNumber}
          placeholder='Labelled Nummer'
        />

<View style={styles.row}>
        <TouchableOpacity 
          onPress={() => {
            if ((!number)) {
              //alert("")
              showAlert({
                titleParam: 'Ob keine Eingabe oder ungültige Eingabe',
                bodyParam: 'Do you want to close me?',
                buttonsParam: [
                  {
                    backgroundColor: 'green',
                    text: 'Erneut Versuchen',
                    onPressAction: () => onChangeNumber(""),
                  },
                ],
              })
            }
            else {
              navigation.push('CheckIn', {
                number: number
              })
            }
          }}
          style={styles.btn}
        ><Text style={styles.btnText}>Check In</Text></TouchableOpacity>

          <TouchableOpacity
          
           style={styles.btn} onPress={() => onChangeNumber("clicked")}>
            <Text style={styles.btnText}>QR Scan</Text>
          </TouchableOpacity>
        
  
        <AlertBox />
</View>
      </Card>
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
    color: "#17A8E3",
    textAlign: "center",
    paddingVertical: 10
  },
  Error: {
    color: "blue",
    textAlign: "center",
    paddingVertical: 10
  },
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
    height: 10,
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
    justifyContent:'space-between'
  },
  btn: {
    width: 240,
    borderRadius: 4,
    backgroundColor: '#62d1bc',
    paddingHorizontal: 24,
    paddingVertical: 12,
    marginVertical: 20,
    
  },
  btnText: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
  },
  rnCamera: {
    width: '100%',
    height: "5%",
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
  }
})


export default CheckInSearch;

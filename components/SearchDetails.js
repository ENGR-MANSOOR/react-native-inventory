import { View, Dimensions, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import { Text, Input, Button, Card } from '@rneui/themed';
import React from "react"
import AlertBox, { hideAlert, showAlert } from 'react-native-easy-alert';

import { RNCamera } from 'react-native-camera'
import BarcodeMask from 'react-native-barcode-mask';
function SearchDetails({ navigation }) {
  const [number, onChangeNumber] = React.useState(null);

  return (

    <View >
      <Card>
        <Card.Title>Asset Details</Card.Title>
        <Text style={styles.subHeader} h3>Bitte schreiben Sie die beschriftete Nummer auf, um den Bestand zu überprüfen.</Text>

        {number == "clicked" ? (
          <RNCamera
            style={styles.rnCamera}


            autoFocus={RNCamera.Constants.AutoFocus.on}
            type={RNCamera.Constants.Type.back}
            googleVisionBarcodeType={RNCamera.Constants.GoogleVisionBarcodeDetection.BarcodeType.ALL}
            onBarCodeRead={(data) => onChangeNumber(data.data)}>
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
            <Text style={styles.rmCameraResultText}>{onChangeNumber.data}</Text>

          </SafeAreaView>


        )}


        <SafeAreaView style={styles.cameraControl}>
          <TouchableOpacity style={styles.btn} onPress={() => onChangeNumber("clicked")}>
            <Text style={styles.btnText}>QR Scan</Text>
          </TouchableOpacity>
          <Text>{number}</Text>
        </SafeAreaView>



        <Input
          onChangeText={onChangeNumber}
          value={number}
          placeholder='Labelled Nummer'
        />
        <Button
          onPress={() => {
            if (!number) {
              showAlert({
                titleParam: 'Fehlende Eingabe',
                bodyParam: 'Do you want to close me?',
                buttonsParam: [
                  {
                    backgroundColor: 'green',
                    text: 'Erneut Versuchen',
                    onPressAction: () => hideAlert(),
                  },
                ],
              })
            }
            else {
              navigation.push('DataDetails', {
                number: number
              })
            }
          }}
          title="CHECK IN"
          titleStyle={{ fontWeight: '700' }}
          buttonStyle={{
            backgroundColor: '#1E90FF',
            borderColor: 'transparent',
            borderWidth: 0,
            borderRadius: 30,
          }}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          icon={{
            name: 'arrow-right',
            type: 'font-awesome',
            size: 15,
            color: 'white',
          }}
          iconRight
          iconContainerStyle={{ marginLeft: 10, marginRight: -10 }}
        />
        <AlertBox />
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
})


export default SearchDetails;

import React from "react";
import {  TextInput, Text, Image, View, Dimensions, StyleSheet, TouchableOpacity, Button } from "react-native";

const CheckOutConfirm = ({ navigation, route }) => {
    return (
        <Text>This is {route.params.Ownedby}'s profile</Text>
    );
  };
  

  export default CheckOutConfirm;
import React from "react";
import {  TextInput, Text, Image, View, Dimensions, StyleSheet, TouchableOpacity, Button } from "react-native";

const CheckInConfirm = ({ navigation, route }) => {
    return (
        <Text>This is {route.params.name}'s profile</Text>
    );
  };
  

  export default CheckInConfirm;
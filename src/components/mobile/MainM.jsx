import React from "react";
import { Text, View } from "react-native";
import MoStyle from "../../styles/mobile";
import ButtonContainer from "./ButtonContainer";

function MainM () {

  const alert = () => global.alert("Você pressionou a tecla X");

  return (
    <View style={MoStyle.container}>
      <View style={MoStyle.display}>
        <Text> Display </Text>
      </View>
      <View style={MoStyle.buttonCnt} >
        <ButtonContainer btn1="7" btn2="8" btn3="9" />
        <ButtonContainer btn1="4" btn2="5" btn3="6" />
        <ButtonContainer btn1="1" btn2="2" btn3="3" />
      </View>
    </View>
  )
};




export default MainM;

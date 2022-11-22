import { View } from "react-native";
import MoStyle from "../../styles/mobile";
import ButtonGroup from "./ButtonGroup";

function ButtonContainer ({ btn1, btn2, btn3 }) {
  return (
    <View style={MoStyle.buttonGroup} >
      <ButtonGroup btn={ btn1 } />
      <ButtonGroup btn={ btn2 } />
      <ButtonGroup btn={ btn3 } />
    </View>
  )
}

export default ButtonContainer;

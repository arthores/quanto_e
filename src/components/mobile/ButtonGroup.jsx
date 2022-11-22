import { Button, Text } from "react-native";
import MoStyle from "../../styles/mobile";

function ButtonGroup ({ btn }) {
  return (
    <Button title={ btn } onPress={ () => global.alert('ok') } />
  )
}

export default ButtonGroup;

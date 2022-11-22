import { StyleSheet } from "react-native";

const MoStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0043',
    alignItems: 'center',
  },
  display: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "40%",
    width: "100%",
    backgroundColor: 'blue',
  },
  buttonCnt: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: 'center',
    height: "60%",
    width: "100%",
    backgroundColor: 'black',
  },
  buttonGroup: {
    flex: 1,
    flexDirection: "row",
    // alignItems: "center",
    height: "100%",
    width: "100%",
  },
  button: {
    backgroundColor: 'green',
  },
});

export default MoStyle;

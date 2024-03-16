import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 15,
    paddingVertical: 60,
    marginBottom: 180,
    // backgroundColor: colors.green,

    alignItems: "center",
  },
  addButton: {
    backgroundColor: colors.green,
    borderRadius: 20,
    padding: 8,
    width: 236,
    alignContent: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  logo: {
    width: "100%",
    height: "80%",
    alignSelf: "center",
    marginBottom: 14,
  },
  InputTex: {
    borderWidth: 0.5,
    borderRadius: 16,

    borderColor: colors.grey,
    height: "70%",
    width: 236,
    // alignSelf: "center",
    // alignContent: "center",
    // justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    // alignContent: "center",
    // backgroundColor: colors.green,
    flexDirection: "row",
    // justifyContent: "center",

    justifyContent: "space-between",
  },
  cateoris: {
    backgroundColor: colors.yellow,
    // flexDirection: "row",
    flex: 1,
    margin: 4,

    width: "100%",
    //30
    height: "100%",
    // paddingHorizontal: 20,
    // marginTop: 20,
  },
  card: {
    marginBottom: 100,
  },
});

export default styles;

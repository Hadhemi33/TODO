import { StyleSheet, Dimensions } from "react-native";
import colors from "../../constants/colors";
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  kbir: {
    // flexDirection: "column",
    // justifyContent: "space-between",
    width: 380,
    height: 350,
    borderRadius: 50,
    marginTop: 180,
    alignSelf: "center",

    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.grey,
  },

  TitreCard: {
    flexDirection: "row",
    justifyContent: "center",

    marginVertical: 15,
    marginHorizontal: 35,
    alignItems: "center",
  },
  Title: {
    fontSize: 30,
    color: colors.black,
    fontWeight: "normal",
    marginLeft: 10,

    // marginHorizontal: 20,
  },

  BodyCard: {
    // marginHorizontal: 35,
    // marginVertical: 35,
    margin: 35,
    // textAlign: "justify",
    // alignItems: "center",
    // alignContent: "center",
    // alignSelf: "center",
  },
  BodyText: {
    fontSize: 20,
  },
  FooterCard: {
    flexDirection: "row",
    justifyContent: "center",

    padding: 15,
  },
});
export default styles;

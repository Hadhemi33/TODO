import { StyleSheet, Dimensions } from "react-native";
import colors from "../../constants/colors";
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  kbir: {
    flexDirection: "column",
    justifyContent: "space-between",

    width: 380,
    height: 150,
    borderRadius: 50,
    marginTop: 30,
    alignSelf: "center",
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.grey,
  },
  HeaderCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    // marginVertical: 15,
    // marginHorizontal: 20,
    alignItems: "center",
  },
  TitreCard: {
    flexDirection: "row",
    marginVertical: 15,
    marginHorizontal: 35,
    alignItems: "center",
  },
  Title: {
    fontSize: 18,
    color: colors.black,
    fontWeight: "normal",
    marginLeft: 10,

    // marginHorizontal: 20,
  },
  isChecked: {
    marginTop: -45,
    marginRight: 25,
  },
  BodyCard: {
    marginHorizontal: 35,
  },
  BodyText: {
    fontSize: 16,
  },
  FooterCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
});
export default styles;

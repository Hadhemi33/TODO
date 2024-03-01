import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";
export default StyleSheet.create({
  container: {
    backgroundColor: colors.purple,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    margin: 10,
    borderRadius: 10,
  },
  text: {
    color: colors.white,
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
  },
  icon: {
    width: 24,
    height: 24,
  },
});

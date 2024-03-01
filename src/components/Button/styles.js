import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
export default StyleSheet.create({
  container: {
    backgroundColor: "#35e1bd",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    // margin: 10,
    borderRadius: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
  },
  icon: {
    width: 28,
    height: 28,
    marginLeft: 16,
  },
});

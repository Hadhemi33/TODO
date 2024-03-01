import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,
    // borderColor: colors.lightGrey,
    padding: 10,
    flex: 1,

    alignSelf: "center",
  },
  input: {
    color: colors.black,
    alignSelf: "center",

    fontSize: 14,
    height: 40,
    // flex: 1,
    // backgroundColor: colors.red,
  },
  icon: {
    width: 16,
    height: 16,
    marginRight: 16,
  },
});

export default styles;

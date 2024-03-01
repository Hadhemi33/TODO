import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingHorizontal: 60,
    paddingVertical: 180,
    alignItems: "center",
    alignContent: "center",

    // backgroundColor: colors.green,

    justifyContent: "space-between",
  },
  logo: {
    width: "100%",
    height: "60%",
    alignSelf: "center",
    alignContent: "center",
    marginBottom: 14,
  },
});

export default styles;

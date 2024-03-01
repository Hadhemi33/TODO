import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  item: {
    fontSize: 16,
    color: colors.white,
    fontWeight: "bold",
    padding: 4,
    alignContent: "center",
    // paddingHorizontal: 20,
    alignItems: "center",
    textTransform: "capitalize",
    alignSelf: "center",
    justifyContent: "space-between",
  },
  // selectedItem: {
  //   color: colors.white,
  // },
  itemContainer: {
    // flex: 1,
    height: 40,
    width: 90,
    marginRight: 8,
    padding: 4,

    alignSelf: "center",
    // justifyContent: "space-between",
    borderRadius: 20,
    // backgroundColor: colors.white,
  },
  // selectedItemContainer: {
  //   backgroundColor: colors.green,
  //   borderRadius: 10,
  // },
});

export default styles;

import React from "react";
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import styles from "./styles";
import colors from "../../constants/colors";

const Card = ({ title, style, image, servings, onPress }) => {
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={onPress} style={styles.kbir}>
        <View style={styles.HeaderCard}>
          <View style={styles.TitreCard}>
            <Image source={require("../../../assets/taskCircle.png")}></Image>
            <Text style={styles.Title}>{title}</Text>
          </View>
          <Image
            style={styles.isChecked}
            source={require("../../../assets/checked.png")}
          ></Image>
        </View>
        <View style={styles.BodyCard}>
          <Text style={styles.BodyText}>This is the body of the card</Text>
        </View>
        <View style={styles.FooterCard}>
          <Image source={require("../../../assets/edit.png")}></Image>
          <Image source={require("../../../assets/delete.png")}></Image>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Card;

import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import styles from "./styles";
const Button = ({ title, image, onPress, bac }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { backgroundColor: bac }]}
    >
      <Text style={styles.text}>{title}</Text>
      <Image source={image} style={styles.icon} />
    </TouchableOpacity>
  );
};

export default React.memo(Button);

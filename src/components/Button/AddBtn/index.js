import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import styles from "./styles";
const AddBtn = ({ title, image, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Image source={image} style={styles.icon} />
    </TouchableOpacity>
  );
};

export default React.memo(AddBtn);

import React, { useState } from "react";
import { View, SafeAreaView, Image, Text } from "react-native";
import styles from "./styles";
const All = "All";

import Input from "../../components/Input";
import { FlatList } from "react-native-gesture-handler";
import Card from "../../components/Card";
import AddBtn from "../../components/Button/AddBtn";
import Button from "../../components/Button";
import colors from "../../constants/colors";

const Edit = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState(All);
  const [data, setdata] = useState([]);

  return (
    <SafeAreaView>
      <View style={styles.kbir}>
        <View style={styles.TitreCard}>
          <Image source={require("../../../assets/taskCircle.png")}></Image>
          <Text style={styles.Title}>Task 1</Text>
        </View>

        <View style={styles.BodyCard}>
          <Text style={styles.BodyText}>This is the body of the card</Text>
        </View>
      </View>
      <View style={styles.FooterCard}>
        <Button
          title="Save"
          image={require("../../../assets/arrowRight.png")}
          bac={colors.yellow}
          onPress={() => navigation.navigate("Home")}
        ></Button>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Edit);

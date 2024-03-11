import React, { useState } from "react";
import { View, SafeAreaView, Image, Text, TextInput } from "react-native";
import styles from "./styles";
const All = "All";

import Input from "../../components/Input";
import { FlatList } from "react-native-gesture-handler";
import Card from "../../components/Card";
import AddBtn from "../../components/Button/AddBtn";
import Button from "../../components/Button";
import colors from "../../constants/colors";

const Create = ({ navigation, route, desc }) => {
  const { item } = route?.params || {};

  // const id = item?.id;

  const [InputState, setInputState] = useState({
    desc: "",
  });
  const handleChange = (value) => {
    setInputState({ ...InputState, desc: value });
  };
  console.log(InputState);
  return (
    <SafeAreaView>
      <View style={styles.kbir}>
        <View style={styles.TitreCard}>
          <Image source={require("../../../assets/taskCircle.png")}></Image>
          <Text style={styles.Title}>New Task</Text>
        </View>

        <View style={styles.BodyCard}>
          <TextInput
            placeholder="Enter your task"
            onChangeText={handleChange}
            value={InputState.desc}
            multiline={true}
            style={styles.BodyText}
          >
            {item}
          </TextInput>
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

export default React.memo(Create);

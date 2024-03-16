import React, { useState } from "react";
import { View, SafeAreaView, Image, Text, TextInput } from "react-native";
import styles from "./styles";

import Button from "../../components/Button";
import colors from "../../constants/colors";
import { useMutation, useQuery, gql } from "@apollo/client";
export const TASKS_QUERY = gql`
  query Query {
    getTasks {
      id
      desc
      checked
    }
  }
`;
const Create_Task = gql`
  mutation CreateTask($createUserData: CreateTaskInput!) {
    createTask(createUserData: $createUserData) {
      id
      desc
      checked
    }
  }
`;
const Create = ({ navigation, route, onPress }) => {
  const { data, loading, error } = useQuery(TASKS_QUERY);

  const { item } = route?.params || {};

  const [InputState, setInputState] = useState({
    desc: "",
    checked: false,
  });
  const handleChange = (value) => {
    setInputState({ ...InputState, desc: value });
  };
  const handleChangeCheck = (value) => {
    setInputState({ ...InputState, checked: value });
  };
  const [createTask] = useMutation(Create_Task, {
    refetchQueries: [{ query: TASKS_QUERY }],
  });
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
          <TextInput
            placeholder="Enter your check"
            onChangeText={handleChangeCheck}
            value={InputState.checked.toString()}
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
          onPress={() => {
            createTask({
              variables: {
                createUserData: {
                  desc: InputState.desc,
                  checked: InputState.checked,
                },
              },
            });
            navigation.navigate("Home");
          }}
        ></Button>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Create);

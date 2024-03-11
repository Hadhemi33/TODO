import React from "react";
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import styles from "./styles";
import colors from "../../constants/colors";
import { gql } from "apollo-boost";
import { useMutation, useQuery } from "@apollo/client";

export const TASKS_QUERY = gql`
  query Query {
    getTasks {
      id
      desc
      checked
    }
  }
`;
const DELETE_TODO = gql`
  mutation DeleteTask($id: Float!) {
    deleteTask(id: $id) {
      id
      desc
      checked
    }
  }
`;
const Card = ({ id, image, onPress, navigation, item, desc }) => {
  const { data, loading, error } = useQuery(TASKS_QUERY);

  // const [deleteTask] = useMutation(DELETE_TODO, {
  //   update(cache, { data: { deleteTask } }) {
  //     // Update the cache to remove the deleted task
  //     cache.modify({
  //       fields: {
  //         getTasks(existingTasks = []) {
  //           return existingTasks.filter((task) => task.id !== deleteTask.id);
  //         },
  //       },
  //     });
  //   },
  // });
  const [deleteTask] = useMutation(DELETE_TODO, {
    refetchQueries: [{ query: TASKS_QUERY }],
  });
  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTask({ variables: { id: taskId } });
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };
  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.infoText}>Loading...</Text>
      </View>
    );
  }

  if (error) {
    console.log(JSON.stringify(data));

    return (
      <View style={styles.container}>
        <Text style={[styles.infoText, styles.errorText]}>
          Error: {error.message}
        </Text>
      </View>
    );
  } else {
    console.log(JSON.stringify(data.getTasks[0].id));
  }

  return (
    <FlatList
      data={data.getTasks}
      renderItem={({ item }) => (
        <View style={styles.kbir}>
          <View style={styles.HeaderCard}>
            <View style={styles.TitreCard}>
              <Image source={require("../../../assets/taskCircle.png")}></Image>

              <Text onPress={onPress}> Task {item.id}</Text>
            </View>
            <TouchableOpacity>
              {item.checked == true ? (
                <>
                  <Image
                    style={styles.isChecked}
                    source={require("../../../assets/checked.png")}
                  ></Image>
                </>
              ) : (
                <Image
                  style={styles.isChecked}
                  source={require("../../../assets/notChecked.png")}
                ></Image>
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.BodyCard}>
            <Text style={styles.BodyText}>{item.desc}</Text>
          </View>
          <View style={styles.FooterCard}>
            <TouchableOpacity>
              <Image source={require("../../../assets/edit.png")}></Image>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                handleDeleteTask(item.id);
              }}
            >
              <Image source={require("../../../assets/delete.png")}></Image>
            </TouchableOpacity>
          </View>
        </View>
      )}
    />
  );
};

export default Card;

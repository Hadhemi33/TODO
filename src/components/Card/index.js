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
import { useQuery } from "@apollo/client";

export const TASKS_QUERY = gql`
  query Query {
    getTasks {
      id
      desc
    }
    deleteTask {
      id
    }
  }
`;
const Card = ({ id, image, onPress, navigation, item, desc }) => {
  const { data, loading, error } = useQuery(TASKS_QUERY);

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
              {/* {data.getTasks.map((task) => ( */}
              <Text onPress={onPress}> Task {item.id}</Text>
              {/* ))} */}
              {/* <Text onPress={onPress} style={styles.Title}> */}
              {/* {title}
            </Text> */}
            </View>
            <TouchableOpacity>
              <Image
                style={styles.isChecked}
                source={require("../../../assets/checked.png")}
              ></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.BodyCard}>
            <Text style={styles.BodyText}>{item.desc}</Text>
          </View>
          <View style={styles.FooterCard}>
            <TouchableOpacity>
              <Image source={require("../../../assets/edit.png")}></Image>
            </TouchableOpacity>

            <TouchableOpacity>
              <Image source={require("../../../assets/delete.png")}></Image>
            </TouchableOpacity>
          </View>
        </View>
      )}
    />
  );
};

export default Card;

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
import { useQuery, gql } from "@apollo/client";
const GET_TASKS = gql`
  query {
    getTasks {
      id
      desc
      checked
    }
  }
`;
const Card = ({ title, desc, image, onPress }) => {
  const { loading, error, data } = useQuery(GET_TASKS);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <SafeAreaView>
      <View style={styles.kbir}>
        <View style={styles.HeaderCard}>
          <View style={styles.TitreCard}>
            <Image source={require("../../../assets/taskCircle.png")}></Image>
            {data.getTasks.map((task) => (
              <Text key={task.id}>{task.desc}</Text>
            ))}
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
          <Text style={styles.BodyText}>{desc}</Text>
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
    </SafeAreaView>
  );
};

export default Card;

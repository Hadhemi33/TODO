import React, { useEffect, useState } from "react";
import { View, SafeAreaView, StyleSheet, Text } from "react-native";
import Categories from "../../components/Categories";
import axios from "axios";
import categories from "./categories.json";
import Input from "../../components/Input";
import { FlatList } from "react-native-gesture-handler";
import Card from "../../components/Card";
import AddBtn from "../../components/Button/AddBtn";
import { gql, useQuery } from "@apollo/client";
import styles from "./styles";

const All = "All";
const TASKS_QUERY = gql`
  query Query {
    getTasks {
      id
      desc
    }
  }
`;

// # query allFilms {
// #   allFilms {
// #     films {
// #       title
// #       director
// #       releaseDate
// #       speciesConnection {
// #         species {
// #           name
// #           classification
// #           homeworld {
// #             name
// #           }
// #         }
// #       }
// #     }
// #   }
// # }
const Home = ({ navigation, title, onPress, item }) => {
  const [selectedCategory, setSelectedCategory] = useState(All);
  // const { data, loading, error } = useQuery(TASKS_QUERY);
  // if (loading) {
  //   return (
  //     <View style={styles.container}>
  //       <Text style={styles.infoText}>Loading...</Text>
  //     </View>
  //   );
  // }

  // if (error) {
  //   console.log(JSON.stringify(data));

  //   return (
  //     <View style={styles.container}>
  //       <Text style={[styles.infoText, styles.errorText]}>
  //         Error: {error.message}
  //       </Text>
  //     </View>
  //   );
  // } else {
  //   console.log(JSON.stringify(data.getTasks[0].id));
  // }

  return (
    <>
      {/* <TasksComponent /> */}
      <SafeAreaView style={styles.container}>
        <View style={styles.row}>
          <Input placeholder="   Search ... " style={styles.InputTex}></Input>
          <AddBtn image={require("../../../assets/add.png")}>Add</AddBtn>
        </View>
        <Categories
          selectedCategory={selectedCategory}
          onCategoryPress={setSelectedCategory}
          categories={[All, ...categories]}
        />
        <Card onPress={() => navigation.navigate("Edit", [item])} />
        {/* <FlatList
          // data={tasks}
          data={Card}
          renderItem={({ item, index }) => (
            <Card
              // {...(checked ? image={
              //   require("../../../assets/checked.png")
              // } : image={
              //   require("../../../assets/notChecked.png")
              // })}
              // title={`Task:${item.id}`}
              // desc={item.desc}
            />
          )}
          // keyExtractor={(item) => item}
          keyExtractor={(item) => item.id}
        /> */}
      </SafeAreaView>
    </>
  );
};

export default React.memo(Home);

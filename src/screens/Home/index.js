import React, { useEffect, useState } from "react";
import { View, SafeAreaView } from "react-native";
import styles from "./styles";
import Categories from "../../components/Categories";
import axios from "axios";
import categories from "./categories.json";
import Input from "../../components/Input";
import { FlatList } from "react-native-gesture-handler";
import Card from "../../components/Card";
import AddBtn from "../../components/Button/AddBtn";
import TasksComponent from "../../components/TaskComponent";
const All = "All";

const Home = ({ navigation, title }) => {
  const [selectedCategory, setSelectedCategory] = useState(All);
  const [checked, setChecked] = useState([]);
  const [tasks, setTasks] = useState([]);

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
        <FlatList
          // data={tasks}
          data={Card}
          renderItem={({ item }) => (
            <Card
              // {...(checked ? image={
              //   require("../../../assets/checked.png")
              // } : image={
              //   require("../../../assets/notChecked.png")
              // })}
              onPress={() => navigation.navigate("Edit")}
              title={`Task: `}
              desc={item}
            />
          )}
          // keyExtractor={(item) => item}
          keyExtractor={(item) => item}
        />
        {/* <View>
          <Card onPress={() => navigation.navigate("Edit")} />
        </View> */}
      </SafeAreaView>
    </>
  );
};

export default React.memo(Home);

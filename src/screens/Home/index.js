import React, { useState } from "react";
import { View, SafeAreaView } from "react-native";
import Categories from "../../components/Categories";

import categories from "./categories.json";
import Input from "../../components/Input";

import Card from "../../components/Card";
import AddBtn from "../../components/Button/AddBtn";

import styles from "./styles";

const All = "All";

const Home = ({ navigation, title, onPress, item }) => {
  const [selectedCategory, setSelectedCategory] = useState(All);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.row}>
          <Input placeholder="   Search ... " style={styles.InputTex}></Input>
          <AddBtn
            onPress={() => navigation.navigate("Create")}
            image={require("../../../assets/add.png")}
          >
            Add
          </AddBtn>
        </View>
        <Categories
          selectedCategory={selectedCategory}
          onCategoryPress={setSelectedCategory}
          categories={[All, ...categories]}
        />
        <Card style={styles.card} />
      </SafeAreaView>
    </>
  );
};

export default React.memo(Home);

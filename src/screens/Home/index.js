import React, { useState } from "react";
import { View, SafeAreaView } from "react-native";
import styles from "./styles";
import Categories from "../../components/Categories";
const All = "All";
import categories from "./categories.json";
import Input from "../../components/Input";
import { FlatList } from "react-native-gesture-handler";
import Card from "../../components/Card";
import AddBtn from "../../components/Button/AddBtn";
import colors from "../../constants/colors";
const Home = ({ navigation, title }) => {
  const [selectedCategory, setSelectedCategory] = useState(All);
  const [checked, setChecked] = useState([]);

  return (
    <>
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
          data={Card}
          renderItem={({ item }) => (
            <Card
              // {...(checked ? image={
              //   require("../../../assets/checked.png")
              // } : image={
              //   require("../../../assets/notChecked.png")
              // })}
              onPress={() => navigation.navigate("Edit")}
              title={item}
            />
          )}
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

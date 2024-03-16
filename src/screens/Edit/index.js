import React from "react";
import { View, SafeAreaView, Image, Text } from "react-native";
import styles from "./styles";
import Button from "../../components/Button";
import colors from "../../constants/colors";

const Edit = ({ navigation, route }) => {
  const { item } = route?.params || {};
  console.log(route?.params);

  return (
    <SafeAreaView>
      <View style={styles.kbir}>
        <View style={styles.TitreCard}>
          <Image source={require("../../../assets/taskCircle.png")} />
          <Text style={styles.Title}>{item ? item.id : ""}</Text>
        </View>

        <View style={styles.BodyCard}>
          <Text style={styles.BodyText}>{item ? item.id : ""}</Text>
        </View>
      </View>
      <View style={styles.FooterCard}>
        <Button
          title="Save"
          image={require("../../../assets/arrowRight.png")}
          bac={colors.yellow}
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Edit);

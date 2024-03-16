import React from "react";
import { Image, SafeAreaView } from "react-native";
import styles from "./styles";
import Button from "../../components/Button";
import colors from "../../constants/colors";
const Splash = ({ navigation }) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Image
          source={require("../../../assets/logo.png")}
          style={styles.logo}
        />
        <Button
          title="Let's start"
          bac={colors.purple}
          image={require("../../../assets/arrowRight.png")}
          onPress={() => navigation.navigate("Home")}
        ></Button>
      </SafeAreaView>
    </>
  );
};

export default React.memo(Splash);

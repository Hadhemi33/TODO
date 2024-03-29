import "react-native-gesture-handler";

import React from "react";
import Splach from "./src/screens/Splach";
import Home from "./src/screens/Home";
import Edit from "./src/screens/Edit";

import Create from "./src/screens/Create";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ApolloProvider } from "@apollo/client";
import client from "./src/apollo";
const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#ffffff",
  },
};

export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <ApolloProvider client={client}>
        <Stack.Navigator
          screenOptions={{
            headerTitleAlign: "center",
            headerShadowVisible: false,
          }}
        >
          <Stack.Screen
            name="Splash"
            component={Splach}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Edit"
            component={Edit}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Create"
            component={Create}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </ApolloProvider>
    </NavigationContainer>
  );
}

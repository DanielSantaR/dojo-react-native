import React from "react";
import { View, Text } from "react-native";

export const HelloWorldScreen = () => {
  return (
    <View
      style={{ flex: 1, backgroundColor: "green", justifyContent: "center" }}
    >
      <Text style={{ fontSize: 40, textAlign: "center" }}>Hola mundo</Text>
    </View>
  );
};

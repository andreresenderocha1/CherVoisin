import React from "react";
import { Text, StyleSheet } from "react-native";

export const LoginScreen = () => <Text style={styles.text}>Login</Text>;

const styles = StyleSheet.create({
  text: {
    paddingTop: 60,
    fontSize: 30,
    textAlign: "center",
  },
});

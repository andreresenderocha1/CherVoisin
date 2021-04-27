import React from "react";
import { Text, StyleSheet } from "react-native";

export const MoreScreen = () => (
  <Text style={styles.text}>Andre Resende Rocha</Text>
);

const styles = StyleSheet.create({
  text: {
    paddingTop: 60,
    fontSize: 30,
    textAlign: "center",
  },
});

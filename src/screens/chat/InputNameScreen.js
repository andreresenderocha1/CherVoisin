import React from "react";
import { Text, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";

import { TIME_STAMP } from "../../../FirebaseApp";
import firebase from "firebase";

export const InputNameScreen = ({ navigation }) => {
  const [name, setName] = React.useState("Andre");

  const [id, setId] = React.useState();

  /* const parseMessage = (doc) => {
    const { timestamp: numberStamp, text, user } = doc.data();
    const { key: _id } = doc;
  }; */

  const getTimestamp = () => {
    return TIME_STAMP;
  };

  return (
    <>
      <Text style={styles.text}>Name</Text>
      <TextInput
        mode="outlined"
        value={name}
        onChangeText={(text) => setName(text)}
      ></TextInput>
      <Button onPress={() => navigation.navigate("Chat", { name: name })}>
        GO
      </Button>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    paddingTop: 60,
    fontSize: 30,
    textAlign: "center",
  },
});

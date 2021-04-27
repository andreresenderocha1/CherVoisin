import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { EventsRef } from "../../../FirebaseApp";
import ScannerModal from "../../components/scanner/ScannerModal";
import { EventsContext } from "../../services/events/events.context";

export const EventsScreen = () => {
  const eventContext = React.useContext(EventsContext);

  const [eventName, setEventName] = React.useState("");
  const [date, setDate] = React.useState("");
  const [hour, setHour] = React.useState("");

  const saveEvent = () => {
    EventsRef.add({
      name: eventName,
    });
    eventContext.addEvent({ name: eventName });
    /* console.log(eventName); */
  };

  return (
    <SafeAreaView>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          mode="outlined"
          lable="Event"
          value={eventName}
          onChangeText={(text) => setEventName(text)}
          placeholder="Event name"
        />
        <TextInput
          style={styles.input}
          mode="outlined"
          lable="Date"
          value={date}
          placeholder="Date"
          disabled={true}
        />
        <TextInput
          style={styles.input}
          mode="outlined"
          lable="Hour"
          value={hour}
          placeholder="Time"
          disabled={true}
        />
      </View>
      <View style={styles.saveButtonContainer}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 100,
    padding: 29,
  },
  input: {
    marginBottom: 10,
  },
  saveButtonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: 50,
  },
  saveButton: {
    width: "30%",
  },
});

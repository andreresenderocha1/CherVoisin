import React from "react";
import { Text, StyleSheet } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import { MessagesRef } from "../../../FirebaseApp";
import moment from "moment";

export const ChatScreen = ({ route }) => {
  const [messages, setMessages] = React.useState([]);

  const { name } = route.params;

  React.useEffect(() => {
    MessagesRef.onSnapshot((querySnapshot) => {
      querySnapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          console.log(change.doc.data());
          setMessages((messages) => [...messages, change.doc.data()]);
        }
      });
    });
  }, []);

  const sendMessage = (message) => {
    MessagesRef.add(message).then(() => {});
  };

  const montMessage = (messages) => {
    messages.forEach((message) => {
      const { _id, text, createdAt } = message;
      const messageToSend = {
        _id,
        text,
        createdAt: new Date().getTime(),
        user: {
          _id: name,
          name: name,
        },
      };
      sendMessage(messageToSend);
    });
  };
  return (
    <>
      <GiftedChat
        inverted={false}
        messages={messages}
        onSend={(text) => montMessage(text)}
        user={{
          _id: name,
          name: name,
        }}
      ></GiftedChat>
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

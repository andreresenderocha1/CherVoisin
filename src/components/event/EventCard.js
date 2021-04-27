import React from "react";
import { StyleSheet } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

const LeftContent = (props) => <Avatar.Icon {...props} icon="play" />;

export const EventCard = ({ event }) => {
  return (
    <Card style={{ marginBottom: 15, paddingTop: 16 }}>
      <Card.Title style={styles.cardTitle} title="Event" left={LeftContent} />
      <Card.Content>
        <Title>{event.name}</Title>
        <Paragraph>02/07/2021 18:00</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button>Join</Button>
        <Button>Decline</Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardTitle: {},
});

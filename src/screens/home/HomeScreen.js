import React from "react";
import { SafeAreaView, StyleSheet, Text, View, FlatList } from "react-native";
import { EventCard } from "../../components/event/EventCard";
import { EventsContext } from "../../services/events/events.context";
import { eventsRequest } from "../../services/events/events.service";
import ScannerModal from "../../components/scanner/ScannerModal";
import { NeighborsScreen } from "../neighbors/NeighborsScreen";
import { InputNameScreen } from "../chat/InputNameScreen";

export const HomeScreen = () => {
  const eventsContext = React.useContext(EventsContext);
  const [showNeighbors, setShowNeighbors] = React.useState(false);
  const [data, setData] = React.useState();

  const showNeighborsFunc = (data) => {
    setShowNeighbors(true);
    setData(data);
  };

  return (
    <>
      <InputNameScreen></InputNameScreen>
      {/* <ScannerModal
        showNeighbors={(data) => showNeighborsFunc(data)}
      ></ScannerModal>
      {showNeighbors ? <NeighborsScreen data={data}></NeighborsScreen> : null} */}
    </>
    /*  <SafeAreaView style={{ marginTop: 200 }}>
      <View style={styles.scanner}>
        
      </View>
      <View>
        <FlatList
          data={eventsContext.events}
          renderItem={({ item }) => <EventCard event={item} />}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{ padding: 16 }}
        />
      </View>
    </SafeAreaView> */
  );
};

const styles = StyleSheet.create({
  scanner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

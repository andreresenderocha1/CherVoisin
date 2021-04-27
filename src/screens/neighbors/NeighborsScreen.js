import React from "react";
import { Text, StyleSheet, FlatList } from "react-native";
import { StreetsRef } from "../../../FirebaseApp";

export const NeighborsScreen = ({ data }) => {
  const [neighborsArray, setNeighborsArray] = React.useState([]);

  React.useEffect(() => {
    const query = StreetsRef.where("address", "==", data)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          StreetsRef.add({ address: data });
        } else {
          querySnapshot.forEach((doc) => {
            var street = doc.data().address;
            StreetsRef.doc(doc.id)
              .collection("users")
              .get()
              .then((querySnapshot2) => {
                querySnapshot2.forEach((doc) => {
                  setNeighborsArray((neighborsArray) => [
                    ...neighborsArray,
                    doc.data(),
                  ]);
                });
              });
          });
        }
      });
  }, []);

  return (
    <>
      <Text style={styles.text}>Neighbors Screen</Text>
      {console.log(neighborsArray)}
      <FlatList
        data={neighborsArray}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
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

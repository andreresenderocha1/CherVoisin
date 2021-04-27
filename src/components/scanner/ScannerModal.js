import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, Modal, View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import Scanner from "./Scanner";

export default function ScannerModal({ showNeighbors }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [type, setType] = useState("");
  const [data, setData] = useState("");

  const onCodeScanned = (type, data) => {
    setType(type);
    setData(data);
    setModalVisible(false);
    showNeighbors(data);
  };

  return (
    <>
      <View style={styles.container}>
        <Modal
          visible={modalVisible}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modal}>
            <Scanner onCodeScanned={onCodeScanned}></Scanner>
            <Button
              title="Cancelar"
              onPress={() => setModalVisible(false)}
            ></Button>
          </View>
        </Modal>
        <StatusBar style="auto"></StatusBar>
        <Text style={{ marginBottom: 100 }}>Street: {data}</Text>
      </View>
      <View>
        <Button
          style={{ width: 150 }}
          onPress={() => setModalVisible(true)}
          mode="contained"
        >
          Scan QR Code
        </Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "lightgrey",
  },
});

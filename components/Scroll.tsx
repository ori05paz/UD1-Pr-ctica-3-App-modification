import { ScrollView, Text, StyleSheet } from "react-native";
import React from "react";
import { scrolls } from "../data/Scrolls";

export const Scroll = () => {
  return (
    <ScrollView style={styles.scrollContainer}>
      {scrolls.map((item, index) => (
        <Text key={index} style={styles.itemText}>
          {item}
        </Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 10,
  },
  itemText: {
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "dashed",
    padding: 20,
    color: "darkred",
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    backgroundColor: "silver",
    marginVertical: 5,
  },
});
 
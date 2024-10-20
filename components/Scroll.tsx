import { ScrollView, Text, StyleSheet } from "react-native";
import React from "react";
import { scrolls } from "../data/Scrolls";
import { COLORS } from "../styles/Colors";

type ScrollProps = {
  theme: "light" | "dark";
};

export const Scroll = ({ theme }: ScrollProps) => {
  const currentColors = theme === "dark" ? COLORS.dark : COLORS.light;

  return (
    <ScrollView style={styles.scrollContainer}>
      {scrolls.map((item, index) => (
        <Text key={index} style={[styles.itemText, { color: currentColors.text, backgroundColor: currentColors.cardBackground }]}>
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
    borderColor: COLORS.light.border,
    borderWidth: 1,
    borderStyle: "dashed",
    padding: 20,
    color: COLORS.light.text,
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    backgroundColor: COLORS.light.cardBackground,
    marginVertical: 5,
  },
});

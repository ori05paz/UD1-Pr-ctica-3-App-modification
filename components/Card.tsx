import { View, Text, Image, StyleSheet, ViewStyle } from "react-native";
import React from "react";
import { COLORS } from "../styles/Colors";

export type CardProps = {
  title: string;
  body: string;
  imgSource: any;
  customStyles?: ViewStyle;
};

export const Card = ({ title, body, imgSource, customStyles = {} }: CardProps) => {
  return (
    <View style={[styles.cardContainer, customStyles]}>
      <View style={styles.row}>
        <Image
          style={styles.avatar}
          source={require("../assets/IMG_20210507_142709_305.jpg")}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.body}>{body}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    margin: 10,
    backgroundColor: COLORS.light.cardBackground,
    padding: 10,
    borderRadius: 10,
    width: "90%",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 100,
  },
  textContainer: {
    marginLeft: 10,
    width: "70%",
  },
  title: {
    fontWeight: "700",
    fontSize: 20,
    marginBottom: 5,
    color: COLORS.light.text,
  },
  body: {
    color: COLORS.light.text,
  },
});

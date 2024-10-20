import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export type CardProps = {
  title: string;
  body: string;
  imgSource: any;
};

export const Card = ({ title, body, imgSource }: CardProps) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.row}>
        <Image style={styles.avatar} source={imgSource} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text>{body}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    width: "90%",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
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
  },
});
 
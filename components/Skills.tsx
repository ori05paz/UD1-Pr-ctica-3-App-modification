import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import { skills } from "../data/Skills";

export const Skills = () => {

  return (
    <ScrollView style={styles.skillsContainer}>
      <Text style={styles.skillsTitle}>Mis Habilidades:</Text>
      {skills.map((skill, index) => (
        <Text key={index} style={styles.skill}>
          {skill}
        </Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  skillsContainer: {
    marginTop: 20,
  },
  skillsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  skill: {
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

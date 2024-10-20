import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import { skills } from "../data/Skills";
import { COLORS } from "../styles/Colors";

type SkillsProps = {
  theme: "light" | "dark";
};

export const Skills = ({ theme }: SkillsProps) => {
  const currentColors = theme === "dark" ? COLORS.dark : COLORS.light;
  return (
    <ScrollView style={styles.skillsContainer}>
      <Text style={[styles.skillsTitle, { color: currentColors.text }]}>
        Mis Habilidades:
      </Text>
      {skills.map((skill, index) => (
        <Text key={index} style={[styles.skill, { color: currentColors.text, backgroundColor: currentColors.cardBackground }]}>
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
    borderColor: COLORS.light.border,
    borderWidth: 1,
    borderStyle: "dashed",
    padding: 20,
    color: "darkred",
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    backgroundColor: COLORS.light.cardBackground,
    marginVertical: 5,
  },
});

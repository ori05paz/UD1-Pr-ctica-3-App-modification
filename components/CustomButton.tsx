import { Pressable, Text, StyleSheet, ViewStyle } from "react-native";
import React from "react";

type CustomButtonProps = {
  onPress: () => void;    
  title: string;          
  customStyles?: ViewStyle; 
};

export const CustomButton = ({ onPress, title, customStyles = {} }: CustomButtonProps) => {
  return (
    <Pressable style={[styles.button, customStyles]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#ff7f50",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});
 
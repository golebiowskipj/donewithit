import React from "react";
import { Text, StyleSheet } from "react-native";
import defaultStyles from "../config/styles";

const AppText = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: defaultStyles.text,
});

export default AppText;

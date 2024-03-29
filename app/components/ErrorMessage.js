import React from "react";
import { StyleSheet } from "react-native";

import AppText from "./AppText";

const ErrorMessage = ({ error, isVisible }) => {
  if (!error || !isVisible) {
    return null;
  }

  return <AppText style={styles.error}>{error}</AppText>;
};

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});

export default ErrorMessage;

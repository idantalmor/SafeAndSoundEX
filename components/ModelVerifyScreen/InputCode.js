import { StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

function InputCode(props) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        maxLength={1}
        secureTextEntry={true}
      />
    </View>
  );
}
export default InputCode;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  input: {
    backgroundColor: "white",
    padding: 6,
    borderRadius: 6,
    fontSize: 30,
    width: 40,
  },
});

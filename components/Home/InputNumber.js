import { StyleSheet, Text, TextInput, View } from "react-native";
import { GlobalStyles } from "../../constans/style";
import {useState} from 'react'

function InputNumber(props) {
  const [number, setNumber] = useState("");
  const inputStyles = [styles.input];
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>מספר</Text>
      <TextInput
        style={inputStyles}
        keyboardType="number-pad"
        maxLength={9}
        onChangeText={updateNumber}
        value={number}
      />
    </View>
  );
}
export default InputNumber;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: "black",
    marginBottom: 4,
  },
  input: {
    backgroundColor: "white",
    color: GlobalStyles.colors.primary700,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    width: 150,
  },
});

import { StyleSheet, Text, TextInput, View, Picker } from "react-native";
import { GlobalStyles } from "../../constans/style";
import { useState } from "react";

function InputArea(props) {
  const [selectedArea, setSelectedArea] = useState("+972");
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>קידומת</Text>
      <Picker
        selectedValue={selectedArea}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedArea(itemValue)}
      >
        <Picker.Item label="+972" value="+972" />
        <Picker.Item label="+970" value="+970" />
        <Picker.Item label="+974" value="+974" />
      </Picker>
    </View>
  );
}
export default InputArea;

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
  picker: {
    height: 50,
    width: 100,
  },
});

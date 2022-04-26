import { Pressable, StyleSheet } from "react-native";
import { Text ,View } from "react-native";

function SendMyVerify({onPress}) {
  return (
      <View>
          <Pressable onPress={onPress}>
          <Text style={styles.text}>שלחו לי קוד אימות</Text>
          </Pressable>
      </View>
  )
}
export default SendMyVerify;
const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    color: "blue",
  },
});

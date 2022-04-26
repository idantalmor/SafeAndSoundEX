import { StyleSheet, Text, View, Pressable, Button } from "react-native";
import {useNavigation} from '@react-navigation/native'

function VerifyButton(props) {
  const navigation = useNavigation();
    function pressHandler(){
        console.log(props.code)
        console.log(props.phoneNumber)
        navigation.navigate("Home");
        
    }
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={pressHandler}
        android_ripple= {{color: '#640233'}}
      >
        <Text style={styles.buttonText}>אישור</Text>
      </Pressable>
    </View>
  );
}
export default VerifyButton;

const styles = StyleSheet.create({
  buttonInnerContainer: {
    backgroundColor: '#4291F0',
    paddingVertical: 15,
    paddingHorizontal: 100,
    elevation: 2,
  },
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: 'bold'
  },
  pressed: {
    opacity: 0.75,
  },
});

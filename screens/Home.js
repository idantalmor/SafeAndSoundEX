import { View, Text, StyleSheet,Image } from "react-native";

function Home() {
  return (
    <View style={styles.inputScreen}>
      <Image style={styles.image} source={require("../assets/logo.png")} />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  inputScreen: {
      flex:1,
    backgroundColor: "#133864",
    alignItems: 'center'
  },
  image: {
    height: 150,
    width: 150,
    marginVertical: 80
  }
});

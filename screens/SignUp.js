import { View, Text, StyleSheet, Image, TextInput, Picker } from "react-native";
import Border from "../components/Home/Border";
import Title from "../components/Home/Title";
import SendMyVerify from "../components/Home/SendMyVerify";
import { useState } from "react";
import VerifyScreen from "../components/ModelVerifyScreen/VerifyScreen";
import { GlobalStyles } from "../constans/style";
import auth from '@react-native-firebase/auth'

function SignUP() {
  const [numberPhone, setNumberPhone] = useState("");
  const [selectedArea, setSelectedArea] = useState("+972");
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [confirm, setConfirm] = useState(null);

  function updateNumber(enteredNumber) {
    setNumberPhone(enteredNumber);
  }

  async function StartVerify() {
    setModalIsVisible(true);
    await signInWithPhoneNumber()
  }
  function onCancelHandler() {
    setModalIsVisible(false);
  }

  async function signInWithPhoneNumber() {
    const confirmation = await auth().signInWithPhoneNumber(selectedArea + numberPhone);
    setConfirm(confirmation);
  }
  

  return (
    <View style={styles.formContainer}>
      <View>
        <Border />
        <View>
          <VerifyScreen visible={modalIsVisible} />
        </View>
      </View>
      <View style={styles.pageContainer}>
        <Image style={styles.image} source={require("../assets/logo.png")} />
        <Title />
        <View style={styles.inputContainer}>
          <View>
            <View style={styles.inputContainerArea}>
              <Text style={styles.labelArea}>קידומת</Text>
              <Picker
                selectedValue={selectedArea}
                style={styles.pickerArea}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedArea(itemValue)
                }
              >
                <Picker.Item label="+972" value="+972" />
                <Picker.Item label="+970" value="+970" />
                <Picker.Item label="+974" value="+974" />
              </Picker>
            </View>
          </View>
          <View>
            <View style={styles.inputContainerNum}>
              <Text style={styles.labelNum}>מספר</Text>
              <TextInput
                style={styles.inputNum}
                keyboardType="number-pad"
                maxLength={9}
                onChangeText={updateNumber}
                value={numberPhone}
              />
            </View>
          </View>
        </View>
        <SendMyVerify onPress={async () => await StartVerify()} />
        <VerifyScreen
          visible={modalIsVisible}
          onBack={onCancelHandler}
          selectedArea={selectedArea}
          phoneNumber={numberPhone}
          confirm={confirm}
        />
      </View>
    </View>
  );
}



export default SignUP;

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
  },
  pageContainer: {
    alignItems: "center",
    backgroundColor: "#E0E8FA",
    flex: 1,
  },
  image: {
    height: 150,
    width: 150,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 24,
  },
  inputContainerNumber: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  inputContainerArea: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  labelArea: {
    fontSize: 12,
    color: "black",
    marginBottom: 4,
  },
  pickerArea: {
    height: 50,
    width: 100,
  },
  inputContainerNum: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  labelNum: {
    fontSize: 12,
    color: "black",
    marginBottom: 4,
  },
  inputNum: {
    backgroundColor: "white",
    color: GlobalStyles.colors.primary700,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    width: 150,
  },
});

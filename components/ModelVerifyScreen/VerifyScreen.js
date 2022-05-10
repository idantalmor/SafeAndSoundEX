import { StyleSheet, View, Text, Modal, TextInput, Button } from "react-native";
import TitleVerify from "./TitleVerifty";
import Border from "../Home/Border";
import VerifyButton from "./VerifyButton";
import { useState } from "react";
import {useNavigation} from '@react-navigation/native';


function VerifyScreen(props) {
  const text = " לא הטלפון שלי   >";
  const [oneDigit, setOneDigit] = useState("");
  const [twoDigit, setTwoDigit] = useState("");
  const [threeDigit, setThreeDigit] = useState("");
  const [fourDigit, setFourDigit] = useState("");
  const [fiveDigit, setFiveDigit] = useState("");
  const [sixDigit, setSixDigit] = useState("");
  const navigation = useNavigation();

  function setDigitOne(digit) {
    setOneDigit(digit);
    setCode();
  }
  function setDigitTwo(digit) {
    setTwoDigit(digit);
    setCode();
  }
  function setDigitThree(digit) {
    setThreeDigit(digit);
    setCode();
  }
  function setDigitFour(digit) {
    setFourDigit(digit);
    setCode();
  }
  function setDigitFive(digit) {
    setFiveDigit(digit);
    setCode();
  }
  function setDigitSix(digit) {
    setSixDigit(digit);
    setCode();
  }

  function setCode() {
    return (
      `${oneDigit}` +
      `${twoDigit}` +
      `${threeDigit}` +
      `${fourDigit}` +
      `${fiveDigit}` +
      `${sixDigit}` +
      ""
    );
  }

  function correctHandler(navigation) {
    navigation.navigate("Home");
  }

  const number = `${props.selectedArea}` + `${props.phoneNumber}`;

  async function confirmCode() {
      await props.confirm.confirm(setCode());
  }

  async function pressHandler(){
    console.log("here")
    try {
      await confirmCode()
      console.log(props.code)
      console.log(props.phoneNumber)
      navigation.navigate("Home");
    } catch (error) {
      console.log('conformation failed')
    }
}

  return (
    
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.rootContainer}>
        <Border />
        <View style={styles.textContainer}>
          <TitleVerify number={number} />
          <Text style={styles.secCode}>קוד אבטחה</Text>
          <View style={styles.listContainer}>
            <View style={styles.inputCodeContainer}>
              <TextInput
                style={styles.inputCode}
                keyboardType="number-pad"
                maxLength={1}
                secureTextEntry={true}
                value={oneDigit}
                onChangeText={setDigitOne}
              />
            </View>
            <View style={styles.inputCodeContainer}>
              <TextInput
                style={styles.inputCode}
                keyboardType="number-pad"
                maxLength={1}
                secureTextEntry={true}
                value={twoDigit}
                onChangeText={setDigitTwo}
              />
            </View>
            <View style={styles.inputCodeContainer}>
              <TextInput
                style={styles.inputCode}
                keyboardType="number-pad"
                maxLength={1}
                secureTextEntry={true}
                value={threeDigit}
                onChangeText={setDigitThree}
              />
            </View>
            <View style={styles.inputCodeContainer}>
              <TextInput
                style={styles.inputCode}
                keyboardType="number-pad"
                maxLength={1}
                secureTextEntry={true}
                value={fourDigit}
                onChangeText={setDigitFour}
              />
            </View>
            <View style={styles.inputCodeContainer}>
              <TextInput
                style={styles.inputCode}
                keyboardType="number-pad"
                maxLength={1}
                secureTextEntry={true}
                value={fiveDigit}
                onChangeText={setDigitFive}
              />
            </View>
            <View style={styles.inputCodeContainer}>
              <TextInput
                style={styles.inputCode}
                keyboardType="number-pad"
                maxLength={1}
                secureTextEntry={true}
                value={sixDigit}
                onChangeText={setDigitSix}
              />
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Text style={styles.notMyPhone} onPress={props.onBack}>
              {text}
            </Text>
            <Button title="התחבר" onPress={async () => await pressHandler()}/>
            {/* <VerifyButton
              code={setCode()}
              phoneNumber={number}
            /> */}
          </View>
        </View>
      </View>
    </Modal>
  );
}


function PhoneSignIn() {
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);

  const [code, setCode] = useState('');

  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
    }
  }

  if (!confirm) {
    return (
      <Button
        title="Phone Number Sign In"
        onPress={() => signInWithPhoneNumber('+1 650-555-3434')}
      />
    );
  }

  return (
    <>
      <TextInput value={code} onChangeText={text => setCode(text)} />
      <Button title="Confirm Code" onPress={() => confirmCode()} />
    </>
  );
}

export default VerifyScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#E0E8FA",
  },
  textContainer: {
    marginEnd: 20,
    marginVertical: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  secCode: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 20,
  },
  buttonContainer: {
    marginVertical: 20,
  },
  notMyPhone: {
    color: "blue",
    marginRight: 200,
  },
  listContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  inputCodeContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  inputCode: {
    backgroundColor: "white",
    padding: 6,
    borderRadius: 6,
    fontSize: 30,
    width: 40,
  },
});

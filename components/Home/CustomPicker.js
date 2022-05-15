import React, { useState } from "react";
import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {ModalPicker} from './ModalPicker'

function CustomPicker(props) {
  const [chooseData, setChooseData] = useState("בחר קידומת");
  const [isModalVisible, setIsModalVisible] = useState(false)

  const changeModalVisibility= (bool) => {
    setIsModalVisible(bool)
  } 

  const setData = (option) =>{
      setChooseData(option)
      props.updateArea(option)

  }
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.touchableOpacity} onPress={()=> changeModalVisibility(true)}>
        <Text style={styles.text}>{chooseData}</Text>
      </TouchableOpacity>
      <Modal
          transparent={true}
          animationType='fade'
          visible={isModalVisible}
          nRequestClose={() => changeModalVisibility(false)}
      
      >
          <ModalPicker
          changeModalVisibility={changeModalVisibility}
          setData={setData}
          />
      </Modal>
    </SafeAreaView>
  );
}

export default CustomPicker;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  text:{
      marginVertical: 20,
      fontSize: 25,

  },
  touchableOpacity: {
      alignSelf: 'stretch',
      paddingHorizontal:20
  },
});


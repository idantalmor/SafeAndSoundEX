import { StyleSheet, View } from "react-native"
import InputCode from "./InputCode"
import {useState} from 'react'

function InputList(){
    const [oneDigit, setOneDigit] = useState('');
    const [twoDigit, setTwoDigit] = useState('');
    const [threeDigit, setThreeDigit] = useState('');
    const [fourDigit, setFourDigit] = useState('');
    const [fiveDigit, setFiveDigit] = useState('');
    const [sixDigit, setSixDigit] = useState('');
    return (
        <View style={styles.listContainer}>
            <InputCode/>
            <InputCode/>
            <InputCode/>
            <InputCode/>
            <InputCode/>
            <InputCode/>
        </View>
    )

}

export default InputList

const styles = StyleSheet.create({
    listContainer:{
        flexDirection:'row',
        justifyContent: 'center'
    }
})
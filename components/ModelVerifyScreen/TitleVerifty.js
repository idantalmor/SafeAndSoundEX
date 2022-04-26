import {View,Text, StyleSheet} from 'react-native'

function TitleVerify(props){
    return (

    <View style={styles.rootContainer} >
        <Text style={styles.titleText}>שלחנו לך קוד אימות חשבון בהודעת SMS</Text>
        <Text style={styles.titleText}> הקוד נשלח למספר : {props.number}</Text>
    </View>

    )

}
export default TitleVerify

const styles = StyleSheet.create({
    titleText:{
        fontSize: 16,
        fontWeight: 'bold'
    },
    rootContainer:{
        justifyContent: 'center',
        alignItems: 'center'
    },


})
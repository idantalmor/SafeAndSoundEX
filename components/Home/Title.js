import {View,Text, StyleSheet} from 'react-native'

function Title(){
    return (

    <View>
        <Text style={styles.titleText}>הזן את מספר הטלפון שלך על מנת</Text>
        <Text style={styles.titleText}>להתחבר. אנחנו נשלח לך קוד לאימות</Text>
    </View>

    )

}
export default Title

const styles = StyleSheet.create({
    titleText:{
        fontSize: 14,
        fontWeight: 'bold'
        
    }

})
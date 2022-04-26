import {View,Text, StyleSheet} from 'react-native'

function Border(){
    return (

    <View>
        <Text style={styles.borderBack}></Text>
    </View>

    )

}
export default Border

const styles = StyleSheet.create({
    borderBack:{
        borderRadius: 2,
        borderWidth: 0.3,
        backgroundColor: '#C7C4F2'
    },
    changeBorder:{
        borderRadius: 4,
        borderWidth: 1,
        backgroundColor: '#C7C4F2'

    }

})
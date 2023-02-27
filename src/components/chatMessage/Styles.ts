import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 10
    },
    messageBox:{
        display: 'flex',
        borderRadius: 8,
        padding: 10
    },
    name:{
        fontSize: 15,
        fontWeight: '700'
    },
    message:{
        fontSize: 18,
        fontWeight: 'normal',
        color: '#000'
    },
    time:{
        fontSize: 13,
        fontWeight: 'normal',
        color: '#4d4d4d',
        alignSelf: 'flex-end',
    },
})

export default Styles;
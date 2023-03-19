import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 10,
        flexDirection: 'row',
    },
    messageBox:{
        display: 'flex',
        borderRadius: 8,
        padding: 10,
        flexDirection: 'row',
    },
    name:{
        fontSize: 15,
        fontWeight: '700'
    },
    message:{
        fontSize: 18,
        fontWeight: 'normal',
        color: '#000',
        padding: 5
    },
    time:{
        fontSize: 13,
        fontWeight: 'normal',
        color: '#4d4d4d',
        alignSelf: 'flex-end',
        padding: 5,
    },
})

export default Styles;

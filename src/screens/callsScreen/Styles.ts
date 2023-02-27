import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    mainContainer:{
        flex: 1, 
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        flexDirection: 'row'
    },
    text:{
        fontSize: 22,
        fontWeight: 'normal',
        textAlign: 'center',
    },
    addCallButton:{
        backgroundColor: '#075E54',
        width: 60,
        height: 60,
        borderRadius: 60/2,
        position: 'absolute',
        right: 20,
        bottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default Styles;
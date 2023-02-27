import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
        flex:1, 
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    ImageContainer: {
        width: '100%', 
        height: '40%', 
        alignItems: 'center', 
        justifyContent: 'center',
    },
    TextContainer:{
        width: '100%',
        height: '20%',
        alignItems: 'center',
    },
    title:{
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000'
    },
    text:{
        fontSize: 18,
        fontWeight: 'normal',
    },
    button: {
        width: 300,
        height: 50,
        backgroundColor: '#075E54',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
    },
    buttonText:{
        fontSize: 17,
        fontWeight: 'bold',
        color: '#fff',
    },
})

export default Styles;
import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container:{
        // width: '100%',
        // height: '10%',
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 10,
        // justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    mainContainer:{
        // width: '84%',
        // height: '100%',
        flex: 1,
        borderRadius: 30,
        backgroundColor: '#fff',
        flexDirection: 'row',
        // justifyContent:'center',
        alignItems: 'flex-end',
    },
    miceContainer:{
        width: 50,
        height: 50,
        borderRadius: 50/2,
        backgroundColor: '#075E54',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10
    },
    emojiContainer:{
        width: 50,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInputContainer:{
        // width: '52%',
        // height: '100%',
        flex: 1,
        backgroundColor: 'transparent'
        // paddingVertical: 5,
        // paddingHorizontal: 5,
    },
    textInput:{
        // height: '100%',
        // width: '100%',
        fontSize: 20,
        fontWeight: 'normal',
        color: '#000'
    },
})

export default Styles;
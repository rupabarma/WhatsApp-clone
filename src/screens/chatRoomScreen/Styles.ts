import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    stackBar: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 5,
        paddingVertical: 10,
        alignItems: 'center',
        backgroundColor: '#075E54'
    },
    stackIcon:{
        // paddingLeft: 10,
        alignItems: 'center',
        // display:'flex',
        flexDirection:'row',
        width: '7%',
        height: '100%',
        // marginTop: 15,
        // backgroundColor: 'transparent'
        // marginLeft: 10,
        // justifyContent:'flex-start',
    },
    dpContainer:{
        width: '15%',
        height: '100%',
    },
    dp:{
        width: 45,
        height: 45,
        borderRadius: 45/2,
    },
    stackNameContainer:{
        width: '40%',
    },
    stackName:{
        fontSize:22,
        fontWeight:'bold',
        color:'#fff',
        letterSpacing:0.5,
    },
    iconsContainer:{
        width: '37%',
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginRight: 8,
    },
    backgroundImage:{
        flex: 1,
    },
})

export default Styles;
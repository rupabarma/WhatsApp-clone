import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    mainContainer:{
        flex: 1, 
        backgroundColor: '#fff',
        // paddingVertical: 10,
        paddingHorizontal: 15,
    },
    myStatusContainer:{
        width: '100%',
        aspectRatio: 13/3,
        flexDirection: 'row',
        alignItems: 'center',
    },
    status:{
        width: 70,
        height: 70,
        marginRight: 10,
        borderRadius: 70/2,
    },
    addButton:{
        width: 22,
        height: 22,
        borderRadius: 22/2,
        backgroundColor: "#075E54",
        position: 'absolute',
        bottom: 9,
        left: 43
    },
    textContainer:{
        flexDirection: 'column',
        justifyContent: 'center'
    },
    heading:{
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
    },
    updateText:{
        fontSize: 18,
        fontWeight: 'normal',
    },
    recentUpdates:{
        width: '100%',
        height: '7%',
        justifyContent: 'center'
    },
    recentUpdatesText:{
        fontSize: 20,
        fontWeight: 'bold',
    },
})

export default Styles;
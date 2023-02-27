import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container:{
        flex: 1,
        // paddingVertical: 10
    },
    mainContainer:{
        width: '100%',
        aspectRatio: 13/3,
        flexDirection: 'row',
        alignItems: 'center',
        // paddingHorizontal: 10
    },
    avatarContainer:{
        width: '22%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        // paddingLeft: 10
    },
    avatar:{
        width: 60,
        height: 60,
        borderRadius: 60/2,
    },
    midContainer:{
        width: '78%',
        height: '100%',
        paddingHorizontal:5,
    },
    midTopContainer:{
        width: '100%',
        height: '50%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingRight: 5
    },
    midBottomContainer:{
        width: '100%',
        height: '50%',
        paddingRight: 5
    },
    userName:{
        fontSize: 22,
        fontWeight: 'bold',
        color: '#0d0d0d',
    },
    status:{
        fontSize: 18,
        fontWeight: '400',
        color: '#808080',
    },
})

export default Styles;
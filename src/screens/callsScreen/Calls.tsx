import { View, Text,TouchableOpacity } from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Styles from './Styles';
// import { useNavigation } from '@react-navigation/native';

//     const navigation = useNavigation();


const Calls = ({navigation}) => {
  const onPress = () => {
      navigation.navigate('Select contacts');
  }
  return (
    <View style={Styles.mainContainer}>
      <Text style={Styles.text}>
        To start calling contacts who have WhatsApp, tap  
      { <MaterialIcons
              name='add-call'
              size={22}
              color='#737373'
              /> }
            at the bottom of your screen.
        </Text>


      <TouchableOpacity onPress={onPress} style={Styles.addCallButton}>
    {/* <View > */}
    <MaterialIcons
              name='add-call'
              size={28}
              color='#fff'
              />
    {/* </View> */}
    </TouchableOpacity>

    </View>
  )
}

export default Calls;
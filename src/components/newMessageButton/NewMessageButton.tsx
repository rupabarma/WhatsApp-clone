import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Styles from './Styles';
import { useNavigation } from '@react-navigation/native';

const NewMessageButton = () => {
    const navigation = useNavigation();
    const onPress = () => {
        navigation.navigate('Select contacts');
    }

  return (
    <TouchableOpacity onPress={onPress}>
    <View style={Styles.container}>
      <MaterialCommunityIcons
      name='android-messages'
      size={28}
      color='#fff'
      style={{transform: [{rotateY:'180deg'}]}}
      />
    </View>
    </TouchableOpacity>
  )
}

export default NewMessageButton;
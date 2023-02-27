import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import GroupImage from './GroupImage.png';
import Styles from './Styles';

const Groups = () => {
  return (
    <View style={Styles.container}>
      <View style={Styles.ImageContainer}>
        <Image
        source={GroupImage}
        />
      </View>
      <View style={Styles.TextContainer}>
      <Text style={Styles.title}>
        Introducing Communities
      </Text>
      <Text style={Styles.text}>
        Easily organize your related groups and send announcements. Now, your communities, 
        like neighborhoods or schools, can have their own space.
      </Text>
      </View>

      <TouchableOpacity style={Styles.button}>
       <Text style={Styles.buttonText}>Start your community</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Groups;
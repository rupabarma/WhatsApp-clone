import { View, Text,TouchableOpacity } from 'react-native';
import React from 'react';
import Styles from './Styles';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'

const Status = () => {
  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.myStatusContainer}>
        <View style={Styles.status}>
          <Ionicons
          name= 'md-person-circle-sharp'
          size= {70}
          color= 'gray'
          />
          <TouchableOpacity style={Styles.addButton}>
            <Feather
            name='plus'
            size={20}
            color= "#fff"
            />
          </TouchableOpacity>
        </View>
        <View style={Styles.textContainer}>
          <Text style={Styles.heading}>My status</Text>
          <Text style={Styles.updateText}>Tap to add status update</Text>
          </View>
        </View>

      <View style={Styles.recentUpdates}>
        <Text style={Styles.recentUpdatesText}>Recent updates</Text>
      </View>

    </View>
  )
}

export default Status;
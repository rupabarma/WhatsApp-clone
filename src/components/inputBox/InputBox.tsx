import { View, Text, TextInput,TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import Styles from './Styles';

//icons
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  API,
  Auth,
  graphqlOperation,
} from 'aws-amplify';
import { 
  createMessage,
  updateChatRoom, 
} from '../../graphql/mutations';

const InputBox = (props) => {

  const {chatRoomID} = props;

  const [message,setMessage] = useState('');
  const [myUserId,setMyUserId] =useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser();
      setMyUserId(userInfo.attributes.sub);
    }
    fetchUser();
  }, [])

  const onMicrophonePress = () => {
    console.warn('MicrophonePress')
  }

  const updateChatRoomLastMessage = async (messageID: string) => {
    try{
      await API.graphql(
        graphqlOperation(
          updateChatRoom, {
            input: {
              id: chatRoomID,
              lastMessageID: messageID,
            }
          }
        ))
    }catch (e) {
      console.log(e)
    }
  }

  const onSendPress = async () => {
    try{
      const newMessageData = await API.graphql(
        graphqlOperation(
          createMessage, {
            input: {
              content: message,
              userID: myUserId,
              chatRoomID
            }
          }
        ))
        
          await updateChatRoomLastMessage(newMessageData.data.createMessage.id)

    }catch (e) {
      console.log(e);
    }

    setMessage('')
  }

  const onPress = () => {
    if (!message) {
      onMicrophonePress();
    }else {
      onSendPress();
    }
  }

  return (
    <View style={Styles.container}>
      <View style={Styles.mainContainer}>
        <View style={Styles.emojiContainer}>
            <Fontisto
            name='smiley'
            size={30}
            color='#737373'
            />
        </View>
        <View style={Styles.textInputContainer}>
        <TextInput
        multiline
        placeholder='Message'
        placeholderTextColor={'#595959'}
        style={Styles.textInput}
        value={message}
        onChangeText={(value) => setMessage(value)}
        />
        </View>
            <Foundation
            name='paperclip'
            size={35}
            color='#737373'
            style={{transform: [{rotateZ:'90deg'}], marginBottom: 8, marginRight: 18}}
            />
          {message ? 
          null:
            <Fontisto
            name='camera'
            size={23}
            color='#737373'
            style={{ marginBottom: 13, marginRight: 15}}
          />
        }

      </View>

        <TouchableOpacity onPress={onPress}>
        <View style={Styles.miceContainer}>
            {!message ? 
            <MaterialCommunityIcons
            name='microphone'
            size={35}
            color='#fff'
            />
            :
            <Ionicons
            name='send'
            size={28}
            color='#fff'
            />
          }
        </View>
        </TouchableOpacity>

    </View>
  )
}

export default InputBox;
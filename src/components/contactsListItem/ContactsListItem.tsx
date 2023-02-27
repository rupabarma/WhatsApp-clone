import { 
  View, 
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Pressable, 
} from 'react-native';
import React from 'react';
import Styles from './Styles';
import { useNavigation } from '@react-navigation/native';

import {API, Auth, graphqlOperation} from 'aws-amplify';
import {createUserChatRooms,createChatRoom} from '../../graphql/mutations'


export type User = {
  status: string;
  id: string;
  name: string;
  imageUri?: string;
}

export type Message = {
  id: string;
  createdAt: string;
  content: string;
  user: User;
  }

export type ChatListItemProps = {
  user: User;
}

const ContactsListItem = (props: ChatListItemProps) => {
  const { user } = props;

  const navigation = useNavigation();

  const onClick = async () => {
    try{
      // 1. create a new chatroom
      const newChatRoomData = await API.graphql(
        graphqlOperation(
          createChatRoom, {input: { }}
        ))

        

        if (!newChatRoomData.data) {
          console.log("failed to create a chat room")
          return;
        }

        const newChatRoom = newChatRoomData.data.createChatRoom;

      // 2. add `user` to the chatroom
       await API.graphql(
        graphqlOperation(
          createUserChatRooms, {
            input:{
              userId: user.id,
              chatRoomId: newChatRoom.id,
            }
            
          }
        )
      )

      // 3. add authenticated user to the chatroom
      const userInfo = await Auth.currentAuthenticatedUser();
       await API.graphql(
        graphqlOperation(
          createUserChatRooms, {
            input:{
              userId: userInfo.attributes.sub,
              chatRoomId: newChatRoom.id,
            }
            
          }
        )
      )

      navigation.navigate('ChatRoom', {
        id: newChatRoom.id,
        name: user.name, 
        imageUri: user.imageUri})

    }catch (e) {
      console.log(e)
    }
  }

  return (
    <View style={Styles.container}>
      <Pressable
      android_ripple={{color:'#bfbfbf'}}
      onPress={onClick}
      >

      <View style={Styles.mainContainer}>

      <View style={Styles.avatarContainer}>
      <Image source={{uri: user.imageUri}} style={Styles.avatar}/>
      </View>

      <View style={Styles.midContainer}>

      <View style={Styles.midTopContainer}>
      <Text style={Styles.userName}>{user.name}</Text>
      </View>

      <View style={Styles.midBottomContainer}>
      <Text style={Styles.status} ellipsizeMode='tail' numberOfLines={1}>{user.status}</Text>
      </View>

      </View>

      </View>

    </Pressable>
    </View>
  )
}

export default ContactsListItem;
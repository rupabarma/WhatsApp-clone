import { 
  View, 
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Pressable, 
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Styles from './Styles';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import { onCreateMessage } from '../../graphql/subscriptions';


export type User = {
  items: any;
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
  chatRoom: {
  id: string;
  users: User;
  lastMessage:Message;
}
}

const ChatListItem = (props: ChatListItemProps) => {
  const { chatRoom } = props;

  const navigation = useNavigation();
  const user = chatRoom.users.items[0].user;

  const [otherUser,setOtherUser] = useState([]);

  useEffect(() => {
    const getOtherUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser();

      if (chatRoom.users.items[0].user.id === userInfo.attributes.sub) {
        setOtherUser(chatRoom.users.items[1].user);
      } else {
        setOtherUser(chatRoom.users.items[0].user);
      }
    }
    getOtherUser();
  }, [])
  

  const onClick = () => {
    navigation.navigate('ChatRoom', {
      id: chatRoom.id,
      name: otherUser.name, 
      imageUri: otherUser.imageUri})
  }

  if (!otherUser) {
    return null;
  }

  return (
    <View style={Styles.container}>
      <Pressable
      android_ripple={{color:'#bfbfbf'}}
      onPress={onClick}
      >

      <View style={Styles.mainContainer}>

      <View style={Styles.avatarContainer}>
      <Image source={{uri: otherUser.imageUri}} style={Styles.avatar}/>
      </View>

      <View style={Styles.midContainer}>

      <View style={Styles.midTopContainer}>
      <Text style={Styles.userName}>{otherUser.name}</Text>
      <Text style={Styles.createdAt}>{moment(chatRoom.lastMessage.createdAt).format('DD/MM/YYYY')}</Text>
      </View>

      <View style={Styles.midBottomContainer}>
      <Text style={Styles.message} 
      ellipsizeMode='tail' numberOfLines={1}>{
      chatRoom.lastMessage? 
      chatRoom.lastMessage.content
      : ""
      }</Text>
      </View>

      </View>

      </View>

    </Pressable>
    </View>
  )
}

export default ChatListItem;
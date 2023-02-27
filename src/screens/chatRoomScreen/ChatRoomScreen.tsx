import { View, Text, TouchableOpacity, Image, FlatList, ImageBackground } from 'react-native';
import React, { useEffect,useState } from 'react';
import { useRoute } from '@react-navigation/native';
import Styles from './Styles';
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

import chatRoomData from '../../data/Chats';
import ChatMessage from '../../components/chatMessage/ChatMessage';
import BG from '../../data/BG.png';
import InputBox from '../../components/inputBox/InputBox';

import {
  API,
  Auth,
  graphqlOperation,
} from 'aws-amplify';
import { messagesByChatRoom } from '../../graphql/queries';
import { onCreateMessage, onUpdateChatRoom } from '../../graphql/subscriptions';

const ChatRoomScreen = ({navigation,route}) => {
    // const route = useRoute();
    // console.log(route.params.id)

    const [messages,setMessages] = useState([]);
    const [myId,setMyId] = useState(null);
    const [chatRoom, setChatRoom] = useState(null)

  useEffect(() => {
    const fetchMessages = async () => {
      const messagesData = await API.graphql(
        graphqlOperation(
          messagesByChatRoom,
          {
            chatRoomID: route.params.id,
            sortDirection: "DESC"
          }
        )
      )
      setMessages(messagesData.data.messagesByChatRoom.items);
    }
    fetchMessages();
  }, [])

  useEffect(() => {
    const getMyId = async () => {
      const userInfo = await Auth.currentAuthenticatedUser();
      setMyId(userInfo.attributes.sub);
    }
    getMyId();
  }, [])

  // useEffect(() => {
  //   const subscription = API.graphql(
  //     graphqlOperation(onCreateMessage)
  //   ).subscribe({
  //     next: (data) => {
  //       const newMessage = data.value.data.onCreateMessage;
  //       if(newMessage.chatRoomID !== route.params.id ) {
  //         return;
  //       }
  //       fetchMessages();
  //       // setMessages([ newMessage,  ...messages ])
  //     }
  //   });
  //   return () => subscription.unsubscribe();
  // },[])

  useEffect(() => {
    const subscription = API.graphql(
      graphqlOperation(onCreateMessage)
    ).subscribe({
      next: ({value}) => {
        setMessages((m) => [value.data.onCreateMessage, ...m])
      },
      error: (err) => console.warn(err),
      
    });
    return () => subscription.unsubscribe();
  },[route.params.id])


  useEffect(() => {
    const subscription = API.graphql(
      graphqlOperation(onUpdateChatRoom)
    ).subscribe({
      next: ({value}) => {
        setChatRoom(cr => ({...(cr || {}), ...value.data.onUpdateChatRoom}))
      },
      error: (err) => console.warn(err),
      
    });
    return () => subscription.unsubscribe();
  },[])

  return (
    <ImageBackground
      source={BG}
      style={Styles.backgroundImage}
      resizeMode='cover'
      >
      <View style={Styles.stackBar}>
        <TouchableOpacity
        style={Styles.stackIcon}
        onPress={()=> navigation.goBack()}
        >
        <Feather name="arrow-left" size={25} color="#fff" />
        </TouchableOpacity>

        <View style={Styles.dpContainer}>
          <Image
          source={{uri: route.params.imageUri}}
          style={Styles.dp}
          />
        </View>

        <View style={Styles.stackNameContainer}>
        <Text style={Styles.stackName} ellipsizeMode='tail' numberOfLines={1} >{route.params.name}</Text>
        </View>

        <View style={Styles.iconsContainer}>
              <FontAwesome5Icon
              name='video'
              size={22}
              color='#fff'
              />
              <MaterialIcons
              name='call'
              size={28}
              color='#fff'
              />
              <MaterialIcons
              name='more-vert'
              size={28}
              color='#fff'
              />
            </View>

      </View>

    

      <FlatList
      data={messages}
      renderItem={({item}) => 
      <ChatMessage myId={myId} message={item}/>}
      inverted
      />
      <InputBox chatRoomID={route.params.id}/>

</ImageBackground>
  )
}

export default ChatRoomScreen;
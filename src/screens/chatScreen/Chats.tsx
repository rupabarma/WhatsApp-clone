import { View, Text, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import ChatListItem from '../../components/chatListItem/ChatListItem';
// import chatRooms from '../../data/ChatRooms';
import NewMessageButton from '../../components/newMessageButton/NewMessageButton';

import { API, graphqlOperation, Auth } from 'aws-amplify';
import { getUser } from './queries';
import { onUpdateChatRoom } from '../../graphql/subscriptions';


const Chats = ({route}) => {

  const [chatRooms, setChatRooms] = useState([]);
  const [chatRoom, setChatRoom] = useState(null)

  useEffect(() => {
    const fetchChatRooms = async () => {
      try{
         const userInfo = await Auth.currentAuthenticatedUser();

         const userData = await API.graphql(
          graphqlOperation(
            getUser, {
              id: userInfo.attributes.sub,
            }
          ))
          setChatRooms(userData.data.getUser.chatRooms.items)
          // // console.log(userData.data.getUser.chatRooms.items);
          // console.log(userInfo.attributes.sub);

      }catch (e) {
        console.log(e)
      }
    }
    fetchChatRooms();
  }, [])

  // useEffect(() => {
  //   const subscription = API.graphql(
  //     graphqlOperation(onUpdateChatRoom)
  //   ).subscribe({
  //     next: ({value}) => {
  //       setChatRoom(cr => ({...(cr || {}), ...value.data.onUpdateChatRoom}))
  //     },
  //     error: (err) => console.warn(err),
      
  //   });
  //   return () => subscription.unsubscribe();
  // },[route.params.id])
  


  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <FlatList 
      data={chatRooms}
      renderItem={({item}) => <ChatListItem chatRoom={item.chatRoom}/>}
      showsVerticalScrollIndicator={false}
      />
      <NewMessageButton/>
    </View>
  )
}

export default Chats;
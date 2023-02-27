import { View, Text, ImageBackground } from 'react-native';
import React from 'react';
import { Message } from '../chatListItem/ChatListItem';
import moment from 'moment';
import Styles from './Styles';

export type ChatMessageProps = {
    message: Message;
    myId: String;
}

const ChatMessage = (props: ChatMessageProps) => {
    const {message, myId} = props;
    const isMyMessage = () => {
        return message.user.id === myId;
    }
  return (
    <View style={Styles.container}>
        <View style={[
            Styles.messageBox,
            {
                backgroundColor: isMyMessage() ? '#DCF8C5' : '#fff',
                marginLeft: isMyMessage() ? 80 : 0,
                marginRight: isMyMessage() ? 0: 80,
            }
            ]}>

        {/* { !isMyMessage() &&
            <Text style={Styles.name}>{message.user.name}</Text>
        } */}
      <Text style={Styles.message}>{message.content}</Text>
      <Text style={Styles.time}>{moment(message.createdAt).format('LT')}</Text>
      </View>
    </View>
  )
}

export default ChatMessage;
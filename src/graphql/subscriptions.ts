/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      name
      imageUri
      status
      chatRooms {
        items {
          id
          userId
          chatRoomId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      name
      imageUri
      status
      chatRooms {
        items {
          id
          userId
          chatRoomId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      name
      imageUri
      status
      chatRooms {
        items {
          id
          userId
          chatRoomId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateChatRoom = /* GraphQL */ `
  subscription OnCreateChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onCreateChatRoom(filter: $filter) {
      id
      users {
        items {
          id
          userId
          chatRoomId
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          userID
          chatRoomID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      lastMessageID
      lastMessage {
        id
        userID
        chatRoomID
        content
        createdAt
        user {
          id
          name
          imageUri
          status
          createdAt
          updatedAt
        }
        chatRoom {
          id
          lastMessageID
          createdAt
          updatedAt
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateChatRoom = /* GraphQL */ `
  subscription OnUpdateChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onUpdateChatRoom(filter: $filter) {
      id
      users {
        items {
          id
          userId
          chatRoomId
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          userID
          chatRoomID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      lastMessageID
      lastMessage {
        id
        userID
        chatRoomID
        content
        createdAt
        user {
          id
          name
          imageUri
          status
          createdAt
          updatedAt
        }
        chatRoom {
          id
          lastMessageID
          createdAt
          updatedAt
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteChatRoom = /* GraphQL */ `
  subscription OnDeleteChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onDeleteChatRoom(filter: $filter) {
      id
      users {
        items {
          id
          userId
          chatRoomId
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          userID
          chatRoomID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      lastMessageID
      lastMessage {
        id
        userID
        chatRoomID
        content
        createdAt
        user {
          id
          name
          imageUri
          status
          createdAt
          updatedAt
        }
        chatRoom {
          id
          lastMessageID
          createdAt
          updatedAt
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onCreateMessage(filter: $filter) {
      id
      userID
      chatRoomID
      content
      createdAt
      user {
        id
        name
        imageUri
        status
        chatRooms {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        users {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          userID
          chatRoomID
          content
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onUpdateMessage(filter: $filter) {
      id
      userID
      chatRoomID
      content
      createdAt
      user {
        id
        name
        imageUri
        status
        chatRooms {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        users {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          userID
          chatRoomID
          content
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
    onDeleteMessage(filter: $filter) {
      id
      userID
      chatRoomID
      content
      createdAt
      user {
        id
        name
        imageUri
        status
        chatRooms {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        users {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          userID
          chatRoomID
          content
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onCreateUserChatRooms = /* GraphQL */ `
  subscription OnCreateUserChatRooms(
    $filter: ModelSubscriptionUserChatRoomsFilterInput
  ) {
    onCreateUserChatRooms(filter: $filter) {
      id
      userId
      chatRoomId
      user {
        id
        name
        imageUri
        status
        chatRooms {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        users {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          userID
          chatRoomID
          content
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUserChatRooms = /* GraphQL */ `
  subscription OnUpdateUserChatRooms(
    $filter: ModelSubscriptionUserChatRoomsFilterInput
  ) {
    onUpdateUserChatRooms(filter: $filter) {
      id
      userId
      chatRoomId
      user {
        id
        name
        imageUri
        status
        chatRooms {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        users {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          userID
          chatRoomID
          content
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUserChatRooms = /* GraphQL */ `
  subscription OnDeleteUserChatRooms(
    $filter: ModelSubscriptionUserChatRoomsFilterInput
  ) {
    onDeleteUserChatRooms(filter: $filter) {
      id
      userId
      chatRoomId
      user {
        id
        name
        imageUri
        status
        chatRooms {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        users {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          userID
          chatRoomID
          content
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;

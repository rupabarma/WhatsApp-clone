import { View, Text, Image, Pressable, TouchableOpacity } from 'react-native'
import React, { useCallback, useMemo, useRef } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import 'react-native-gesture-handler';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import  Icon  from 'react-native-vector-icons/Ionicons';
// import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
// import  SimpleLineIcons  from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import  Octicons  from 'react-native-vector-icons/Octicons';
// import Styles from '../Styles/Styles';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { useRoute } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

//Screens
import Home from '../screens/homeScreen/Home';
import Chats from '../screens/chatScreen/Chats';
import Status from '../screens/statusScreen/Status';
import Calls from '../screens/callsScreen/Calls';
import Groups from '../screens/groupsScreen/Groups';
import ChatRoomScreen from '../screens/chatRoomScreen/ChatRoomScreen';
import ChatListItem from '../components/chatListItem/ChatListItem';
import ContactsScreens from '../screens/ContactsScreen';





const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const MaterialTopTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName='Chats'
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#075E54',
        },
        tabBarActiveTintColor: '#fff',
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIndicatorStyle: {
          backgroundColor: '#fff'
        },
        tabBarShowIcon: true,
      }}
    >
      <Tab.Screen
        name='Groups'
        component={Groups}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <View>
              <MaterialIcons
                name='groups'
                size={27}
                color='#fff'
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name='Chats'
        component={Chats}
      />
      <Tab.Screen
        name='Status'
        component={Status}
      />
      <Tab.Screen
        name='Calls'
        component={Calls}
      />
    </Tab.Navigator>
  )
}

const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#075E54',
          shadowOpacity: 0,
          elevation: 0,
        },
        headerTintColor: '#fff',
        headerTitleStyle:{
          fontWeight: 'bold',
          // fontSize: 25
        },
      }}
    >
      <Stack.Screen
        name='Home'
        component={MaterialTopTabNavigator}
        options={{
          headerTitleStyle: {
            fontSize: 25
          },
          title: 'WhatsApp',
          headerRight: () => (
            <View style={{ flexDirection: 'row', width: '55%', justifyContent: 'space-between', marginRight: 10 }}>
              <Feather
                name='camera'
                size={28}
                color='#fff'
              />
              <MaterialIcons
                name='search'
                size={30}
                color='#fff'
              />
              <Feather
                name='more-vertical'
                size={30}
                color='#fff'
              />
            </View>
          )
        }}

      />
      <Stack.Screen
        name='ChatRoom'
        component={ChatRoomScreen}
        options={{headerShown:false}}
      />
      <Stack.Screen
      name='Select contacts'
      component={ContactsScreens}
      // options={{
      //   }}
    />

      {/* <Stack.Screen
          name='NotificationScreen'
            component={NotificationScreen}
            options={{
            headerShown: false
        }}
        />
        <Stack.Screen
          name='SearchScreen'
            component={SearchScreen}
            options={{
            headerShown: false,
        }}
        />
        <Stack.Screen
          name='AccountScreen'
            component={AccountScreen}
            options={{
            headerShown: false
        }}
        />
        <Stack.Screen
          name='VideoPlayerScreen'
            component={VideoPlayerScreen}
            options={{
            headerShown: false
        }}
        />
        <Stack.Screen
          name="Video Makers Account"
            component={VideoMakersAccountScreen}
            options={{
            headerShown: false
        }}
        />
        <Stack.Screen
          name="RelatedVideos"
            component={RelatedVideos}
            options={{
            headerShown: false
        }}
        /> */}
      {/* <Stack.Screen
            name='ShortsScreen'
            component={ShortsScreen}
            options={{
            headerShown: false
        }}
        />
        <Stack.Screen
            name='CreateScreen'
            component={CreateScreen}
            options={{
            headerShown: false
        }}
        />
        <Stack.Screen
            name='SubscriptionScreen'
            component={SubscriptionScreen}
            options={{
            headerShown: false
        }}
        />
        <Stack.Screen
            name='LibraryScreen'
            component={LibraryScreen}
            options={{
            headerShown: false
        }}
        /> */}
    </Stack.Navigator>
  )
}

export default Navigation;
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import {withAuthenticator} from 'aws-amplify-react-native';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { getUser } from './src/graphql/queries';
import { createUser } from './src/graphql/mutations';

const randomImages = [
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg',
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.jpg',
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.png',
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/4.jpg',
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/5.jpg',
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/6.png',
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/7.png',
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/8.png',
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/9.png',
]

const App = () => {

  const getRandomImages = () => {
    return randomImages[Math.floor(Math.random() * randomImages.length)]
  }

  useEffect(() => {
    const fetchUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser({bypassCache:true}); 
      if (userInfo) {
        const userData = await API.graphql(graphqlOperation(getUser, {id: userInfo.attributes.sub}))
        
        if (userData.data.getUser){
          console.log("user is already registered in database")
          return;
        }
        
        const newUser = {
          id: userInfo.attributes.sub,
          name: userInfo.username,
          imageUri: getRandomImages(),
          status: "Hey there! I am using Whatsapp."
        }

        await API.graphql(
          graphqlOperation(
            createUser, {input: newUser}
          )
          )
        
      }
    }
    fetchUser();
  }, [])

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
      backgroundColor={'#075E54'}
      />
      <NavigationContainer>
        <Navigation/>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default withAuthenticator(App);

import { View, Text, FlatList } from 'react-native';
import React, {useEffect, useState} from 'react';
import ContactsListItem from '../components/contactsListItem/ContactsListItem';
// import Users from '../data/Users';
import { API, graphqlOperation } from 'aws-amplify';
import { listUsers } from '../graphql/queries';


const ContactsScreens = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      try{
        const usersData = await API.graphql(
          graphqlOperation(
            listUsers
          ))
          setUsers(usersData.data.listUsers.items);
      }catch (e) {
        console.log(e)
      }
    }
    fetchUsers();
  }, [])

  return (
    <View>
      <FlatList 
      data={users}
      renderItem={({item}) => <ContactsListItem user={item}/>}
      />
    </View>
  )
}

export default ContactsScreens;
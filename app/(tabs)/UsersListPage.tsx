import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native';
import { Avatar, Card, Button, Searchbar } from 'react-native-paper';
import { firestore } from '../../firebase/firebase'; // Adjust the import path as needed
import { collection, getDocs } from 'firebase/firestore';

const { width } = Dimensions.get('window');

const UsersListPage = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersCollection = collection(firestore, 'Users');
        const usersSnapshot = await getDocs(usersCollection);
        const usersList = usersSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsers(usersList);
      } catch (error) {
        console.error("Error fetching users: ", error);
      }
    };

    fetchUsers();
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleViewProfile = (userId: string) => {
    navigation.navigate('UserProfile', { userId });
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderUserItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Content style={styles.cardContent}>
        <Avatar.Image size={50} source={{ uri: item.profilePic || 'https://via.placeholder.com/150' }} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{item.name}</Text>
          <Text style={styles.userAge}>{item.age} years old</Text>
        </View>
        <Button 
          mode="contained" 
          onPress={() => handleViewProfile(item.id)} 
          style={styles.viewProfileButton}
        >
          View Profile
        </Button>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      {/* Header and Search Bar */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>All Users</Text>
        <Searchbar
          placeholder="Search by name"
          onChangeText={handleSearch}
          value={searchQuery}
          style={styles.searchBar}
        />
      </View>

      {/* User List */}
      <FlatList
        data={filteredUsers}
        renderItem={renderUserItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.userListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 15,
  },
  headerContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 10,
  },
  searchBar: {
    width: '100%',
    borderRadius: 25,
  },
  userListContainer: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    marginBottom: 15,
    borderRadius: 10,
    elevation: 3,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  userInfo: {
    marginLeft: 15,
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  userAge: {
    fontSize: 14,
    color: '#A9A9A9',
    marginTop: 5,
  },
  viewProfileButton: {
    backgroundColor: '#6A11CB',
    borderRadius: 25,
    paddingVertical: 8,
    marginTop: 10,
  },
});

export default UsersListPage;

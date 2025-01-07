import React, { useState } from 'react';

import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet,ScrollView, ActivityIndicator,Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { LinearGradient } from 'expo-linear-gradient';
import { firestore } from '../../firebase/firebase'; // Ensure the correct path
import { collection, addDoc } from 'firebase/firestore';


const AdminAddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  // const [muscleGroup, setMuscleGroup] = useState('user1-reading');

  const [loading, setLoading] = useState(false);

  const handleAddUser = async () => {
    setLoading(true);
    try {

      await addDoc(collection(firestore, 'Users'), {
        name: name,
        email: email,
        age: age,
        // reading: muscleGroup,
      });
      Alert.alert('Success', 'User added successfully!');
      setName('');
      setEmail('');
      setAge('');
      // setMuscleGroup('user1-reading');

    } catch (error) {
      Alert.alert('Error', 'Failed to add user. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <LinearGradient
      colors={['#4158D0', '#C850C0', '#FFCC70']}
      style={styles.gradient}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Add User</Text>
          
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your name"
              value={name}
              onChangeText={setName}
              placeholderTextColor="#666"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email Address</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              placeholderTextColor="#666"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Age</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your age"
              value={age}
              onChangeText={setAge}
              keyboardType="numeric"
              placeholderTextColor="#666"
            />
          </View>


          {/* <View style={styles.inputContainer}>

            <Text style={styles.label}>Hardware reading</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={muscleGroup}
                style={styles.picker}
                onValueChange={setMuscleGroup}
              >
                <Picker.Item label="user1-reading" value="user1-reading" />
                <Picker.Item label="user2-reading" value="user2-reading" />
                <Picker.Item label="user3-reading" value="user3-reading" />
                <Picker.Item label="user4-reading" value="user4-reading" />
                <Picker.Item label="user5-reading" value="user5-reading" />
                <Picker.Item label="user6-reading" value="user6-reading" />
                <Picker.Item label="user7-reading" value="user7-reading" />
                <Picker.Item label="user8-reading" value="user8-reading" />
              </Picker>
            </View>

          </View> */}


          <TouchableOpacity
            style={styles.button}
            onPress={handleAddUser}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Add User</Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
    fontWeight: '600',
  },
  input: {
    height: 50,
    borderColor: '#e1e1e1',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#333',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#e1e1e1',
    borderRadius: 12,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  picker: {
    height: 50,
  },
  button: {
    backgroundColor: '#4158D0',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AdminAddUser;

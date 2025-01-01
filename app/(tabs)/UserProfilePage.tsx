import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

// Sample user data
const user = {
  name: 'John Doe',
  age: 28,
  email: 'john.doe@example.com',
  phone: '+123 456 7890',
  profilePicture: 'https://randomuser.me/api/portraits/men/32.jpg', // Replace with actual image URL
  activityLevel: 'Intermediate',
  healthStats: {
    height: '5\'9"',
    weight: '75 kg',
    bmi: '24.2',
  },
  joined: 'January 2023',
};

const UserDetailsPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={{ uri: user.profilePicture }} style={styles.profileImage} />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.activityLevel}>Activity Level: {user.activityLevel}</Text>
      </View>

      {/* User Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.sectionTitle}>Personal Information</Text>
        <View style={styles.infoRow}>
          <Ionicons name="person-outline" size={20} color="#6A11CB" />
          <Text style={styles.infoText}>Age: {user.age}</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="mail-outline" size={20} color="#6A11CB" />
          <Text style={styles.infoText}>Email: {user.email}</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="call-outline" size={20} color="#6A11CB" />
          <Text style={styles.infoText}>Phone: {user.phone}</Text>
        </View>

        {/* Health Stats */}
        <Text style={styles.sectionTitle}>Health Stats</Text>
        <View style={styles.infoRow}>
          <Ionicons name="body-outline" size={20} color="#6A11CB" />
          <Text style={styles.infoText}>Height: {user.healthStats.height}</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="fitness-outline" size={20} color="#6A11CB" />
          <Text style={styles.infoText}>Weight: {user.healthStats.weight}</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="pulse-outline" size={20} color="#6A11CB" />
          <Text style={styles.infoText}>BMI: {user.healthStats.bmi}</Text>
        </View>

        {/* Join Date */}
        <Text style={styles.sectionTitle}>Joined</Text>
        <View style={styles.infoRow}>
          <Ionicons name="calendar-outline" size={20} color="#6A11CB" />
          <Text style={styles.infoText}>Joined: {user.joined}</Text>
        </View>
      </View>

      {/* Edit Profile Button */}
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F2F2F2',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  activityLevel: {
    fontSize: 16,
    color: '#7F8C8D',
  },
  infoContainer: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6A11CB',
    marginVertical: 10,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  infoText: {
    fontSize: 16,
    color: '#2C3E50',
    marginLeft: 10,
  },
  editButton: {
    backgroundColor: '#6A11CB',
    borderRadius: 25,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  editButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UserDetailsPage;

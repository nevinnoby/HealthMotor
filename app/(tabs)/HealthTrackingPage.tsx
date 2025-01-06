import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const ActivityData = [
  { id: '1', activity: 'Running', time: '30 min', calories: 300, date: '2024-12-30' },
  { id: '2', activity: 'Yoga', time: '45 min', calories: 150, date: '2024-12-29' },
  { id: '3', activity: 'Cycling', time: '60 min', calories: 500, date: '2024-12-28' },
  { id: '4', activity: 'Swimming', time: '40 min', calories: 400, date: '2024-12-27' },

];

const TrackingPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Activity Tracker</Text>
        <Text style={styles.subHeaderText}>Your recent activities</Text>
      </View>

      {/* Activity List */}
      <View style={styles.activityList}>
        {ActivityData.map((activity) => (
          <View key={activity.id} style={styles.activityCard}>
            <Ionicons name="fitness-outline" size={30} color="#2C3E50" style={styles.icon} />
            <View style={styles.activityInfo}>
              <Text style={styles.activityText}>{activity.activity}</Text>
              <Text style={styles.detailsText}>Time: {activity.time}</Text>
              <Text style={styles.detailsText}>Calories: {activity.calories} kcal</Text>
              <Text style={styles.dateText}>Date: {activity.date}</Text>
            </View>
            <TouchableOpacity style={styles.viewButton}>
              <Text style={styles.viewButtonText}>View Details</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
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
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  subHeaderText: {
    fontSize: 16,
    color: '#A9A9A9',
    marginTop: 5,
  },
  activityList: {
    marginBottom: 20,
  },
  activityCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  icon: {
    marginRight: 15,
  },
  activityInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  activityText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2C3E50',
  },
  detailsText: {
    fontSize: 14,
    color: '#7F8C8D',
  },
  dateText: {
    fontSize: 12,
    color: '#BDC3C7',
    marginTop: 5,
  },
  viewButton: {
    backgroundColor: '#6A11CB',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  viewButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default TrackingPage;

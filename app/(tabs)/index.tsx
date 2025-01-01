import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const Dashboard = () => {
  const [showAllActions, setShowAllActions] = useState(false);
  const navigation = useNavigation();

  const stats = [
    { label: 'Active Users', value: 120, gradient: ['#6A11CB', '#2575FC'], icon: 'people-outline' },
    { label: 'Consultations', value: 15, gradient: ['#FF416C', '#FF4B2B'], icon: 'clipboard-outline' },
    { label: 'Workout Plans', value: 40, gradient: ['#20B2AA', '#008B8B'], icon: 'barbell-outline' },
    { label: 'Reports', value: 8, gradient: ['#FF5F6D', '#FFC371'], icon: 'document-text-outline' }
  ];

  const baseQuickActions = [
    { label: 'User Profiles', icon: 'person-outline', route: 'UserProfiles' },
    { label: 'Health Analytics', icon: 'analytics-outline', route: 'HealthAnalytics' },
    { label: 'Workout Plans', icon: 'barbell-outline', route: 'WorkoutPlans' },
    { label: 'Diet Plans', icon: 'restaurant-outline', route: 'DietPlans' },
    { label: 'Consultations', icon: 'chatbubbles-outline', route: 'Consultations' },
    { label: 'Notifications', icon: 'notifications-outline', route: 'Notifications' }
  ];

  const additionalQuickActions = [
    { label: 'Progress Tracking', icon: 'trending-up-outline', route: 'ProgressTracking' },
    { label: 'Activity Logs', icon: 'list-outline', route: 'ActivityLogs' },
    { label: 'Admin Settings', icon: 'settings-outline', route: 'AdminSettings' },
    { label: 'Reports', icon: 'document-text-outline', route: 'Reports' },
    { label: 'Support Requests', icon: 'help-circle-outline', route: 'SupportRequests' },
  ];

  const allQuickActions = showAllActions 
    ? [...baseQuickActions, ...additionalQuickActions] 
    : baseQuickActions;

  const renderStatCard = (stat, index) => (
    <LinearGradient
      key={index}
      colors={stat.gradient}
      style={styles.statCard}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <View style={styles.statCardContent}>
        <View style={styles.statIconContainer}>
          <Ionicons name={stat.icon} size={24} color="white" />
        </View>
        <View>
          <Text style={styles.statValue}>{stat.value}</Text>
          <Text style={styles.statLabel}>{stat.label}</Text>
        </View>
      </View>
    </LinearGradient>
  );

  const renderActionButton = (action, index) => (
    <TouchableOpacity 
      key={index} 
      style={styles.actionButton}
      onPress={() => action.route && navigation.navigate(action.route)}
    >
      <View style={styles.actionIconContainer}>
        <Ionicons name={action.icon} size={24} color="#2C3E50" />
      </View>
      <Text style={styles.actionLabel}>{action.label}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Muscle Health Admin</Text>
          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={24} color="#2C3E50" />
          </TouchableOpacity>
        </View>
        
        {/* Statistics Section */}
        <View style={styles.statsContainer}>
          {stats.map(renderStatCard)}
        </View>

        {/* Quick Actions Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.actionsContainer}>
            {allQuickActions.map(renderActionButton)}
          </View>

          {/* View More/Less Button */}
          <TouchableOpacity 
            style={styles.viewMoreButton}
            onPress={() => setShowAllActions(!showAllActions)}
          >
            <Text style={styles.viewMoreText}>
              {showAllActions ? 'View Less' : 'View More'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Recent Activities */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Recent Activities</Text>
          <View style={styles.recentActivitiesContainer}>
            {[
              'User 101 completed the "Strength Training" workout.',
              'New consultation added for User 202.',
              'Weekly progress report generated for User 303.'
            ].map((activity, index) => (
              <View key={index} style={styles.activityItem}>
                <Text>{activity}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FC'
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#2C3E50'
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  statCard: {
    width: '48%',
    borderRadius: 15,
    marginBottom: 15,
    padding: 15
  },
  statCardContent: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  statIconContainer: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 10,
    padding: 10,
    marginRight: 15
  },
  statValue: {
    fontSize: 24,
    color: 'white',
    fontWeight: '700',
    marginBottom: 5
  },
  statLabel: {
    color: 'white',
    fontSize: 12,
    opacity: 0.8
  },
  sectionContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 15
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 15
  },
  actionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',  // Changed from 'space-between'
    gap: 15
  },
  actionButton: {
    width: '30%',
    alignItems: 'center',
    //marginBottom: 15
  },
  actionIconContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  actionLabel: {
    fontSize: 12,
    color: '#2C3E50',
    textAlign: 'center'
  },
  viewMoreButton: {
    alignSelf: 'center',
    marginTop: 10
  },
  viewMoreText: {
    color: '#3498DB',
    fontWeight: '600'
  },
  recentActivitiesContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  activityItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#f1f3f4',
    paddingVertical: 10
  }
});

export default Dashboard;
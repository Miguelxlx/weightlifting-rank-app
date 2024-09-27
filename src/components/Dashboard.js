import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Dashboard = () => {
  // Mock data (we'll replace this with real data later)
  const userRank = {
    overall: 'Gold',
    squat: 'Platinum',
    benchPress: 'Gold',
    deadlift: 'Silver'
  };

  const userProgress = {
    squat: 80,
    benchPress: 60,
    deadlift: 40
  };

  return (
    <View style={styles.dashboard}>
      <Text style={styles.title}>Weightlifting Dashboard</Text>
      <View style={styles.rankOverview}>
        <Text style={styles.subtitle}>Current Rank: {userRank.overall}</Text>
        <View style={styles.liftRanks}>
          <Text>Squat: {userRank.squat}</Text>
          <Text>Bench Press: {userRank.benchPress}</Text>
          <Text>Deadlift: {userRank.deadlift}</Text>
        </View>
      </View>
      <View style={styles.progressOverview}>
        <Text style={styles.subtitle}>Progress to Next Rank</Text>
        <View style={styles.progressBars}>
          {Object.entries(userProgress).map(([lift, progress]) => (
            <View key={lift} style={styles.progressBar}>
              <Text>{lift}</Text>
              <View style={styles.barContainer}>
                <View style={[styles.bar, { width: `${progress}%` }]} />
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dashboard: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  rankOverview: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
  },
  liftRanks: {
    flexDirection: 'column',
    gap: 5,
  },
  progressOverview: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 20,
  },
  progressBars: {
    gap: 10,
  },
  progressBar: {
    marginBottom: 10,
  },
  barContainer: {
    height: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    overflow: 'hidden',
  },
  bar: {
    height: '100%',
    backgroundColor: '#4caf50',
  },
});

export default Dashboard;
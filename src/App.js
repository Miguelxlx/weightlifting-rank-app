import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import Dashboard from './src/components/Dashboard';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Dashboard />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
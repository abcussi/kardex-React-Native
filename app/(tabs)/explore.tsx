import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Platform, View, Text, ActivityIndicator } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  const [loading, setLoading] = useState(true);

  return (
    <View style={styles.loaderContainer}>
    <ActivityIndicator size="large" color="#0000ff" />
    <Text style={styles.loaderText}>Estamos trabajando en la app</Text>
    <View style={styles.taskContainer}>
      <Text style={styles.taskText}>1.- Recopilación de datos - En progreso</Text>
      <Text style={styles.taskText}>2.- Desarrollo de la app - TO DO</Text>
      <Text style={styles.taskText}>3.- Testing - TO DO</Text>
      <Text style={styles.taskText}>4.- Pruebas Alfa - TO DO</Text>
      <Text style={styles.taskText}>5.- Pruebas Beta - TO DO</Text>
      <Text style={styles.taskText}>6.- Debug - TO DO</Text>
      <Text style={styles.taskText}>7.- Entrega Final - TO DO</Text>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  loaderText: {
    fontSize: 18,
    marginTop: 10,
  },
  taskContainer: {
    marginTop: 20,
  },
  taskText: {
    fontSize: 16,
    color: '#333',
  },
});
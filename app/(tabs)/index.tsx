import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Platform, View, Text, ActivityIndicator } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const [loading, setLoading] = useState(true);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">App Kardex Ariel Cussi!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Recopilar Informacion Android - Iphone</ThemedText>
        <ThemedText>
          Recopilar modelos para ser usados android y IOS luego evaluar el sistema operativo
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Lenguaje de Programacion</ThemedText>
        <ThemedText>
          Usaremos como base React Native con integraciones Python con un extractor de paquetes Expo para generar los instalables
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: APK</ThemedText>
        <ThemedText>
          La App ira en constante Migracion asi que el usuario final tendra que borrar y reinstalar el programa hasta tener el producto final
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
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

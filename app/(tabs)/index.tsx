import { Image } from 'expo-image';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

const menuItems = [
  { id: 1, title: 'Stamboom', route: '/screen1' },
  { id: 2, title: 'Systeem Info', route: '/screen2' },
  { id: 3, title: '<Placeholder>', route: '/screen3' },
];

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/FamiliezSplash.png')}
          style={styles.headerImage}
          contentFit="cover"
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Hoofdmenu</ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.menuContainer}>
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.menuItem}
            onPress={() => router.push(item.route as any)}>
            <ThemedText type="subtitle">{item.title}</ThemedText>
            <ThemedText>→</ThemedText>
          </TouchableOpacity>
        ))}
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  menuContainer: {
    gap: 12,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  headerImage: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
});

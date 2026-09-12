import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function ExplorePage() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.content}>
        <Text style={styles.title}>BasuraGo Phase 1</Text>
        <Text style={styles.body}>
          This route is reserved for future customer and rider workflow previews.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f6f8f4',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    gap: 8,
  },
  title: {
    color: '#153d35',
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '800',
  },
  body: {
    color: '#48645a',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
  },
});

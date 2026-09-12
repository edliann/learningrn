import { Link } from 'expo-router';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function HomePage() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.content}>
        <View style={styles.mascot}>
          <View style={styles.eyeRow}>
            <View style={styles.eye} />
            <View style={styles.eye} />
          </View>
          <View style={styles.smile} />
        </View>
        <Text style={styles.kicker}>BasuraGo</Text>
        <Text style={styles.title}>Phase 1 foundation is starting with admin operations.</Text>
        <Text style={styles.body}>
          The customer and rider flows will come one feature at a time after the admin shell,
          shared types, and Firebase boundary are stable.
        </Text>
        <Link href="/admin" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Open Admin Dashboard</Text>
          </Pressable>
        </Link>
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
    gap: 14,
    maxWidth: 720,
  },
  mascot: {
    width: 64,
    height: 64,
    borderRadius: 8,
    backgroundColor: '#b7e36b',
    borderWidth: 2,
    borderColor: '#153d35',
    alignItems: 'center',
    justifyContent: 'center',
  },
  eyeRow: {
    flexDirection: 'row',
    gap: 10,
  },
  eye: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#153d35',
  },
  smile: {
    width: 24,
    height: 10,
    borderBottomWidth: 2,
    borderColor: '#153d35',
    borderRadius: 10,
  },
  kicker: {
    color: '#527066',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  title: {
    color: '#153d35',
    fontSize: 34,
    lineHeight: 40,
    fontWeight: '800',
    maxWidth: 620,
  },
  body: {
    color: '#48645a',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
    maxWidth: 620,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    minHeight: 48,
    borderRadius: 8,
    paddingHorizontal: 18,
    backgroundColor: '#153d35',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '800',
  },
});

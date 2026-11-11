import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Show modal message"
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.button}>Show modal message</Text>
      </Pressable>

      <Modal
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
        visible={modalVisible}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.message}>This is modal...</Text>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Close modal"
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.button}>Close</Text>
          </Pressable>
        </View>
      </Modal>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    fontSize: 24,
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 80,
  },
  message: {
    fontSize: 24,
  },
});

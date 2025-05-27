import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { allowedUsers } from '../config/users';

export default function Login() {
  const [username, setUsername] = useState('');
  const [passkey, setPasskey] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    if (!username.trim() || !passkey.trim()) {
      Alert.alert('Error', 'Please fill in both fields');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      const foundUser = allowedUsers.find(
        (user) =>
          user.username.toLowerCase() === username.toLowerCase() &&
          user.passkey === passkey
      );

      setIsLoading(false);

      if (foundUser) {
        // router.replace('/chat');
        router.replace("/dashboard");
      } else {
        Alert.alert('Error', 'Invalid username or passkey');
      }
    }, 1000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          <MaterialCommunityIcons name="cellphone-text" size={28} color="black" /> SilentLink
        </Text>
        <Text style={styles.subtitle}>Sign in to continue</Text>

        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Username</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your username"
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Passkey</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your passkey"
              value={passkey}
              onChangeText={setPasskey}
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          <TouchableOpacity
            style={[styles.loginButton, isLoading && styles.loginButtonDisabled]}
            onPress={handleLogin}
            disabled={isLoading}
          >
            <Text style={styles.loginButtonText}>
              {isLoading ? 'Signing in...' : 'Continue'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { flex: 1, justifyContent: 'center', paddingHorizontal: 32 },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    color: '#000',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginBottom: 48,
  },
  form: { gap: 24 },
  inputGroup: { gap: 8 },
  label: { fontSize: 16, fontWeight: '500', color: '#333' },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  loginButton: {
    backgroundColor: '#007AFF',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 16,
  },
  loginButtonDisabled: { backgroundColor: '#ccc' },
  loginButtonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});

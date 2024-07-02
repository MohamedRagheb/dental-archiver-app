import { Link, Stack } from 'expo-router';
import { Animated, StyleSheet } from 'react-native';
import Text = Animated.Text;

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <Link href={'(auth)/login'}>hallo</Link>
      <Text>404</Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});

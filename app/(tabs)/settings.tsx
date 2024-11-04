import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import ButtonNavigation from '@/src/components/ButtonNavigation';

function back () {
  router.back();
}

export default function Tab() {
  return (
    <View style={styles.container}>

      <Text onPress={back}>voltar</Text>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

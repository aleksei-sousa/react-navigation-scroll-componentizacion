import { Text, View, StyleSheet, StatusBar, TouchableOpacity } from "react-native";
import { Link } from 'expo-router';
export default function Index() {


  
  return (
    <View style={styles.container}>

        <Text style={styles.title}>
          Index do Views
        </Text>
        {/* <TouchableOpacity style={styles.btn}>
          <Link style={styles.btnText} href="/ScrollView">ScrollView</Link>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Link style={styles.btnText} href="/FlatView">FlatView</Link>
        </TouchableOpacity> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  title: {
    fontSize: 25,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    paddingBottom: 8,
  },
  btn: {
    backgroundColor: '#dac',
    marginTop: 20,
    borderRadius: 20,
    color: '#fff'
  },
  btnText:{
    color: 'black',
    padding: 20,
  }
});
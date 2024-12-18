import { Text, View, StyleSheet, StatusBar, TouchableOpacity } from "react-native";
import { Link } from 'expo-router';
import ButtonNavigation from "@/src/components/ButtonNavigation";
import StyledTitle from "@/src/components/StyledTitle";


export default function Index() {

  return (

      <View style={styles.container}>
          <StatusBar
            animated={true}
            backgroundColor="#61dafb"
          />
          <StyledTitle>
            Home
          </StyledTitle>

          {/* <TouchableOpacity style={styles.btn}>
            <Link style={styles.btnText} href="/(tabs)/">Tabs</Link>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Link style={styles.btnText} href="/ViewsType/">ViewsType</Link>
          </TouchableOpacity> */}
          <ButtonNavigation destination='/(tabs)/' title="Tabs"/>
          <ButtonNavigation destination='/ViewsType/' title="ViewsType"/>
          <ButtonNavigation destination='/StyledComponents/StyledComponents ' title="Styled Components"/>
          <ButtonNavigation destination='/UsingApi' title={"UsingApi"} />
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
    backgroundColor: 'red',
    marginTop: 20,
    borderRadius: 20,
    color: '#fff'
  },
  btnText:{
    color: '#fff',
    padding: 20,
  }
});
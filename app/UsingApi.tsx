import StyledContainer from "@/src/components/StyledContainer";
import StyledTitle from "@/src/components/StyledTitle";
import axios from 'axios'
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text } from "react-native";

function UsingApi() {

    const [ user, setUser] = useState({})

    const fetchGitHubUser = async () => {
        try {
            const res = await axios.get('https://api.github.com/users/aleksei-sousa');
            console.log(res.data)
            setUser(res.data); // Extrai o User do objeto resposta
        } catch (error) {
            console.error("Erro ao buscar User:", error);
        }
    };
    useEffect(()=>{
        fetchGitHubUser()
    },[])


    return ( 
        <StyledContainer bgColor={'white'}>
            <StyledTitle>UsingApi</StyledTitle>
            <Text>{user.name}</Text>
            <Text>{user.bio}</Text>
            <Image source={{uri: user.avatar_url}} style={styles.avatar}/>
        </StyledContainer>
     );
}

const styles = StyleSheet.create({
    avatar: {
        height: 200,
        width: 200,
        alignSelf: 'center',
        borderRadius: 999,
    }
})


export default UsingApi;


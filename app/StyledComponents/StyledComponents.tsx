import StyledContainer from "@/src/components/StyledContainer";
import StyledTitle from "@/src/components/StyledTitle";
import { View } from 'react-native'
import styled from "styled-components/native";



export default function StyledComponents () {
    return(
        <StyledContainer bgColor="black">
            <StyledTitle>Styled Components</StyledTitle>
        </StyledContainer>
    )
}
import styled from 'styled-components/native'

const StyledTitle = styled.Text` 
  font-family: ${({theme}) => theme.fonts.Roboto700}; 
  font-size: 26px;
  text-align: center;
  color: ${(props) => props.theme.colors.red};
`;

export default StyledTitle;
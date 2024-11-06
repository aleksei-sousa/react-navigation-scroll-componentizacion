import styled from 'styled-components/native';

const StyledContainer = styled.View`
    flex: 1;
    margin: 32px 0 0;
    padding: 26px;
    background-color: ${(props) => props.bgColor ?? '#6200ee'};
`;

export default StyledContainer;

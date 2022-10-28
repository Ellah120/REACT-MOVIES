import { FaSearch } from "react-icons/fa";
import styled from "styled-components";

function Header(){
  return(
    <StyledDiv>
      <StyledHeading>New Release</StyledHeading>
      <StyledInput placeholder="search"></StyledInput>
      <p>< FaSearch/></p>
    </StyledDiv>
  )
}

export default Header;

const StyledDiv = styled.div`
display: flex;
margin: 10px;
`;
const StyledHeading = styled.h1`
margin: 0 auto;
`;
const StyledInput = styled.input`
height: 1.7rem;
width: 8rem;
margin-top:5px;
border-radius:20px;
border: 1px solid black;
`;
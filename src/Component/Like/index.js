import { useState } from "react";
import { FaHeart} from "react-icons/fa";
import {StyledDiv, StyledButton } from "../Styles"

function ShowLikes(){

  const [like, setLike] = useState(false)

  function addHandler(){
    setLike(!like);
  }
  return (
    <StyledDiv>
    <StyledButton onClick={addHandler}>< FaHeart style={{
          color: like ? 'red' : 'grey',
        }}/></StyledButton>
    </StyledDiv>
  )

}

export default ShowLikes;

// const StyledDiv = styled.div`
//   display:flex;
// `

// const StyledButton = styled.button`
//   border: none;
//   background-color: #FAFAFF;
// `

// const StyledP = styled.p`
//   padding-left: 10px;
// `
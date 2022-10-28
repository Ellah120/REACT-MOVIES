import {useEffect, useState} from "react";
import axios from "axios";
import ShowLikes from "../Like";
import styled from "styled-components";

function DisplayMovies() {
  const [movies, setMovies] = useState([]);
  const url =
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`;
  const baseImgUrl = "https://image.tmdb.org/t/p/w300";

  useEffect(() => {
    try {
      const getData = async () => {
        let res = await axios.get(url);
        let pic = res.data;
        let pictures = pic.results;
        setMovies(pictures);
        // console.log(pic);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, [url]);
  console.log(movies);


  return (
    <StyledDiv>
      
        {movies.map((movie) => (
          <StyledDivB>
        <StyledHeading>{movie.title}</StyledHeading>
        <img src={`${baseImgUrl}${movie.poster_path}`} alt={movie.title} />
        <StyledP><strong>About:</strong> {movie.overview}</StyledP>
        <StyledHeading5>{`Release Date: ${movie.release_date}`}</StyledHeading5>
        <ShowLikes/>
         </StyledDivB>
        ))}
        
    </StyledDiv>
  )
 }

export default DisplayMovies;

const StyledDiv = styled.div`
display: flex;
flex-wrap: wrap;
justify-content:space-around;
`;

const StyledP = styled.p`
width: 250px;
padding-left: 10px;
font-size: 0.95rem;
height: 240px;
`;

const StyledHeading = styled.h2`
width:300px;
height: 80px;
padding-left: 10px;
`;

const StyledDivB = styled.div`
background-color: #FAFAFF;
margin-bottom: 20px;
`

const StyledHeading5 = styled.h5`
padding-left: 10px;
margin-bottom: 2px;
`
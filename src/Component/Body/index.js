import {useEffect, useState} from "react";
import axios from "axios";
import ShowLikes from "../Like";
import styled from "styled-components";
import {FaMoon} from "react-icons/fa"
import '../darkMode.css';



function DisplayMovies() {
  const [movies, setMovies] = useState([]);
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    if (theme === 'light'){
      setTheme('dark');
    } else{
        setTheme('light');
      }
  }
   useEffect(()=> {
    document.body.className = theme;
   }, [theme]);
   
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
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, [url]);
  console.log(movies);


  return (
    <StyledDiv className={`DisplayMovies ${theme}`}>
      <StyledButton onClick={toggleTheme} style={{backgroundColor: theme === 'light' ? 'white' : '#333'}}><FaMoon style={{
        color: theme === 'light' ? 'black' : 'white',}} />
        </StyledButton>
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
justify-content: space-around;
width:100%;
`;

const StyledP = styled.p`
width: 250px;
padding-left: 10px;
font-size: 0.9rem;
height: 240px;
`;

const StyledHeading = styled.h2`
width:300px;
height: 80px;
padding-left: 10px;
`;

const StyledDivB = styled.div`
/* background-color: #FAFAFF; */
margin-bottom: 20px;
/* width: 100vw; */
`

const StyledHeading5 = styled.h5`
padding-left: 10px;
margin-bottom: 2px;
`

const StyledButton = styled.button`
height: 20px;
position: absolute;
top: 4%;
left: 5%;
padding: 0;
border: none;
`
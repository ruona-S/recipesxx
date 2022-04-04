import { useEffect, useState } from "react"
import styled from "styled-components"
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import { Link } from "react-router-dom"




function Popular() {


  const [popular, setPopular] = useState([]);


  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {

    const item = localStorage.getItem("popular")

    if (item) { // if a recipe is already in local storage
      setPopular(JSON.parse(item)) // display that item
    } else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=8`)
      const data = await api.json()

      localStorage.setItem("popular", JSON.stringify(data.recipes))  // local storage has to be a string, therefore, 'stringify
      setPopular(data.recipes)
    }
  };


  return (
    <div>
      <Container>
        <h3>Popular Recipes</h3>
        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "2em",
            breakpoints: {
              1200: {
                perPage: 3,
              },
              900: {
                perPage: 2,
              },
              640: {
                perPage: 1
              }
            }
          }}
        >
          {popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Box>
                  <Link to={"/recipe/" + recipe.id }>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient />
                  </Link>
                </Box>
              </SplideSlide>
            )
          })}
        </Splide>
      </Container>
    </div>
  )
}


//STYLED COMPONENTS AREA

const Container = styled.div`
  margin: 4em 0;
  text-align: center;
  padding: 1em 1em;

  h3 {
    font-size: 2rem;
    padding: 1em 1em;
  }
`;

const Box = styled.div`
  min-height: 20rem;
  border-radius: 10px;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 10px;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 3;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, -50%);
    color: white;
    font-weight: 700;
    font-size: 1.3rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.6), rgba(0,0,0,0));
`;








export default Popular;
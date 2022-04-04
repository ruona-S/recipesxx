import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom"
import styled from 'styled-components';


function Searched() {

   const [searchedFood, setSearchedFood] = useState([]);
   let params = useParams();

   const getSearched = async (name) => {  // so that all meal types will be rendered
      const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=9&query=${name}`)  // name refers to the meal name
      const recipes = await data.json()
      setSearchedFood(recipes.results)
   };
   
   useEffect(() => {
      getSearched(params.search)  // 'search': check pages.jsx
   }, [params.search]);



   /*const getSearched = async (name) => {

      const item = localStorage.getItem("searchedFood")
  
      if (item) { // if a recipe is already in local storage
        setSearchedFood(JSON.parse(item)) // display that item
      } else {
         const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=9&query=${name}`)  // name refers to the meal name
         const recipes = await data.json()
  
        localStorage.setItem("searchedFood", JSON.stringify(recipes.results))  // local storage has to be a string, therefore, 'stringify
        setSearchedFood(recipes.results)
      }
    };*/





  return (
     <Grid>
        {searchedFood.map((item) => {
           return (
            <Box key={item.id}>
               <Link to={"/recipe/" + item.id }>
                  <img src={item.image} alt="" />
                  <h4>{item.title}</h4>
               </Link>
            </Box>
           )
        })}
     </Grid>
  )
}


// STYLED COMPONENTS

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 2rem;
  padding: 1em 1em;
  max-width: 1200px;
  margin: 0 auto;
`;

const Box = styled.div`
  min-height: 20rem;
  border-radius: 10px;

  img {
     width: 100%;
     border-radius: 10px;
  }
  h4 {
     font-size: 1.3rem;
  }
`;




export default Searched;
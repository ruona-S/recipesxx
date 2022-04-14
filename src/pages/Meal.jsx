import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import { Link, useParams } from "react-router-dom"

function Meal() {

   const [meal, setMeal] = useState([]);
   let params = useParams();


   const getMeal = async (name) => {  // so that all meal types will be rendered
      const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=9&type=${name}`)  // name refers to the meal name
      const recipes = await data.json()
      setMeal(recipes.results)
   };
   
   useEffect(() => {
      getMeal(params.type) 
   }, [params.type])  // update every time the name of meal changes. 'type': check pages.jsx 
   


   /*const getMeal = async (name) => {

      const item = localStorage.getItem("meal")
  
      if (item) { // if a recipe is already in local storage
        setMeal(JSON.parse(item)) // display that item
      } else {
         const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=9&type=${name}`)  // name refers to the meal name
         const recipes = await data.json()
  
        localStorage.setItem("meal", JSON.stringify(recipes.results))  // local storage has to be a string, therefore, 'stringify
        setMeal(recipes.results)
      }
   };*/



   return (
      <Grid>
         {meal.map((item) => {
            return (
               <Box key={item.id}>
                  <Link to={'/recipe/' + item.id}>
                    <img src={item.image} alt="" />
                    <h4>{item.title}</h4>
                  </Link>
               </Box>
            );
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
     color: black;

     &:hover {
        color: rgb(178, 34, 34);
     }
  }
`;







export default Meal;
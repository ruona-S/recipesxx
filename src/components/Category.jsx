import {GiShrimp, GiChickenOven, GiCakeSlice, GiCoffeeCup} from "react-icons/gi"
import styled from "styled-components"
import { NavLink } from "react-router-dom" //use instead of html anchor tag


function Category() {
   return (
      <Types>
         <StyledLink to={'/meal/appetizer'}> 
            <GiShrimp />
            <h4>Appetizer</h4>
         </StyledLink>

         <StyledLink to={'/meal/main'}>
            <GiChickenOven />
            <h4>Main</h4>
         </StyledLink>

         <StyledLink to={'/meal/dessert'}>
            <GiCakeSlice />
            <h4>Dessert</h4>
         </StyledLink>

         <StyledLink to={'/meal/drink'}>
            <GiCoffeeCup />
            <h4>Drink</h4>
         </StyledLink>
      </Types>
   )
}


// STYLED COMPONENTS

const Types = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
   padding: 1em 1em;
   margin: 4em auto;
`

const StyledLink = styled(NavLink)`  // replaces NavLink
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   margin-right: .5rem;
   background: rgb(178, 34, 34);
   text-decoration: none;
   color: white;
   height: 4rem;
   width: 7rem;
   font-size: 1.2rem;
   border-radius: 10px;

   &:hover, &.active {
      background: rgba(178, 34, 34, 0.8);
   }
`





export default Category;


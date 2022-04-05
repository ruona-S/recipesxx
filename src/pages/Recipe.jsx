import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";



function Recipe() {
   
   const [info, setInfo] = useState({});
   const [activeTab, setActiveTab] = useState(["ingredients"]);
   let params = useParams();


   const fetchInfo = async () => {
      const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
      const recipeInfo = await data.json();
      setInfo(recipeInfo);
   }

   useEffect(() => {
      fetchInfo()
   }, [params.name]);



   /*const fetchInfo = async () => {

      const item = localStorage.getItem("info")
  
      if (item) { // if a recipe is already in local storage
        setInfo(JSON.parse(item)) // display that item
      } else {
         const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
         const recipeInfo = await data.json();
  
        localStorage.setItem("info", JSON.stringify(recipeInfo))  // local storage has to be a string, therefore, 'stringify
        setInfo(recipeInfo);
      }
    };*/



    return (
      <InfoContainer>
         <div>
            <h2>{info.title}</h2>
            <img src={info.image} alt="" />
         </div>

         <Content>
            <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab("ingredients")}>Ingredients</Button>
            <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab("instructions")}>Instructions</Button>
            {activeTab === 'ingredients' && (
               <ul>
                  {info.extendedIngredients.map((ingredient) => (
                     <li key={ingredient.id}>{ingredient.original}</li>
                  ))}
               </ul>
            )}
            {activeTab === 'instructions' && (
               <div>
                  <h3 dangerouslySetInnerHTML={{__html: info.summary}}></h3>
                  <h3 dangerouslySetInnerHTML={{__html: info.instructions}}></h3>
               </div>
            )}





         </Content>
      </InfoContainer>
    )



}



// STYLED COMPONENTS


const InfoContainer = styled.div`
      max-width: 1200px;
      margin: 10rem auto 5rem auto;
      display: grid;
      padding: 1em 1em;
      justify-content: center;

      @media (min-width: 990px) {
         grid-template-columns: repeat(2, 1fr);
         
      }


      .active {
         background-color: rgb(178, 34, 34);
         color: white;
      }

      h2 {
         padding: 2em 1em;
         margin-bottom: 2rem;
         margin-top: 0;
      }

      h3 {
         max-width: 500px;
         padding: 0em 0em;
         font-weight: 500;
         font-size: 1.2rem;
         line-height: 2rem;

         @media (min-width: 990px) {
            padding-left: 2em;
         }
      }

      li {
         font-size: 1.2rem;
         line-height: 2.5rem;
         list-style-type: none;

         @media (min-width: 990px) {
            padding-left: 2em;
         }
      }

      img {
         width: 100%;
         max-width: 500px;
         border-radius: 10px;

      }
    `

    const Button = styled.button`
      padding: 1em 1em;
      margin-right: 2rem;
      color: black;
      background-color: white;
      border: solid rgb(178, 34, 34) 2px;
      border-radius: 10px;
      font-weight: 700;
      margin-bottom: 4rem;

      @media (min-width: 990px) {
         margin-top: 0;
      }
    `

    const Content = styled.div`
      padding: 2em 1em;
    `





export default Recipe;
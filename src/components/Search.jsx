import styled from 'styled-components';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


function Search() {

   const [input, setInput] = useState("")
   const navigate = useNavigate();

   const submitHandler = (e) => {
      e.preventDefault();
      navigate("/searched/" + input)
   };


  return (
     <FormStyle onSubmit={submitHandler}>
         <div>
            <FaSearch></FaSearch>
            <input 
               onChange={(e) => setInput(e.target.value)} 
               type="text" 
               value={input} 
            />
         </div>
     </FormStyle>
  )
}


// STYLED COMPONENTS

const FormStyle = styled.form`
   
   
   div {
      position: relative;
      width: 100%;
      padding: 1em 1em;

      @media (min-width: 768px) {
        max-width: 70%;
        margin: 0 auto;
      }
   }

   input {
      border: none;
      background: rgb(178, 34, 34);
      padding: 1em 4em;
      border-radius: 10px;
      outline: none;
      width: 100%;
      color: white;
      font-size: 1rem;
   }

   svg {
      position: absolute;
      top: 50%;
      left: 3%;
      margin-right: 1em;
      transform: translate(100%, -50%);
      color: white;
   }
`





export default Search;



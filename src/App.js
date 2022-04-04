import Category from "./components/Category";
import Pages from "./pages/Pages";
import { Link, BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { GiForkKnifeSpoon } from "react-icons/gi";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiForkKnifeSpoon />
          <Logo to={"/"}>
            RECIPESXX
          </Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}



// STYLED COMPONENTS

const Logo = styled(Link)`
  font-size: 3rem;
  font-family: 'Romanesco', cursive;
  text-decoration: none;
  color: rgb(178, 34, 34);
`

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em 1em;
  height: 20vh;
  

  svg {
    font-size: 2rem;
    color: rgb(178, 34, 34);
  }
`




export default App;

import React from 'react';
import Home from './Home';
import Meal from './Meal';
import Searched from './Searched';
import Recipe from './Recipe';
import { Route, Routes } from "react-router-dom"



function Pages() {
  return (
      <div>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/meal/:type" element={<Meal />} />
            <Route path="/searched/:search" element={<Searched />} />
            <Route path="/recipe/:name" element={<Recipe />} />
         </Routes>
      </div>
  )
}

export default Pages;
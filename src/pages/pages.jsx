import Home from "./home"
import { Routes, Route } from "react-router-dom"
import Recipe from './recipe'
import FoodCards from "./food-cards"

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:value" element={<FoodCards type={'cuisine'} />} />
      <Route path="/searched/:value" element={<FoodCards type={'searched'} />} />
      <Route path="/recipe/:id" element={<Recipe />} />
    </Routes>
  )
}

export default Pages
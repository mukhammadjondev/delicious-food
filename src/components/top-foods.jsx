import { useEffect } from "react"
import { styled } from "styled-components"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import '@splidejs/splide/dist/css/splide.min.css'
import { Link } from "react-router-dom"
import FoodService from "../service/food"
import { useDispatch, useSelector } from "react-redux"
import { getPopularSuccess, getTopFoodsFailure, getTopFoodsStart, getVeggieSuccess } from "../slice/food"
import Loader from "./loader"

const TopFoods = ({type}) => {
  const {popular, veggie, isLoading} = useSelector(state => state.food)
  const dispatch = useDispatch()
  let topFoods
  if(type === 'popular') {
    topFoods = popular
  } else if(type === 'veggie') {
    topFoods = veggie
  }

  useEffect(() => {
    const getPopular = async () => {
      dispatch(getTopFoodsStart())
      try {
        if(type === 'popular') {
          const response = await FoodService.getPopular()
          dispatch(getPopularSuccess(response.recipes))
        } else if(type === 'veggie') {
          const response = await FoodService.getVeggie()
          dispatch(getVeggieSuccess(response.recipes))
        }
      } catch (error) {
        dispatch(getTopFoodsFailure(error))
      }
    }
    getPopular()
  }, [])

  return isLoading ? (
    <Loader />
  ) : (
    <Wrapper>
      <h3>{type === 'popular' ? 'Popular Picks' : 'Our Vegetarian Picks'}</h3>
      <Splide options={{perPage: type === 'popular' ? 3 : 2, arrows: false, pagination: false, drag: 'free', gap: '5rem'}}>
      {topFoods.map(recipe => (
        <SplideSlide key={recipe.id}>
          <Card>
            <Link to={`/recipe/${recipe.id}`}>
              <p>{recipe.title}</p>
              <img src={recipe.image} alt={recipe.title} />
              <Gradient />
            </Link>
          </Card>
        </SplideSlide>
      ))}
      </Splide>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`
const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5))
`

export default TopFoods
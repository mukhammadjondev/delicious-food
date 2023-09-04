import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { styled } from "styled-components"
import { motion } from "framer-motion"
import FoodService from "../service/food"
import { useDispatch, useSelector } from "react-redux"
import { getFoodCardSuccess } from "../slice/food"
import Loader from "../components/loader"

const FoodCards = ({type}) => {
  const {foodCards, isLoading} = useSelector(state => state.food)
  const {value} = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    const getCuisine = async name => {
      if(type === 'cuisine') {
        const response = await FoodService.getCuisine(name)
        dispatch(getFoodCardSuccess(response.results))
      } else if(type === 'searched') {
        const response = await FoodService.getSearched(name)
        dispatch(getFoodCardSuccess(response.results))
      }
    }
    getCuisine(value)
  }, [value])

  return isLoading ? (
    <Loader />
  ) : (
    <Grid animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0}} transition={{duration: 0.5}}>
      {foodCards.map(item => (
        <Card key={item.id}>
          <Link to={`/recipe/${item.id}`}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
          </Link>
        </Card>
      ))}
    </Grid>
  )

}

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`

export default FoodCards
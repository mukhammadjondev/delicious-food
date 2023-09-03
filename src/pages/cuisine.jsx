import { useState, useEffect, useCallback } from "react"
import { Link, useParams } from "react-router-dom"
import { styled } from "styled-components"
import { motion } from "framer-motion"
import FoodService from "../service/food"

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([])
  const {type} = useParams()

  useEffect(() => {
    const getCuisine = async name => {
      const response = await FoodService.getCuisine(name)
      setCuisine(response.results)
    }
    getCuisine(type)
  }, [type])

  return <Grid animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0}} transition={{duration: 0.5}}>
    {cuisine.map(item => (
      <Card key={item.id}>
        <Link to={`/recipe/${item.id}`}>
          <img src={item.image} alt={item.title} />
          <h4>{item.title}</h4>
        </Link>
      </Card>
    ))}
  </Grid>
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

export default Cuisine
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { styled } from "styled-components"
import FoodService from "../service/food"
import { getTopFoodsFailure, getTopFoodsStart, getFoodDetailSuccess } from "../slice/food"
import Loader from '../components/loader'

const Recipe = () => {
  const {foodDetail, isLoading} = useSelector(state => state.food)
  const [activeTab, setActiveTab] = useState('instructions')
  const {id} = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchDetails = async () => {
      dispatch(getTopFoodsStart())
      try {
        const response = await FoodService.getFoodDeatil(id)
        dispatch(getFoodDetailSuccess(response))
      } catch (error) {
        dispatch(getTopFoodsFailure(error))
      }
    }
    fetchDetails()
  }, [id])

  return isLoading ? (
    <Loader />
  ) : (
    <DetailWrapper>
      <div>
        <h2>{foodDetail.title}</h2>
        <img src={foodDetail.image} alt={foodDetail.title} />
      </div>
      <Info>
        <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}>
          Instructions
        </Button>
        <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}>
          Ingredients
        </Button>

        {activeTab === 'instructions' && (
          <div>
            <h4 dangerouslySetInnerHTML={{__html: foodDetail.summary}}></h4>
            <h4 dangerouslySetInnerHTML={{__html: foodDetail.instructions}}></h4>
          </div>
        )}
        {activeTab === 'ingredients' && (
          <ul>
            {foodDetail.extendedIngredients.map(ingredient => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h4 {
    margin-top: 1rem;
  }
  ul {
    margin-top: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
`

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`

const Info = styled.div`
  margin-left: 5rem;
`

export default Recipe
import axios from './api'

const FoodService = {
  async getPopular() {
    const {data} = await axios.get(`/random?apiKey=${import.meta.env.VITE_API_KEY}&number=9`)
    return data
  },
  async getVeggie() {
    const {data} = await axios.get(`/random?apiKey=${import.meta.env.VITE_API_KEY}&number=9&tags=vegetarian`)
    return data
  },
  async getCuisine(name) {
    const {data} = await axios.get(`/complexSearch?apiKey=${import.meta.env.VITE_API_KEY}&cuisine=${name}`)
    return data
  },
  async getFoodDeatil(id) {
    const {data} = await axios.get(`/${id}/information?apiKey=${import.meta.env.VITE_API_KEY}`)
    return data
  },
  async getSearched(name) {
    const {data} = await axios.get(`/complexSearch?apiKey=${import.meta.env.VITE_API_KEY}&query=${name}`)
    return data
  }
}

export default FoodService
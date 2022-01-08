import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'c66c992e33msh8f5922b4d96af4bp1f22a8jsn2938bbae181e'
    }
  })
}
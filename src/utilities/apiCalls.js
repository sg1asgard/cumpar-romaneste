import axios from 'axios'
import { HTTP, API_URL } from '@/config.js'
import Queries from '@/utilities/apiQueries.json'

export const apiCalls = {
  getTestData() {
    console.log('called')
    // Get User Me
    return axios.get(`${import.meta.env.VITE_BASE_API_URL}${Queries.fakeData.get}`)
  },

}

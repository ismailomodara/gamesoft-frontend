import axios from 'axios'
import Cookies from 'js-cookie'

const $axios = axios.create({
  baseURL: 'https://gamesoft-revised.herokuapp.com/'
})

if (Cookies.get('gamesoft-token')) {
  $axios.defaults.headers.common['x-auth-token'] = Cookies.get('gamesoft-token')
}

export default $axios

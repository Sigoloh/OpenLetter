import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000'
})

export async function checkAuthentication (authenticationHeader) {
  try {
    const authenticated = await instance.get('/users/authenticate', { headers: { Authorization: authenticationHeader } })
    console.log(authenticated)
    return authenticated
  } catch (error) {
    console.log('deu erro')
    console.log(error)
  }
}

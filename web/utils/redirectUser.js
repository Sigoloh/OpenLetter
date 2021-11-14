require('dotenv').config()
export const redirectUser = (location) => {
  window.location.href = `localhost:8080${location}`
}

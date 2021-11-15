require('dotenv').config()
export const redirectUser = (location) => {
  window.location.href = `http://localhost:8080${location}`
}

export const Cookies = {
  set: (cookieName, cookieValue, cookieExpires, cookieHttpOnly) => {
    console.log(cookieExpires)
    const date = new Date(cookieExpires)
    document.cookie =
      `${cookieName}=${cookieValue}; expires=${date.toUTCString()}; Secure; ${cookieHttpOnly ? 'HttpOnly' : ''}`
    console.log(`${cookieName}=${cookieValue}; max-age=${date.toUTCString()}; Secure; ${cookieHttpOnly ? 'HttpOnly' : ''}`
    )
  },
  get: (cookieName) => {
    const cookies = document.cookie
    const [, cookie] = cookies.split(`${cookieName}=`)
    return cookie
  }
}

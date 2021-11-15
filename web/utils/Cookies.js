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
    if (cookies === undefined) {
      return 'Cookie undefined'
    } else {
      const [, cookie] = cookies.split(`${cookieName}=`)
      if (cookie === undefined) {
        return 'Cookie undefined'
      } else {
        return cookie
      }
    }
  },
  delete: (cookieName) => {
    const cookies = document.cookie
    if (cookies === undefined) {
      return 'Cookie undefined'
    } else {
      const [, cookie] = cookies.split(`${cookieName}=`)
      if (cookie === undefined) {
        return 'Cookie undefined'
      } else {
        console.log(cookie)
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
      }
    }
  }
}

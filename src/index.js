import './tailwind.css'
import './magnifying-glass.png'
import './images/button.png'
import './images/twitter.png'
import './images/addfollow.png'
import './images/layoutflow.png'
import * as init from './scripts/init.js'
import * as addremove from './scripts/addremove.js'
// import * as login from './scripts/login.js'
import * as register from './scripts/register.js'
import * as postTweet from './scripts/postTweet.js'
import * as timeline from './scripts/timeline.js'
import * as mockroblog from './mockroblog.js'

window.addremove = addremove
// window.login = login
window.register = register
window.timeline = timeline
window.postTweet = postTweet
window.init = init
window.mockroblog = mockroblog


// var loginButton = document.getElementById('login-form-submit')
document.getElementById('login-form-submit').addEventListener('click', (e) => {
  e.preventDefault()
  window.location.replace('./usertimeline.html?username=self')
  console.log('test')
  const loginForm = document.getElementById('login-form')
  const username = loginForm.username.value
  const password = loginForm.password.value

  const result = mockroblog.authenticateUser(username, password)

  // if (username === "user" && password === "web_dev") {
  if (result != null) {
    window.alert('You have successfully logged in.')
    window.location.replace('./usertimeline.html?username=self')
    window.localStorage.setItem('user_name', username)
    // location.reload();
  } else {
    window.alert('Incorrect USERNAME or PASSWORD.')
    window.location.reload()
  }
})

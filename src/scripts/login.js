import * as mockroblog from './mockroblog.js'

var loginForm = document.getElementById('login-form')
var loginButton = document.getElementById('login-form-submit')

loginButton.addEventListener('click', (e) => {
  e.preventDefault()
  const username = loginForm.username.value
  const password = loginForm.password.value
  console.log(username)
  const result = mockroblog.authenticateUser(username, password)

  // if (username === "user" && password === "web_dev") {
  if (result != null) {
    window.alert('You have successfully logged in.')

    window.location.replace('/usertimeline.html?username=self')
    window.localStorage.setItem('user_name', username)

    // location.reload();
  } else {
    window.alert('Incorrect USERNAME or PASSWORD.')
    // window.location.reload()
  }
})

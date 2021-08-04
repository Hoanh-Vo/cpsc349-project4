import * as mockroblog from './mockroblog.js'

var loginForm = document.getElementById('login-form')
var loginButton = document.getElementById('login-form-submit')

loginButton.addEventListener('click', (e) => {
  e.preventDefault()
  const username = loginForm.username.value
  const password = loginForm.password.value
  let result = mockroblog.authenticateUser(username, password)

  fetch('http://localhost:5000/users/?username='+username+'&password='+password)
  .then(response => response.json())
  .then(function(data) {
    console.log(data);
    if(data['resources'].length == 0){
      window.alert('Incorrect USERNAME or PASSWORD.')

    }
    else{
      window.alert('You have successfully logged in.')
      window.localStorage.setItem('user_name', username)
      window.location.replace('/usertimeline.html?username=self')
    }

  })

  // if (username === "user" && password === "web_dev") {
  // if (result != null) {
  //   window.alert('You have successfully logged in.')

  //   window.location.replace('/usertimeline.html?username=self')
  //   window.localStorage.setItem('user_name', username)

  //   // location.reload();
  // } else {
  //   window.alert('Incorrect USERNAME or PASSWORD.')
  //   // window.location.reload()
  // }
})

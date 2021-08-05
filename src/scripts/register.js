import * as mockroblog from './mockroblog.js'

const registerForm = document.getElementById('register-form')
const registerButton = document.getElementById('register-form-submit')

registerButton.addEventListener('click', (e) => {
  e.preventDefault()
  const email = registerForm.email.value
  const username = registerForm.username.value
  const password = registerForm.password.value
  

//   fetch('http://localhost:5000/users/?username='+username)
//       .then(response => response.json())
//       .then(function(username_) {
// let username_array = username_['resources']

//         if (username_array.length > 0){
//           window.alert('User Already exists')
//           window.location.reload() 
//         }
//       else{
let opts = {
  "username": username,
  "email": email,
  "password": password
}
  fetch('http://localhost:5000/users/', {
    method: 'post',
    body: JSON.stringify(opts)
      }).then(function(response_) {
        if (response_.status == 500){
              window.alert('User Already exists')
    window.location.reload()
        }else{
              window.alert('Account Created Successfully')
    window.location.replace('/usertimeline.html?username=self')
    window.localStorage.setItem('user_name', username)
        }
        
        // window.location.replace('./index.html')
        // window.localStorage.setItem('user_name', username)
      })
    // }
    // })


  // const result = mockroblog.createUser(username, email, password)

  // // if (username === "user" && password === "web_dev") {
  // if (result != null) {
  //   window.alert('Account Created Successfully')
  //   window.location.replace('./index.html')
  //   window.localStorage.setItem('user_name', username)
  //   // location.reload();
  // } else {
  //   window.alert('User Already exists')
  //   window.location.reload()
  // }
})

import * as mockroblog from './mockroblog.js'

const postForm = document.getElementById('postTweet')
const tweetButton = document.getElementById('postTweetButton')

tweetButton.addEventListener('click', (e) => {
  e.preventDefault()
  const loggedInUser = window.localStorage.getItem('user_name')
  console.log('TEST')
  let text = postForm.tweet.value
  // text = mockroblog.postMessage(userId, text)
  fetch('http://localhost:5000/users/?username='+loggedInUser)
  .then(response => response.json())
  .then(function(username_) {
    var logged_in_user_id = username_['resources'][0]['id']
    console.log(logged_in_user_id)
let opts={
    "user_id": logged_in_user_id,
    "text" : text
}
console.log('TEST2')
  fetch('http://localhost:5000/posts/', {
    method: 'POST',
    body: JSON.stringify(opts)
      }).then(function(response_) {
        if (response_.status == 500){
              window.alert('Error has Occurred')
              console.log('TEST3')
        }else{
            console.log(response_)
              window.alert('Tweet Posted Succesfully')
        }
        
        // window.location.replace('./index.html')
        // window.localStorage.setItem('user_name', username)
      })
    })



  
  if (text != null && typeof text !== 'undefined') {
    window.location.replace('./usertimeline.html?username=self')
    //  window.localStorage.setItem('user_name', username)
  } else {
    window.alert('Please write something!')
    window.location.reload()
  }
})

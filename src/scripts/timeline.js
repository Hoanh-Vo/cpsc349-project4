import * as mockroblog from './mockroblog.js'

export function getUserbyID (id) {
  if (id === 1) {
    return {
      id: 1,
      username: 'ProfAvery',
      email: 'kavery@fullerton.edu',
      password: 'password'
    }
  } else if (id === 2) {
    return {
      id: 2,
      username: 'KevinAWortman',
      email: 'kwortman@fullerton.edu',
      password: 'qwerty'
    }
  } else if (id === 3) {
    return {
      id: 3,
      username: 'Beth_CSUF',
      email: 'beth.harnick.shapiro@fullerton.edu',
      password: 'secret'
    }
  }

  return null
}

const sPath = window.location.pathname
const sPage = sPath.substring(sPath.lastIndexOf('/') + 1)

if (sPage === 'usertimeline.html') {
  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  const currentPageUser = urlParams.get('username')
  const loggedInUser = window.localStorage.getItem('user_name')

  // if (currentPageUser === loggedInUser || currentPageUser === 'self') {
  //   document.getElementById('follow_unfollow_button').innerHTML = 'ME'
  // } else if (mockroblog.isfollowing(currentPageUser, loggedInUser) === true) {
  //   document.getElementById('follow_unfollow_button').innerHTML = 'UNFOLLOW'
  // } else {
  //   document.getElementById('follow_unfollow_button').innerHTML = 'FOLLOW'
  // }
  if (currentPageUser === loggedInUser || currentPageUser === 'self') {
      document.getElementById('follow_unfollow_button').innerHTML = 'ME'
    } else {
      console.log('test')
  fetch('http://localhost:5000/users/?username='+loggedInUser)
  .then(response => response.json())
  .then(function(username_) {
    var logged_in_user_id = username_['resources'][0]['id']
    fetch('http://localhost:5000/users/?username='+currentPageUser)
    .then(response => response.json())
    .then(function(username_page_) {
      var page_user_id= username_page_['resources'][0]['id']
      fetch('http://localhost:5000/followers/?follower_id='+logged_in_user_id+'&following_id='+page_user_id)  
      .then(response => response.json())
    .then(function(compare_return) {
      let compare_final = compare_return['resources']
      if (compare_final.length > 0){
        document.getElementById('follow_unfollow_button').innerHTML = 'UNFOLLOW'
      } else {
        document.getElementById('follow_unfollow_button').innerHTML = 'FOLLOW'
      }
  })})})}


  document.getElementById('follow_unfollow_button').addEventListener('click', (e) => {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const currentPageUser = urlParams.get('username')
    const loggedInUser = window.localStorage.getItem('user_name')

    if (currentPageUser === loggedInUser || currentPageUser === 'self') {
      window.alert("You Can't Follow/Unfollow yourself")
    } 
    else if (document.getElementById('follow_unfollow_button').innerHTML == 'UNFOLLOW'){

      document.getElementById('follow_unfollow_button').innerHTML = 'FOLLOW'
      fetch('http://localhost:5000/users/?username='+loggedInUser)
      .then(response => response.json())
      .then(function(username_) {
        var logged_in_user_id = username_['resources'][0]['id']
        fetch('http://localhost:5000/users/?username='+currentPageUser)
        .then(response => response.json())
        .then(function(username_page_) {
          var page_user_id= username_page_['resources'][0]['id']
          fetch('http://localhost:5000/followers/?follower_id='+logged_in_user_id+'&following_id='+page_user_id)
          .then(response => response.json()).then(function(entryid_) {
            var entryid=entryid_['resources'][0]['id']

            var requestOptions = {
              method: 'DELETE',
              redirect: 'follow'
            };
            fetch("http://localhost:5000/followers/"+entryid, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
          })

          })})

 
    }
    else if (document.getElementById('follow_unfollow_button').innerHTML == 'FOLLOW'){
      document.getElementById('follow_unfollow_button').innerHTML = 'UNFOLLOW'
      fetch('http://localhost:5000/users/?username='+loggedInUser)
      .then(response => response.json())
      .then(function(username_) {
        var logged_in_user_id = username_['resources'][0]['id']
        fetch('http://localhost:5000/users/?username='+currentPageUser)
        .then(response => response.json())
        .then(function(username_page_) {
          var page_user_id= username_page_['resources'][0]['id']
          let opts = {
            "follower_id": logged_in_user_id,
            "following_id": page_user_id
          }
          fetch('http://localhost:5000/followers/', {
          method: 'post',
          body: JSON.stringify(opts)
            }).then(function(response) {
            alert(response.json())
            })

          })})
    }
    // else if (mockroblog.isfollowing(currentPageUser, loggedInUser) === true) {
    //   window.alert('You have Unfollowed  ' + currentPageUser)
    //   const loggedinuserID = mockroblog.getUserbyID(loggedInUser).id
    //   const usertofollowID = mockroblog.getUserbyID(currentPageUser).id
    //   mockroblog.removeFollower(loggedinuserID, usertofollowID)
    //   document.getElementById('follow_unfollow_button').innerHTML = 'FOLLOW'
    // } else {
    //   window.alert('You are now following ' + currentPageUser)
    //   const loggedinuserID = mockroblog.getUserbyID(loggedInUser).id
    //   const usertofollowID = mockroblog.getUserbyID(currentPageUser).id
    //   mockroblog.addFollower(loggedinuserID, usertofollowID)
    //   document.getElementById('follow_unfollow_button').innerHTML = 'UNFOLLOW'
    // }
  })
}
// window.onload = window.alert(window.localStorage.getItem("user_name"));

// if(sPage === "publishTimeline.html"){
//     window.mockroblog = mockroblog
//     let result = publicTimeline()
//     const display = document.querySelector('#timeline-json')
//     const timeline = mockroblog.getPublicTimeline()
//      display.textContent= result
//     // display.textContent = JSON.stringify(timeline, null, 2)
//  }
if (sPage === 'publishtimeline.html') {
  fetch('http://localhost:5000/posts/')
  .then(response => response.json())
  .then(function(timeline_) {
    let timeline = timeline_['resources']
    const container = document.getElementById('timeline-json')
    for (let i = 0; i < timeline.length; i++) {
      fetch('http://localhost:5000/users/?id='+timeline[i].user_id)
    .then(response => response.json())
    .then(function(username_) {
      let username = username_['resources'][0]
      // const username = getUserbyID(timeline[i].user_id)
      container.innerHTML += "<li class='divD' >" +
            "<div class=''>" + "<img src='https://i.pravatar.cc/50' width='40' height='40' class='rounded-full'>" +
                "<div class='div_timeline'>" + "<a href='usertimeline.html?username=" + username.username + "'class='a_timeline'>" + username.username + "</a> <span class='span_timeline2'>" +
                timeline[i].text + '</span> </div>' +
            '</div>' +
            '<div >' + timeline[i].timestamp + '</div>' +

            '<div>' +
                '<svg class="h-8 w-8 text-blue-500"  fill="blue" width="18" height="18" viewBox="0 0 24 24" stroke="currentColor">'+
                '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/>'+
                '</svg>'                    
           +'</div>' 
            +
            '</li>'
      container.innerHTML += '<br>'
    }) }
  })

  // const timeline = mockroblog.getPublicTimeline()
  // let container
  // const container = document.getElementById('timeline-json')

  // for (let i = 0; i < timeline.length; i++) {
  //   const username = getUserbyID(timeline[i].user_id)
  //   container.innerHTML += "<li class='divD' >" +
  //         "<div class=''>" + "<img src='https://i.pravatar.cc/50' width='40' height='40' class='rounded-full'>" +
  //             "<div class='div_timeline'>" + "<a href='usertimeline.html?username=" + username.username + "'class='a_timeline'>" + username.username + "</a> <span class='span_timeline2'>" +
  //             timeline[i].text + '</span> </div>' +
  //         '</div>' +
  //         '<div >' + timeline[i].timestamp + '</div>' +
  //         '</li>'
  //   container.innerHTML += '<br>'
  // }
} else if (sPage === 'usertimeline.html') {
  // let loggedInUser = window.localStorage.getItem('user_name')
  const queryString = window.location.search

  const urlParams = new URLSearchParams(queryString)
  let loggedInUser = urlParams.get('username')
  if (loggedInUser === 'self') {
    loggedInUser = window.localStorage.getItem('user_name')
    console.log(loggedInUser)
  }
  console.log(loggedInUser)
  fetch('http://localhost:5000/users/?username='+loggedInUser)
  .then(response => response.json())
  .then(function(username_) {
    var username = username_['resources'][0]
    fetch('http://localhost:5000/posts/?user_id='+username.id)
    .then(response => response.json())
    .then(function(timeline_) {
      let timeline = timeline_['resources']
  // const timeline = mockroblog.getUserTimeline(username)
  // let container
  const container = document.getElementById('timeline-json')

  for (let i = 0; i < timeline.length; i++) {
    // const username = getUserbyID(timeline[i].user_id)
    container.innerHTML += "<li class='divD' >" +
          "<div class=''>" + "<img src='https://i.pravatar.cc/50' width='40' height='40' class='rounded-full'>" +
              "<div class='div_timeline'>" + "<a href='usertimeline.html?username=" + username.username + "'class='a_timeline'>" + username.username + "</a> <span class='span_timeline2'>" +
              timeline[i].text + '</span> </div>' +
          '</div>' +
          '<div >' + timeline[i].timestamp + '</div>' +
          '</li>'
    container.innerHTML += '<br>'
  }

})})
} else if (sPage === 'hometimeline.html') {
  // let container
  fetch('http://localhost:5000/posts/')
  .then(response => response.json())
  .then(function(timeline_) {
    let timeline = timeline_['resources']
    const loggedInUser = window.localStorage.getItem('user_name')
    const container = document.getElementById('timeline-json')
    fetch('http://localhost:5000/users/?username='+loggedInUser)
    .then(response => response.json())
    .then(function(loggedinusername_) {
      var loggedinusername = loggedinusername_['resources'][0]['id']
      fetch('http://localhost:5000/followers/?follower_id='+loggedinusername)
      .then(response => response.json())
      .then(function(followers_) {
        var followers = followers_['resources']
        for (let j = 0; j < followers.length; j++) {
          //console.log(followers)
    for (let i = 0; i < timeline.length; i++) {
      if (followers[j]['following_id'] == timeline[i].user_id){
        console.log(followers[j]['following_id'])
      fetch('http://localhost:5000/users/?id='+timeline[i].user_id)
    .then(response => response.json())
    .then(function(username_) {
      let username = username_['resources'][0]
      // const username = getUserbyID(timeline[i].user_id)
      container.innerHTML += "<li class='divD' >" +
            "<div class=''>" + "<img src='https://i.pravatar.cc/50' width='40' height='40' class='rounded-full'>" +
                "<div class='div_timeline'>" + "<a href='usertimeline.html?username=" + username.username + "'class='a_timeline'>" + username.username + "</a> <span class='span_timeline2'>" +
                timeline[i].text + '</span> </div>' +
            '</div>' +
            '<div >' + timeline[i].timestamp + '</div>' +
            
            
            '<div>' +
                '<svg class="h-8 w-8 text-blue-500"  fill="blue" width="18" height="18" viewBox="0 0 24 24" stroke="currentColor">'+
                '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/>'+
                '</svg>'                    
           +'</div>' 
            +

            '</li>'
      container.innerHTML += '<br>'
    }) 
  }}
  }
   })
  })
})

}

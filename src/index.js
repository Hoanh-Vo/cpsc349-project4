import './tailwind.css'
import './magnifying-glass.png'

import './images/button.png'
import './images/twitter.png'

import * as init from './scripts/init.js'
import * as addremove from './scripts/addremove.js'
import * as login from './scripts/login.js'
import * as register from './scripts/register.js'
import * as timeline from './scripts/timeline.js'
import * as mockroblog from './scripts/mockroblog.js'
window.init = init
window.addremove = addremove
window.login = login
window.register = register
window.timeline = timeline
window.mockroblog = mockroblog

const searchForm = document.querySelector('#search')
const keyword = document.querySelector('#keyword')

const resultDiv = document.querySelector('#results')
const result = document.querySelector('#result-value')

async function search (term = '') {
  const query = encodeURIComponent(`%%${term}%%`)
  const response = await fetch(`http://localhost:5000/posts/?text=${query}`)
  const data = await response.json()

  result.textContent = JSON.stringify(data.resources, null, 2)
  resultDiv.hidden = !term
}

searchForm.addEventListener('submit', (event) => {
  event.preventDefault()
})

keyword.addEventListener('input', (event) => {
  search(keyword.value)
})

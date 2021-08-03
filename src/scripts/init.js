import * as mockroblog from './mockroblog.js'
window.mockroblog = mockroblog

const timeline = mockroblog.getPublicTimeline()

const display = document.querySelector('#timeline-json')
display.textContent = JSON.stringify(timeline, null, 2)

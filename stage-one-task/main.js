import './style.css'

const weekday = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

let date = new Date()

let currentDay = weekday[date.getDay()]

let time = date.getTime()

document.querySelector('#currentDayOfTheWeek').innerHTML = currentDay
document.querySelector('#currentUTCTime').innerHTML = time

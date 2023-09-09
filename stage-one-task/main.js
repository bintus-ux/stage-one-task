function updateCurrentDayOfWeek() {
  const currentDate = new Date()
  const options = { weekday: 'long' }
  const currentDayOfWeek = currentDate.toLocaleString('en-US', options)
  const currentDayElement = document.getElementById('currentDayOfTheWeek')
  currentDayElement.textContent = currentDayOfWeek
}

function updateCurrentUTCTime() {
  const currentDate = new Date()
  const currentUTCTime = currentDate.getTime()
  const currentUTCTimeElement = document.getElementById('currentUTCTime')
  currentUTCTimeElement.textContent = currentUTCTime
}

updateCurrentDayOfWeek()
updateCurrentUTCTime()

setInterval(updateCurrentUTCTime, 1000)

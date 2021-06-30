const d = new Date()
const day = d.getDay()
const date = d.getDate()
const month = d.getMonth()
const year = d.getFullYear()

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const dateString = `${days[day]}, ${date} ${months[month]}, ${year}\n3:00 PM (1 hour 30 minutes)`
document.getElementById('datetime').innerText = dateString

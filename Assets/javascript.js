let DateTime = luxon.DateTime
const now = DateTime.now()
const time = now.toLocaleString(DateTime.DATETIME_FULL)

$("#currentDay").text(time)

let DateTime = luxon.DateTime
const now = DateTime.now()
const time = now.toLocaleString(DateTime.DATETIME_FULL)
let tasks = []


// captures current local time and codeify's to readable state
$("#currentDay").text(time)

// Dynamically captures hour at current local time
function hourUpdater() {
    var currentHour = DateTime.local().hour
    $(".description").each(function() {
        var blockHour = parseInt(
            $(this)
            .attr("id")
            .split("-") [1]
        )
        if (blockHour < currentHour) {
            $(this).addClass("past")
        }   else if (blockHour === currentHour) {
            $(this).removeClass("past")
            $(this).addClass("present")
        } else {
            $(this).removeClass("past")
            $(this).removeClass("present")
            $(this).addClass("future")
        }
    })
}

hourUpdater()
// runs hour updater at setInterval
var interval = setInterval(hourUpdater, 15000)


// Captures task created into local storage

$('.saveBtn').click(function() {
    var taskText = $(this).prev().val();
    var hour = $(this).prev().attr("id")

    localStorage.setItem(hour, taskText)
});


// Template Literal to check local storage and display tasks

for (let i=8; i < 20 ; i++){
    $(`#hour-${i}`).val(localStorage.getItem(`hour-${i}`))
}

let DateTime = luxon.DateTime
const now = DateTime.now()
const time = now.toLocaleString(DateTime.DATETIME_FULL)
var tasks = {};


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

var interval = setInterval(hourUpdater, 15000)


/* // allows editing of task (requires text before allowing edit *need to fix)
$(".description").on("click", function () {
    var text = $(this).text().trim();

    var textInput = $("<textarea>")
        .val(text);

    $(this).replaceWith(textInput)
    textInput.trigger("focus");
});

$(".description").on("blur", function () {
    var text = $(this)
        .val()
        .trim();

    var taskC = $("<div>")
        .addClass("col-10 description")
        .text(text)

    $(this).replaceWith(taskC)
}); */
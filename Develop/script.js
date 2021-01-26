$(".saveBtn").click(function() {
    let time=$(this).parent().attr("id")
    let text=$(this).siblings(".description").val(); 
    localStorage.setItem(time, text)
})
$(".deleteBtn").click(function() {
    let time=$(this).parent().attr("id")
    let text=$(this).siblings(".description").empty(); 
    localStorage.setItem(time, text)
})

function changeColor() {
    let currentHour = moment().hours()
    console.log(currentHour)
$(".time-block").each(function() {
let calendarHour= parseInt($(this).attr("id"))
console.log (calendarHour)
if(calendarHour<currentHour) {
    $(this).addClass("past")
}
else if(calendarHour===currentHour) { 
    $(this).removeClass("past")
    $(this).addClass("present")
}
else {
    $(this).removeClass("past")
    $(this).removeClass("present")
    $(this).addClass("future")
}
})
}
changeColor()


$("#9 .description").val(localStorage.getItem("9"))
$("#10 .description").val(localStorage.getItem("10"))
$("#11 .description").val(localStorage.getItem("11"))
$("#12 .description").val(localStorage.getItem("12"))
$("#1 .description").val(localStorage.getItem("1"))
$("#2 .description").val(localStorage.getItem("2"))
$("#3 .description").val(localStorage.getItem("3"))
$("#4 .description").val(localStorage.getItem("4"))
$("#5 .description").val(localStorage.getItem("5"))



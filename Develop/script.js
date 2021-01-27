$(".saveBtn").click(function() {
    let time=$(this).parent().attr("id")
    let text=$(this).siblings(".description").val(); 
    localStorage.setItem(time, text)
})
$(".deleteBtn").click(function() {
    let time=$(this).parent().attr("id")
    let text=$(this).siblings(".description").remove; 
    localStorage.setItem(time, text)
})

function changeColor() {
    let currentHour = moment().hours()
$(".time-block").each(function() {
let calendarHour= parseInt($(this).attr("id"))

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


$("#1 .description").val(localStorage.getItem("1"))
$("#2 .description").val(localStorage.getItem("2"))
$("#3 .description").val(localStorage.getItem("3"))
$("#4 .description").val(localStorage.getItem("4"))
$("#5 .description").val(localStorage.getItem("5"))
$("#6 .description").val(localStorage.getItem("6"))
$("#7 .description").val(localStorage.getItem("7"))
$("#8 .description").val(localStorage.getItem("8"))
$("#9 .description").val(localStorage.getItem("9"))

var NowDate = new Date();
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var sMonth = NowDate.getMonth() + 1;
var sDay = NowDate.getDate();
var sYear = NowDate.getFullYear();
var sHour = NowDate.getHours();
var sMinutes = NowDate.getMinutes();
var sSeconds = NowDate.getSeconds();
var eDisplayDate = document.getElementById('displayJsDate');
eDisplayDate.innerHTML = sMonth+'-'+sDay+'-'+sYear+' '+sHour+':'+sMinutes+':'+sSeconds;
function updateCalender() {
    const now = new Date();
    const day = now.getDate();
    const monthName = ["January", "February", "March", "April", "May", "June",
                       "July", "August", "September", "October", "November", "December"];
    const month = monthName[now.getMonth()];

    document.getElementById("day").textContent = day;
    document.getElementById("month").textContent = month;

}

updateCalender();


let countdown;

document.getElementById("startButton").addEventListener("click", function() {
    const selectedDate = new Date(document.getElementById("inputDate").value);
    
    if (!selectedDate.getTime() || selectedDate <= new Date()) {
        alert("請選擇一個未來的日期！");
        return;
    }

    clearInterval(countdown);
    startCountdown(selectedDate);
});

function startCountdown(endDate) {
    countdown = setInterval(() => {
        const now = new Date();
        const timeDifference = endDate - now;

        if (timeDifference <= 0) {
            clearInterval(countdown);
            document.getElementById("timer").textContent = "時間到！";
            return;
        }
        
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        
        document.getElementById("timer").textContent = `${days}天 ${hours}小時 ${minutes}分 ${seconds}秒`;
    }, 1000);
}

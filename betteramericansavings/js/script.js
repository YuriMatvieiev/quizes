const q1 = document.getElementById("q1");
const q2 = document.getElementById("q2");
const sorry = document.getElementById("sorry");
const success = document.getElementById("success");
const loading1 = document.getElementById("loading-1");
const loading2 = document.getElementById("loading-2");
const loading3 = document.getElementById("loading-3");

const q1BtnYes = document.querySelector(".q1-btn-yes");
const q1BtnNo = document.querySelector(".q1-btn-no");
const q2BtnYes = document.querySelector(".q2-btn-yes");
const q2BtnNo = document.querySelector(".q2-btn-no");
const backButton = document.querySelector(".back-button");

const timer = document.getElementById("js-timer");

q1BtnYes.addEventListener("click", () => {
  q1.style.display = "none";
  q2.style.display = "block";
});

q1BtnNo.addEventListener("click", () => {
  q1.style.display = "none";
  q2.style.display = "block";
});

q2BtnYes.addEventListener("click", () => {
  q2.style.display = "none";
  sorry.style.display = "block";
});

q2BtnNo.addEventListener("click", showLoading1);

function showLoading1() {
  q2.style.display = "none";
  loading1.style.display = "block";

  setTimeout(function () {
    loading1.style.display = "none";
    loading2.style.display = "block";

    setTimeout(function () {
      loading2.style.display = "none";
      loading3.style.display = "block";

      setTimeout(function () {
        loading3.style.display = "none";
        success.style.display = "block";
        startTimer();
      }, 1500);
    }, 1500);
  }, 1500);
}
backButton.addEventListener("click", goBack);

function goBack() {
  q2.style.display = "none";
  sorry.style.display = "none";
  success.style.display = "none";
  loading1.style.display = "none";
  loading2.style.display = "none";
  loading3.style.display = "none";
  q1.style.display = "block";
}

function startTimer() {
  let time = 4 * 60;

  const timerInterval = setInterval(function () {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    timer.textContent = `${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;

    if (time === 0) {
      clearInterval(timerInterval);
    } else {
      time--;
    }
  }, 1000);
}

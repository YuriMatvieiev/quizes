// Отримуємо поточну дату
const currentDate = new Date();

// Отримуємо день тижня (використовуючи масив днів тижня)
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const dayOfWeek = daysOfWeek[currentDate.getDay()];

// Отримуємо місяць, день та рік
const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Додаємо 1, так як місяці в JavaScript починаються з 0
const day = currentDate.getDate().toString().padStart(2, "0");
const year = currentDate.getFullYear();

// Встановлюємо текст для елементу з id "currentDate"
document.getElementById(
  "currentDate"
).textContent = `${dayOfWeek}, ${month}/${day}/${year}`;

document.addEventListener("DOMContentLoaded", function () {
  var tempCssClass;

  setTimeout(function () {
    document.getElementById("initTyping").remove();
    document.getElementById("msg1").classList.remove("hidden");
    document
      .getElementById("msg1")
      .insertAdjacentHTML("afterend", typingEffect());
    setTimeout(function () {
      document.querySelectorAll(".temp-typing").forEach(function (element) {
        element.remove();
      });
      document.getElementById("msg2").classList.remove("hidden");
      document
        .getElementById("msg2")
        .insertAdjacentHTML("afterend", typingEffect());
      scrollToBottom();
      setTimeout(function () {
        document.querySelectorAll(".temp-typing").forEach(function (element) {
          element.remove();
        });
        document.getElementById("msg3").classList.remove("hidden");
        document
          .getElementById("msg3")
          .insertAdjacentHTML("afterend", typingEffect());
        scrollToBottom();
        setTimeout(function () {
          document.querySelectorAll(".temp-typing").forEach(function (element) {
            element.remove();
          });
          document.getElementById("msg4").classList.remove("hidden");
        }, 0);
      }, 1750);
    }, 1250);
  }, 750);

  var buttonValue;
  var currentStep;

  document.querySelectorAll("button.chat-button").forEach(function (button) {
    button.addEventListener("click", function () {
      currentStep = button.getAttribute("data-form-step");
      buttonValue = button.getAttribute("data-form-value");

      if (currentStep == 1) {
        document
          .querySelector("#agentBlock2 .agent-chat")
          .insertAdjacentHTML("afterend", typingEffect());
        document.getElementById("msg4").classList.add("hidden");
        document.getElementById("userBlock1").classList.remove("hidden");
        scrollToBottom();
        setTimeout(function () {
          document.getElementById("agentBlock2").classList.remove("hidden");
          scrollToBottom();
          setTimeout(function () {
            document
              .querySelectorAll(".temp-typing")
              .forEach(function (element) {
                element.remove();
              });
            document.getElementById("msg6").classList.remove("hidden");
            document
              .getElementById("msg6")
              .insertAdjacentHTML("afterend", typingEffect());
            scrollToBottom();
            setTimeout(function () {
              document
                .querySelectorAll(".temp-typing")
                .forEach(function (element) {
                  element.remove();
                });
              document.getElementById("msg7").classList.remove("hidden");
              document
                .getElementById("msg7")
                .insertAdjacentHTML("afterend", typingEffect());
              scrollToBottom();
              setTimeout(function () {
                document
                  .querySelectorAll(".temp-typing")
                  .forEach(function (element) {
                    element.remove();
                  });
                document.getElementById("msg8").classList.remove("hidden");
                scrollToBottom();
              }, 0);
            }, 1750);
          }, 2250);
        }, 50);
      }

      if (currentStep == 2) {
        document
          .querySelector("#agentBlock3 .agent-chat")
          .insertAdjacentHTML("afterbegin", typingEffect());
        document.getElementById("msg8").classList.add("hidden");
        document.getElementById("userBlock2").classList.remove("hidden");
        if (buttonValue == "No") {
          document.getElementById("msg9no").classList.remove("hidden");
          document.getElementById("hdnApprovalStatus").value = "no";
        } else {
          document.getElementById("msg9yes").classList.remove("hidden");
        }
        scrollToBottom();
        setTimeout(function () {
          document.getElementById("agentBlock3").classList.remove("hidden");
          scrollToBottom();
          setTimeout(function () {
            document
              .querySelectorAll(".temp-typing")
              .forEach(function (element) {
                element.remove();
              });
            document.getElementById("msg10").classList.remove("hidden");
            document
              .getElementById("msg10")
              .insertAdjacentHTML("afterend", typingEffect());
            scrollToBottom();
            setTimeout(function () {
              document
                .querySelectorAll(".temp-typing")
                .forEach(function (element) {
                  element.remove();
                });
              document.getElementById("msg11").classList.remove("hidden");
              scrollToBottom();
            }, 0);
          }, 1750);
        }, 50);
      }

      if (currentStep == 3) {
        document
          .querySelector("#agentBlock4 .agent-chat")
          .insertAdjacentHTML("afterbegin", typingEffect());
        document.getElementById("msg11").classList.add("hidden");
        document.getElementById("userBlock3").classList.remove("hidden");
        if (buttonValue == "Yes") {
          document.getElementById("msg12yes").classList.remove("hidden");
        } else {
          document.getElementById("msg12no").classList.remove("hidden");
          setTimeout(function () {
            document.getElementById("agentBlock4").classList.remove("hidden");
            scrollToBottom();
            setTimeout(function () {
              document
                .querySelectorAll(".temp-typing")
                .forEach(function (element) {
                  element.remove();
                });
              document.getElementById("msg18").classList.remove("hidden");
              document
                .getElementById("msg18")
                .insertAdjacentHTML("afterend", typingEffect());
              scrollToBottom();
              setTimeout(function () {
                document
                  .querySelectorAll(".temp-typing")
                  .forEach(function (element) {
                    element.remove();
                  });
                document.getElementById("msg19").classList.remove("hidden");
                scrollToBottom();
                setTimeout(function () {
                  document
                    .getElementById("disconnected")
                    .classList.remove("hidden");
                  scrollToBottom();
                }, 1250);
              }, 1250);
            }, 1250);
          }, 1250);
          return false;
        }
        scrollToBottom();
        if (document.getElementById("hdnApprovalStatus").value == "no") {
          setTimeout(function () {
            document.getElementById("agentBlock4").classList.remove("hidden");
            scrollToBottom();
            setTimeout(function () {
              document
                .querySelectorAll(".temp-typing")
                .forEach(function (element) {
                  element.remove();
                });
              document.getElementById("msg18").classList.remove("hidden");
              document
                .getElementById("msg18")
                .insertAdjacentHTML("afterend", typingEffect());
              scrollToBottom();
              setTimeout(function () {
                document
                  .querySelectorAll(".temp-typing")
                  .forEach(function (element) {
                    element.remove();
                  });
                document.getElementById("msg19").classList.remove("hidden");
                document
                  .getElementById("msg19")
                  .insertAdjacentHTML("afterend", typingEffect());
                scrollToBottom();
                document
                  .querySelectorAll(".temp-typing")
                  .forEach(function (element) {
                    element.remove();
                  });
              }, 2250);
            }, 1750);
          }, 250);
        } else {
          document.getElementById("PrimaryNumber").classList.remove("hidden");
          document.getElementById("msg14approved").classList.remove("hidden");
          document.getElementById("msg16approved").classList.remove("hidden");
          scrollToBottom();
          setTimeout(function () {
            document.getElementById("agentBlock4").classList.remove("hidden");
            scrollToBottom();
            setTimeout(function () {
              document
                .querySelectorAll(".temp-typing")
                .forEach(function (element) {
                  element.remove();
                });
              document.getElementById("msg13").classList.remove("hidden");
              document
                .getElementById("msg13")
                .insertAdjacentHTML("afterend", typingEffect());
              scrollToBottom();
              setTimeout(function () {
                document
                  .querySelectorAll(".temp-typing")
                  .forEach(function (element) {
                    element.remove();
                  });
                document.getElementById("msg14").classList.remove("hidden");
                document
                  .getElementById("msg14")
                  .insertAdjacentHTML("afterend", typingEffect());
                scrollToBottom();
                setTimeout(function () {
                  document
                    .querySelectorAll(".temp-typing")
                    .forEach(function (element) {
                      element.remove();
                    });
                  document.getElementById("msg15").classList.remove("hidden");
                  document
                    .getElementById("msg15")
                    .insertAdjacentHTML("afterend", typingEffect());
                  scrollToBottom();
                  setTimeout(function () {
                    document
                      .querySelectorAll(".temp-typing")
                      .forEach(function (element) {
                        element.remove();
                      });
                    document.getElementById("msg16").classList.remove("hidden");
                    document
                      .getElementById("msg16")
                      .insertAdjacentHTML("afterend", typingEffect());
                    scrollToBottom();
                    setTimeout(function () {
                      document
                        .querySelectorAll(".temp-typing")
                        .forEach(function (element) {
                          element.remove();
                        });
                      document
                        .getElementById("msg17")
                        .classList.remove("hidden");
                      scrollToBottom();
                    }, 0);
                  }, 2250);
                }, 1250);
              }, 1750);
            }, 1250);
          }, 250);
        }
      }
    });
  });

  function scrollToBottom(elementId) {
    var object = document.querySelector("main");
    var windowHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
    document.documentElement.scrollTop =
      object.offsetTop + object.offsetHeight - windowHeight;
  }

  function typingEffect(cssClass) {
    var string =
      '<div class="temp-typing bg-gray-200 p-3 rounded-lg shadow-xs mt-2 inline-block">';
    string += '<div class="typing-animation">';
    string += '<div class="typing-dot"></div>';
    string += '<div class="typing-dot"></div>';
    string += '<div class="typing-dot"></div>';
    string += "</div>";
    string += "</div>";
    return string;
  }
});

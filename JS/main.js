let list = document.querySelector(".list");
let ulTogller = document.querySelector(".ul-toggler");
let scrollToRight = document.querySelector(".scrollRight");
let scrollToLeft = document.querySelector(".scrollLeft");
let scrollArea = document.querySelector(".scrollArea");
let blurebutton = document.querySelectorAll(".ri");
let blurtarget = document.querySelector(".ulhi");
let cancel = document.querySelector(".cancel");
let notTarget = document.querySelector(".notTarget");
let hiddenText = document.querySelector(".hidTe");
let showText = document.querySelector(".more");
let hideText = document.querySelector(".less");
let ulSwitch = document.querySelector(".switch");
let ulmood = document.querySelector(".moodul");
let darkLight = document.querySelector(".darkLight");
let button = document.getElementById("tog");
let h = document.querySelector("html");
let goBack = document.querySelector(".goBack");

ulTogller.addEventListener("click", () => {
  list.classList.toggle("hidden");
});

scrollToLeft.onclick = () => {
  scrollArea.scrollBy({ left: -180, behavior: "smooth" });
};

scrollToRight.onclick = () => {
  scrollArea.scrollBy({ left: 180, behavior: "smooth" });
};

let eve = () => {
  for (let i = 0; i < blurebutton.length; i++) {
    blurebutton[i].onclick = () => {
      console.log(i);
      if (blurtarget.classList.contains("hidden")) {
        blurtarget.classList.remove("hidden");
      } else {
        blurtarget.classList.add("hidden");
      }
      blurtarget.classList.add("flex");
    };
  }
};
eve();

cancel.onclick = () => {
  blurtarget.classList.add("hidden");
};

addEventListener("click", (ele) => {
  if (
    !ele.target.classList.contains("notTarget") &
    ele.target.classList.contains("ulhi")
  ) {
    blurtarget.classList.add("hidden");
  }
});

showText.onclick = () => {
  hiddenText.classList.remove("hidden");
  showText.classList.add("hidden");
};

hideText.onclick = () => {
  hiddenText.classList.add("hidden");
  showText.classList.remove("hidden");
};

ulSwitch.onclick = () => {
  ulmood.classList.toggle("hidden");
};

function creatLocalStorage() {
  window.localStorage.setItem("mood", button.case);
}
darkLight.onclick = () => {
  ulmood.classList.add("hidden");
  if (h.classList.contains("dark")) {
    h.classList.remove("dark");
    h.classList.add("light");
    button.case = "light";
  } else {
    h.classList.add("dark");
    button.case = "dark";
  }
  creatLocalStorage();

  list.classList.add("hidden");
};

if (localStorage.getItem("mood")) {
  h.classList.add(localStorage.mood);
}

goBack.onclick = () => {
  list.classList.add("hidden");
};

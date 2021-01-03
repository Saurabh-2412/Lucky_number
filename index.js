const luckyNumber = document.querySelector("#lucky-num");
const dob = document.querySelector("#bday");
const form = document.querySelector(".form");
const section = document.querySelector("section");
const result = document.querySelector(".result");
const model = document.querySelector(".model");
const modelBtn = document.querySelector(".model-btn");
const img = document.querySelector(".img");
const para = document.querySelector("#para");
img.style.display = "none";
model.style.display = "none";

setTimeout(() => {
  model.style.display = "";
}, 5000);

modelBtn.addEventListener("click", () => {
  model.style.display = "none";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const dateSum = dob.value.split("-").reduce((a, c) => {
    console.log("a : " + a);
    console.log("c : " + c);
    return Number(a) + Number(c);
  }, 0);
  const luckyNumberber = Number(luckyNumber.value);

  const areYouLucky = dateSum % luckyNumberber === 0 ? true : false;
  console.log(areYouLucky);
  luckyNumber.value = "";
  dob.value = "";

  section.classList.add("lucky-section");
  if (areYouLucky) {
    result.textContent = "Congratulations, You're lucky person 🥰";
    para.style.display = "block";
    para = "Happy";
  } else {
    result.textContent = `OHHH! You're lucky number is no more luckier..😑`;
    para.style.display = "block";
    para = "Sad"
  }
});

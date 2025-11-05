const input = document.getElementById("inputText");
const showBtn = document.getElementById("showBtn");
const clearBtn = document.getElementById("clearBtn");
const display = document.getElementById("display");
const fileInput = document.getElementById("fileInput");

let letters = [];
let active = false;

function showRandomLetter() {
  if (!active || letters.length === 0) return;
  const randIndex = Math.floor(Math.random() * letters.length);
  const char = letters[randIndex];
  display.textContent = char;

  display.classList.remove("display");
  void display.offsetWidth;
  display.classList.add("display");
}

showBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (!text) return alert("Please input at least 1 words !!!");

  letters = text.split(/\s*/).filter((c) => c !== "");
  active = true;
  showRandomLetter();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    showRandomLetter();
  }
});

clearBtn.addEventListener("click", () => {
  display.textContent = "...";
  active = false;
  letters = [];
  input.value = "";
});

fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(evt) {
    input.value = evt.target.result;
  };
  reader.readAsText(file, "utf-8");
});

let select = document.querySelector("select");
const html = document.querySelector("html");
document.body.style.padding = "10px";

function update(bgcolor, textColor) {
  html.style.backgroundColor = bgcolor;
  html.style.color = textColor;
}

select.addEventListener("change", () =>
  select.value == "black" ? update("black", "white") : update("white", "black")
);

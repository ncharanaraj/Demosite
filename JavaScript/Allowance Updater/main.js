const checkbox = document.querySelector("input");
const para = document.querySelector("p");
let shoppingDone = false;

checkbox.addEventListener("change", () => {
  checkbox.disabled = true;
  shoppingDone = true;
  updateAllowance();
});

function updateAllowance() {
  let childAllowance;
  if (shoppingDone === true) {
    childAllowance = 10;
  } else {
    childAllowance = 5;
  }
  para.textContent = `Child has earned \$${childAllowance} this week.`;
}

updateAllowance();

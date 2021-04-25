const buttons = document.querySelector(".buttons");
const bulb = document.querySelector(".lightbulb");

buttons.addEventListener("click", (e) => {
  if (e.target.id === "on") {
    bulb.classList.add("on");
  }
  if (e.target.id === "off") {
    bulb.classList.remove("on");
  }
  if (e.target.id === "toggle") {
    bulb.classList.toggle("on");
  }
  if (e.target.id === "end") {
    bulb.remove("on");
    document.getElementById("on").setAttribute("disabled", true);
    document.getElementById("end").setAttribute("disabled", true);
    document.getElementById("toggle").setAttribute("disabled", true);
    document.getElementById("off").setAttribute("disabled", true);
  }
});

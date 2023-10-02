// 1.2 button interactions links to css.

const btn = document.querySelector(".btn");

//1.2 hover changes the button background colour to green.
btn.addEventListener("mouseover", () => {
  btn.classList.add("hover");
});

btn.addEventListener("mouseout", () => {
  btn.classList.remove("hover");
});

//1.2 click changes the button background colour to dark green.
btn.addEventListener("click", () => {
  btn.classList.toggle("clicked");
}); 

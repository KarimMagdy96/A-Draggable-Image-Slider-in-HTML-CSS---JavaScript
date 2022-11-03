const carosel = document.querySelector(".carosel");

let isDragStart = false;

const dragestart = () => {
  isDragStart = true;
};
const draggering = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  carosel.scrollLeft = e.pageX;
};

carosel.addEventListener("mousedown", dragestart);
carosel.addEventListener("mousemove", draggering);

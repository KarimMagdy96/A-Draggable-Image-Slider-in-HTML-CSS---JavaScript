const carosel = document.querySelector(".carosel");

let isDragStart = false;
let prevpagex;
let preScroolLeft;

const dragestart = (e) => {
  isDragStart = true;
  prevpagex= e.pageX
  preScroolLeft= carosel.scrollLeft;
};
const draggering = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  let possisiondiff = e.pageX - prevpagex;
  carosel.scrollLeft = preScroolLeft - possisiondiff;
};

const drageend=()=>{
    isDragStart = false;
}

carosel.addEventListener("mousedown", dragestart);
carosel.addEventListener("mouseup", drageend);
carosel.addEventListener("mousemove", draggering);

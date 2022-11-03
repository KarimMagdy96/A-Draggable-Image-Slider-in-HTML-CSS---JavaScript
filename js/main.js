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

const drageend=()=>{
    isDragStart = false;
}

carosel.addEventListener("mousedown", dragestart);
carosel.addEventListener("mouseup", drageend);
carosel.addEventListener("mousemove", draggering);

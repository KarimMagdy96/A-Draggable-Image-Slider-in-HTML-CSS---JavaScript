const carosel = document.querySelector(".carosel");
const arrowicons = document.querySelectorAll(".wrapper i " );
const firstImg = document.querySelectorAll(".carosel img ")[0];
let firstimgwidth= firstImg.clientWidth + 14

let isDragStart = false;
let prevpagex;
let preScroolLeft;

arrowicons.forEach(icon=>{
    icon.addEventListener('click',()=>{
        if(icon.id=='left'){
            console.log('hello')
            carosel.scrollLeft-=firstimgwidth
        }else{
            carosel.scrollLeft+=firstimgwidth
        }
    })
})

const dragestart = (e) => {
  isDragStart = true;
  prevpagex= e.pageX
  preScroolLeft= carosel.scrollLeft;
};
const draggering = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
 carosel.classList.add('test')
 console.log('worrrrrrrrrrrrrrrrrrrrrk')
  let possisiondiff = e.pageX - prevpagex;
  carosel.scrollLeft = preScroolLeft - possisiondiff;
};

const drageend=()=>{
    isDragStart = false;
   
}

carosel.addEventListener("mousedown", dragestart);
carosel.addEventListener("touchstart", dragestart);
carosel.addEventListener("mouseup", drageend);
carosel.addEventListener("touchend", drageend);
carosel.addEventListener("mousemove", draggering);
carosel.addEventListener("touchmove", draggering);

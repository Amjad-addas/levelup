let bars = document.getElementById("bars")
let ul = document.getElementById("show")
let tester=0;
bars.addEventListener("click", function(){
    if (tester==0){
    ul.classList.add("show")
    tester=1
    }
    else if(tester==1){
        ul.classList.remove("show")
        tester = 0
    }



} );

photo=document.getElementById("photo")
about=document.getElementById("about")
para=document.getElementById("para")
count=document.getElementById("counts")
whyUs=document.getElementById("why-us")
features=document.getElementById("features")
ourCourses=document.getElementById("our-courses")
trainer=document.getElementById("trainer")
footer=document.getElementById("footer")
main=document.getElementById("main")
toTop=document.getElementById("to-top")
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 10) {
    console.log("10")
    about.style.display="block";
    photo.classList.add("anima2");
    para.classList.add("anima1");
    main.style.height="100%"

  }
  if(document.documentElement.scrollTop > 350){
    counts.style.display="block";
    count.classList.add("animas");
    toTop.style.display="block";
  }
  if(document.documentElement.scrollTop > 540){
    whyUs.style.display="block";
    whyUs.classList.add("anima1");
  }
  if(document.documentElement.scrollTop > 1000){
    features.style.display="block";
    features.classList.add("anima2");
  }
  if(document.documentElement.scrollTop > 1350){
    ourCourses.style.display="block";
    ourCourses.classList.add("anima3");
  }
  if(document.documentElement.scrollTop > 2050){
    trainer.style.display="block";
    trainer.classList.add("anima1");}
    if(document.documentElement.scrollTop > 2700){
        footer.style.display="block";
        footer.classList.add("anima3");
      }
}



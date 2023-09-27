//playbtn animation

function videoplaybtn(){
    let video = document.querySelector("#video-container")
    let playbtn = document.querySelector("#playbtn")
video.addEventListener("mouseenter", function(){
    gsap.to(playbtn, {
        scale: 1, 
        opacity: 1
    })
})
video.addEventListener("mouseleave", function(){
    gsap.to(playbtn, {
        scale: 0,
        opacity: 0
    })
})
video.addEventListener("mousemove", function(dets){
    gsap.to(playbtn,{
        left:dets.x-50,
        top : dets.y-50
    })
})

}
videoplaybtn()

//page loader animation

function pageplayanimation() {
    gsap.from("#page1 h1", {
        y: 100,
        opacity: 0,
        delay: 0.5,
        duration: 0.6,
        stagger: 0.3,
    })
    gsap.from("#page1 #page-container", {
        scale: 0.9,
        opacity: 0,
        delay: 1.3,
        duration: 0.3,
    })
}
pageplayanimation()


//locomotive js

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// box curosr animation
function cursoranimation(){
    document.addEventListener('mousemove', function(dets){
        gsap.to('#cursor', {
            top:dets.y, 
            left:dets.x
        })
    })
    document.querySelectorAll('.products').forEach(function(elem){
        elem.addEventListener('mouseenter', function(){
            gsap.to('#cursor', {
                transform : "translate(-50%, -50%) scale(1)"
            })
        })
        elem.addEventListener('mouseleave', function(){
            gsap.to('#cursor', {
               transform: "translate(-50%, -50%) scale(0)"
            })
        })
    })
}
cursoranimation()
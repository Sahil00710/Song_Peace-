gsap.to("#nav",{
    backgroundColor: "#000",
    duration:0.5,
    height:"120px",
    scrollTrigger:{
        trigger:"nav",
        scoller:"body",
        markers:true,
        start: "top -10%",
        end:"top -10%",
        scrub: 1
        
    }
})
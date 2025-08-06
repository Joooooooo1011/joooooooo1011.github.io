btnPdfFullscreen.addEventListener("click", () => framePdf.requestFullscreen());

window.addEventListener("keydown",(event) =>{
    if(key ==='f'){
        event.preventDefault();
        framePdf.requestFullscreen();
    }
});
let burger = document.querySelector('.burger')
let menubar = document.querySelector('.menubar')
let boxes = document.querySelector('.boxes')


burger.addEventListener('click',function(e){
    if( menubar.classList.contains ("menubarcopy")){
        menubar.classList.remove ("menubarcopy");
    }else{
        menubar.classList.add ("menubarcopy");
    }
})
boxes.addEventListener('click',function(e){
    if( menubar.classList.contains ("menubarcopy")){
        menubar.classList.remove ("menubarcopy");
    }
})
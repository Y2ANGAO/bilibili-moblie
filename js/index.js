window.addEventListener('load',function(){
    var navTextList = document.querySelector('.nav-text-list');
    var navArrowTop = document.querySelector('.nav-arrow-top');
    var navArrowBottom = document.querySelector('.nav-arrow-bottom');
    var navTextListHight = navTextList.offsetHeight;
    navTextList.style.height = 0 + 'px';
    navArrowBottom.addEventListener('click',function(){
        navTextList.style.height = navTextListHight + 30 + 'px';
    })
    navArrowTop.addEventListener('click', function () {
        navTextList.style.height = 0 + 'px';
    })
})
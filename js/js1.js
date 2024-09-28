const imgs = document.querySelector('.sliders img')
const spans = document.querySelectorAll('.carousel-progress span')
const progress = document.querySelector('.carousel-progress')
const sliders = document.querySelector('.sliders')
const slider = document.querySelector('.slider')
   
progress.addEventListener('click',function(e){
    if(e.target.tagName === 'SPAN'){
        let num = +e.target.dataset.id             
        sliders.innerHTML = `<img src="./picture/slider${num}.jpeg" alt="" class="slider-image">`
        //移除类
        progress.querySelector('.active').classList.remove('active')
        //添加类 
        e.target.classList.add('active')    
    }
})

//轮播图定时器
let index = 0
let timeId=setInterval(function(){
    spans.forEach(span => span.classList.remove('active'));  
    sliders.innerHTML = `<img src="./picture/slider${index + 1}.jpeg" alt="" class="slider-image">`
    spans[index].classList.add('active')
    index++
    if(index >= 3){
        index = 0
    }
},2000)
//鼠标经过和离开
slider.addEventListener('mouseenter',() =>{
    clearInterval(timeId)
})
slider.addEventListener('mouseleave',() =>{
    clearInterval(timeId)
    timeId=setInterval(function(){
    spans.forEach(span => span.classList.remove('active'));  
    sliders.innerHTML = `<img src="./picture/slider${index + 1}.jpeg" alt="" class="slider-image">`
    spans[index].classList.add('active')
    index++
    if(index >= 3){
        index = 0
    }
},2000)
})
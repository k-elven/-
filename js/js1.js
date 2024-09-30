/* 获取元素 */
const imgs = document.querySelector('.sliders img')
const spans = document.querySelectorAll('.carousel-progress span')
const progress = document.querySelector('.carousel-progress')
const sliders = document.querySelector('.sliders')
const slider = document.querySelector('.slider')
const left = document.querySelector('.slider .left')
const right = document.querySelector('.slider .right')

const bottomBox = document.querySelector('.bottom-box')
/* 轮播图模块 */

//三个span点击对应图片
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
let index = 1
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

//轮播图-箭头模块
right.addEventListener('click', e => {
    e.preventDefault()
    spans.forEach(span => span.classList.remove('active'));  
    sliders.innerHTML = `<img src="./picture/slider${index + 1}.jpeg" alt="" class="slider-image">`
    spans[index].classList.add('active')
    index++
    // console.log("之前的index值为:",index)
    if(index >= 3){
        index = 0
    }
})
left.addEventListener('click', e => {
    // // let num = 3
    e.preventDefault()
    //移除所有 span 上 active 类
    if (index === 1){
        index = 4
        spans.forEach(span => span.classList.remove('active'));  
        sliders.innerHTML = `<img src="./picture/slider${index - 1}.jpeg" alt="" class="slider-image">`
        spans[index-2].classList.add('active')
        index--
    }else if(index === 0){
        index = 3
        console.log("现在的index值为:",index)
        spans.forEach(span => span.classList.remove('active'));  
        sliders.innerHTML = `<img src="./picture/slider${index - 1}.jpeg" alt="" class="slider-image">`
        spans[index-2].classList.add('active')
        index--
    }else{
        // console.log("现在的index值为:",index)
        spans.forEach(span => span.classList.remove('active'));  
        sliders.innerHTML = `<img src="./picture/slider${index - 1}.jpeg" alt="" class="slider-image">`
        spans[index-2].classList.add('active')
        index--
    }
})

//返回页面最顶部
window.addEventListener('scroll',() => {
    let n = this.document.documentElement.scrollTop
    if(n>400){
        bottomBox.style.display = 'block'
        bottomBox.style.position = 'fixed'
    }else{
         bottomBox.style.display = 'none'
    }
    bottomBox.addEventListener('click', () => {
        document.documentElement.scrollTop = 0  
    })
})

//导航栏跟随
const navBar = document.querySelector('.header-nav .wrap')
window.addEventListener('scroll',function(){
    const n = this.document.documentElement.scrollTop
    // console.log(n)
    // console.log(navBar.offsetTop)
    if(n>400){
        navBar.classList.add('follow')
    }else{
        navBar.classList.remove('follow')
    }
})
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
// xử lí bấm menu
const getMenuIcon = $('.nav--menu')
getMenuIcon.onclick = function(){
    document.querySelector('.nav--container-menu').classList.toggle('show')
}

// xử lí chuyển content
const getTabItem = $$('.nav--list-item-link ')
const getTabMenuItem = $$('.nav--menu-item ')
const getTabPane = $$('.tab-pane')
getTabItem.forEach((element,index) => {
    element.onclick = function(){
        document.querySelector(".nav--list-item-link.active").classList.remove("active")
        document.querySelector(".tab-pane.active").classList.remove("active")
        document.querySelector(".nav--menu-item.active").classList.remove("active")
        
        this.classList.add("active");
        getTabPane[index].classList.add("active")
        getTabMenuItem[index].classList.add("active")

        // clear interval
        if(index!=0){
            console.log('remove');
            clearInterval(setInterval(setBackground,5000))
        }else{
            console.log('add');
            setInterval(setBackground,5000)
        }
    }
});

getTabMenuItem.forEach((element,index) => {
    element.onclick = function(){
        document.querySelector(".nav--list-item-link.active").classList.remove("active")
        document.querySelector(".tab-pane.active").classList.remove("active")
        document.querySelector(".nav--menu-item.active").classList.remove("active")
        
        this.classList.add("active");
        getTabPane[index].classList.add("active")
        getTabItem[index].classList.add("active")

        // clear interval
        if(index!=0){

            clearInterval(setInterval(setBackground,5000))
        }else{
            setInterval(setBackground,5000)
        }
        
    }
});
const slider =  document.querySelector('.tab-pane__home')
console.log(slider);


// handle slinebackground change
let i = 1;
function setBackground(){
    const background = ['background0.jpg','background1.jpg','background2.jpg']
    const slider =  document.querySelector('.tab-pane__home')
    slider.style.backgroundImage = `url(./assets/img/${background[i]})`
    i++
        if(i==3){
            i = 0
        }
    
}


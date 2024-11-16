const Hamburger=document.querySelector(".hamburger")
const sideNav=document.querySelector(".side-nav")
const rightSection=document.querySelector(".right-section")
const topBar=document.querySelector(".top-bar")
const userInfo=document.querySelector(".user-info")
const groupName=document.querySelector(".group-name")
const navLink=document.querySelectorAll(".nav-link")


let open=false

function openNav(){
   if(open==false){
   Hamburger.classList.add('open-nav')
   setTimeout(function(){
    Hamburger.classList.remove('open-nav')
   },1000)
   sideNav.style.width="7%"
   rightSection.style.left="7.1%"
   topBar.style.width="93%"
   topBar.style.left="7%"
   groupName.style.display='none'
   navLink.forEach(function(element) {
      element.style.display = 'none';
  })
  
   open=true
  }
   else if(open){
      Hamburger.classList.add('open-nav')
      setTimeout(function(){
       Hamburger.classList.remove('open-nav')
      },1000)
      sideNav.style.width="17%"
      rightSection.style.left="17%"
      topBar.style.width=" 82%"
      topBar.style.left=" 17%"
      
      navLink.forEach(function(element) {
         element.style.display = 'block';

     });
     groupName.style.display='block'

      open=false
   }
}
// Header Toggle 

let MenuBtn = document.getElementById("MenuBtn");

MenuBtn.addEventListener('click',function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
});

// Typping Effect

let typed = new Typed('.auto-input',{
    strings: ['Front-End Developer','Freelancer!','UI Designer!','YouTUber!'],
    typeSpeed: 90,
    backSpeed: 90,
    backDelay: 2000,
    loop: true,

     
});

// Active Link State On Scroll
 
// Get All Links
let nacLinks = document.querySelectorAll('nav ul li a');
//Get All Secction 
let secction = document.querySelectorAll('section');

window.addEventListener('scroll',function(){
   
    const scrollPos = window.scrollY + 20

    secction.forEach(section => {

        if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)) {
            
            navLinks.forEach(link => {

                link.classList.remove('active');
               
                if(section.getAttribute('id') === link.getAttribute('href').substring(1)) {
               
                    link.classList.add('active')
                }
            });
        }
    });
});